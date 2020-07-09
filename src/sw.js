/* eslint-disable */
import regeneratorRuntime from 'regenerator-runtime';
/* eslint-enable */
import ServiceWorkerStorage from 'serviceworker-storage';
import {
  REAIM_SAVE_SUBSCRIPTION,
  REAIM_EVENTS_API,
  REAIM_SUBS_API,
  REAIM_STORAGE_NAME,
  REAIM_IMPRESSION,
  REAIM_CLICK,
  REAIM_UID
} from './constants';

const storage = new ServiceWorkerStorage(REAIM_STORAGE_NAME, 1);

class ReAimSW {

  static async log(kind, tracking, variant) {
    if (kind && tracking && variant) {
      switch (variant) {
        case 'cmp':
          fetch(`${REAIM_EVENTS_API}/log?k=${kind}&${atob(tracking)}`);
          break;
        case 'trg':
          fetch(`${REAIM_EVENTS_API}/trigger?k=${kind}&${atob(tracking)}`);
          break;
        case 'feed':
          fetch(`${REAIM_EVENTS_API}/feed?k=${kind}&${atob(tracking)}`);
          break;
      }
    }
  }

  static async updateSubscription(subscription) {
    try {
      const id = localStorage.getItem(REAIM_UID);

      if (id) {
        const req = new Request(REAIM_SUBS_API + '/refresh', {
          method: 'POST',
          body: JSON.stringify({
            id,
            endpoint: subscription.endpoint,
            auth: subscription.keys.auth,
            p256dh: subscription.keys.p256dh
          })
        });

        self.fetch(req);
      }
    } catch (err) {
      console.log(err);
    }
  }

  static handleInstall(event) {
    self.skipWaiting();
  }

  static handleActivate(event) {
    event.waitUntil(self.clients.claim());
  }

  static async handlePushEvent(event) {
    const payload = event.data.json();

    const title = payload.c.t;
    const options = {
      body: payload.c.d,
      icon: payload.c.i,
      image: payload.c.m,
      badge: payload.c.b,
      actions: payload.c.a,
      data: {
        tracking: payload.t,
        url: payload.c.u,
        actions: payload.c.a,
        variant: payload.v
      }
    };

    ReAimSW.log(REAIM_IMPRESSION, payload.t, payload.v);
    event.waitUntil(self.registration.showNotification(title, options));
  }

  static async handleClickEvent(event) {
    event.notification.close();
    const tracking = event.notification.data.tracking;
    const variant = event.notification.data.variant || 'cmp';

    if (event.action === 'action-1') {
      const url = event.notification.data.actions[0].url;

      ReAimSW.log(REAIM_CLICK, tracking, variant);
      event.waitUntil(self.clients.openWindow(url));
    } else if (event.action === 'action-2') {
      const url = event.notification.data.actions[1].url;

      ReAimSW.log(REAIM_CLICK, tracking, variant);
      event.waitUntil(self.clients.openWindow(url));
    } else {
      if (event.notification.data.url) {
        ReAimSW.log(REAIM_CLICK, tracking, variant);
        event.waitUntil(self.clients.openWindow(event.notification.data.url));
      }
    }
  }

  static async handleUpdateSubscription(event) {
    const newSubscription = await self.registration.pushManager.getSubscription();
    const oldSubscription = JSON.parse(await storage.getItem('subscription'));

    if (!oldSubscription) {
      ReAimSW.saveLocalSubscription(newSubscription);
      ReAimSW.updateSubscription(newSubscription);
    }

    if (newSubscription && oldSubscription && (newSubscription.endpoint !== oldSubscription.endpoint)) {
      ReAimSW.saveLocalSubscription(newSubscription);
      ReAimSW.updateSubscription(newSubscription);
    }
  }

  static async saveLocalSubscription(subscription) {
    await storage.setItem('subscription', subscription);
  }

  static async handleMessage(event) {
    if (event.data.action === REAIM_SAVE_SUBSCRIPTION) {
      event.waitUntil(ReAimSW.saveLocalSubscription(event.data.subscription));
    }
  }
}

self.addEventListener('install', ReAimSW.handleInstall);
self.addEventListener('activate', ReAimSW.handleActivate);
self.addEventListener('push', ReAimSW.handlePushEvent);
self.addEventListener('notificationclick', ReAimSW.handleClickEvent);
self.addEventListener('pushsubscriptionchange', ReAimSW.handleUpdateSubscription);
self.addEventListener('message', ReAimSW.handleMessage);
