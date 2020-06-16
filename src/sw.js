/* eslint-disable */
import regeneratorRuntime from 'regenerator-runtime';
/* eslint-enable */

const API = process.env.NODE_ENV !== 'production' ? 'http://localhost:5555' : 'https://events.reaim.me';

class ReAimSDK {

  static async log(kind, tracking) {
    if (kind && tracking) {
      fetch(`${API}/log?k=${kind}&${atob(tracking)}`);
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

    ReAimSDK.log('i', payload.t);
    event.waitUntil(self.registration.showNotification(title, options));
  }

  static async handleClickEvent(event) {
    event.notification.close();

    if (event.notification.data.url) {
      ReAimSDK.log('c', event.notification.data.tracking);
      event.waitUntil(self.clients.openWindow(event.notification.data.url));
    }
  }

  static async handleUpdateSubscription(event) {

  }
}

self.addEventListener('install', ReAimSDK.handleInstall);
self.addEventListener('push', ReAimSDK.handlePushEvent);
self.addEventListener('notificationclick', ReAimSDK.handleClickEvent);
self.addEventListener('pushsubscriptionchange', ReAimSDK.handleUpdateSubscription);
