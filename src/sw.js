/* eslint-disable */
import regeneratorRuntime from 'regenerator-runtime';
/* eslint-enable */
import ServiceWorkerStorage from 'serviceworker-storage';
import {
  REAIM_SAVE_SUBSCRIPTION,
  REAIM_EVENTS_API
} from './constants';

const storage = new ServiceWorkerStorage('reaim_sdk_storage', 1);

class ReAimSW {

  static async log(kind, tracking) {
    if (kind && tracking) {
      fetch(`${REAIM_EVENTS_API}/log?k=${kind}&${atob(tracking)}`);
    }
  }

  static handleInstall(event) {
    self.skipWaiting();
  }

  static async handlePushEvent(event) {
    const payload = event.data.json();

    const title = payload.c.t;
    const options = {
      body: payload.c.d,
      icon: payload.c.i,
      image: payload.c.m,
      badge: payload.c.b,
      data: {
        tracking: payload.t,
        url: payload.c.u
      }
    };

    ReAimSW.log('i', payload.t);
    event.waitUntil(self.registration.showNotification(title, options));
  }

  static async handleClickEvent(event) {
    event.notification.close();

    if (event.notification.data.url) {
      ReAimSW.log('c', event.notification.data.tracking);
      event.waitUntil(self.clients.openWindow(event.notification.data.url));
    }
  }

  static async handleUpdateSubscription(event) {

  }

  static async savePush(subscription) {
    await storage.setItem('subscription', subscription);
  }

  static async handleMessage(event) {
    if (event.data.action === REAIM_SAVE_SUBSCRIPTION) {
      event.waitUntil(ReAimSW.savePush(event.data.subscription));
    }
  }
}

self.addEventListener('install', ReAimSW.handleInstall);
self.addEventListener('push', ReAimSW.handlePushEvent);
self.addEventListener('notificationclick', ReAimSW.handleClickEvent);
self.addEventListener('pushsubscriptionchange', ReAimSW.handleUpdateSubscription);
self.addEventListener('message', ReAimSW.handleMessage);
