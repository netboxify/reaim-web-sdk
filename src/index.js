import {
  noop,
  urlBase64ToUint8Array,
  isValidToken
} from './helpers';

import {
  REAIM_SDK_VISITS,
  REAIM_DENIED_ON_VISITS,
  REAIM_PUSH_USER_SUBSCRIBED,
  REAIM_UID,
  REAIM_SUBS_API,
  REAIM_EVENTS_API,
  REAIM_SAVE_SUBSCRIPTION,
  PRODUCTION
} from './constants';

import renderUI from './html';
import renderStyles from './css';

/* eslint-disable */
import regeneratorRuntime from 'regenerator-runtime';
/* eslint-enable */

class ReAimSDK {
  constructor(onAllow, onBlock) {
    if (onAllow && typeof onAllow !== 'function') {
      throw new Error('Type of onAllow parameter should be function.');
    }

    if (onBlock && typeof onBlock !== 'function') {
      throw new Error('Type of onBlock parameter should be function.');
    }

    this.metaEndpoint = REAIM_SUBS_API;
    this.onAllow = onAllow || noop;
    this.onBlock = onBlock || noop;
  }

  log(msg) {
    console.log('ReAim SDK -', msg);
  }

  async getMetadata() {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const response = await fetch(this.metaEndpoint + '/info?tz=' + timezone);
    const metadata = await response.json();

    return metadata;
  }

  canSubscribe() {
    return Notification.permission === 'default';
  }

  setAsSubscribed() {
    this.setValue(REAIM_PUSH_USER_SUBSCRIBED, true);
  }

  setAsUnsubscribed() {
    this.setValue(REAIM_PUSH_USER_SUBSCRIBED, false);
  }

  setValue(key, val) {
    localStorage.setItem(key, val);
  }

  getValue(key) {
    return localStorage.getItem(key);
  }

  getSWPath() {
    const path = !PRODUCTION ?
      '/reaim-sw.js' :
      (self.window && self.window.REAIM_SW_PATH_GLOBAL || '/sw.js');

    return path;
  }

  registerSW() {
    const path = this.getSWPath();

    return navigator.serviceWorker.register(path);
  }

  prepareRequest(subscription, metadata) {
    return {
      site_id: metadata.site_id,
      country_id: metadata.country_id,
      platform_id: metadata.platform_id,
      os_id: metadata.os_id,
      timezone_id: metadata.timezone_id,
      tz: new Date().getTimezoneOffset() / 60,
      browser_id: metadata.browser_id,
      user_id: metadata.user_id,
      endpoint: subscription.endpoint,
      auth: subscription.keys.auth,
      p256dh: subscription.keys.p256dh,
      page_url: window.location.pathname,
      sites_uid: this.sitesUID
    };
  }

  subscriptionExisted() {
    return !!(this.getValue(REAIM_UID));
  }

  async saveUser(user) {
    try {
      if (this.subscriptionExisted()) {
        const update = await fetch(`${this.metaEndpoint}/refresh`, {
          method: 'POST',
          body: JSON.stringify({
            id: this.getValue(REAIM_UID),
            endpoint: user.endpoint,
            auth: user.auth,
            p256dh: user.p256dh
          })
        });

        if (update) {
          this.log('user_updated');
        }

        return;
      }

      const res = await fetch(`${this.metaEndpoint}/save`, {
        method: 'POST',
        body: JSON.stringify(user)
      });

      const id = await res.text();

      this.setValue(REAIM_UID, id);
      this.setAsSubscribed();

      if (this.htmlDOM) {
        this.hideModal();
      }

      this.log('user_subscribed');
    } catch (err) {
      this.log(err);
    }
  }

  checkIfStillSubscribed() {
    if (Notification.permission === 'granted') return;
    this.setAsUnsubscribed();
  }

  async tryToSubscribe(metadata) {
    try {
      const subscriptionOptions = {
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(metadata.vapid_pub_key)
      };

      const subscription = await this.registration.pushManager.subscribe(subscriptionOptions);

      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          action: REAIM_SAVE_SUBSCRIPTION,
          subscription: JSON.parse(JSON.stringify(subscription))
        });
      }

      const stringified = JSON.stringify(subscription);
      const parsed = JSON.parse(stringified);
      const userObject = this.prepareRequest(parsed, metadata);

      await this.saveUser(userObject);

      this.onAllow();

      if (metadata.wn) {
        this.showWelcomeNotification(metadata);
      }
    } catch (err) {
      this.log(err);
      this.log('user_declined');
      this.onBlock();
    }
  }

  showWelcomeNotification(metadata) {
    try {
      const wnContent = JSON.parse(decodeURIComponent(atob(metadata.wn_content)));

      this.registration.showNotification(wnContent.title, {
        body: wnContent.description,
        data: { url: wnContent.url }
      });
    } catch (err) {
      this.log(err);
    }
  }

  preloadImage(url) {
    const img = new Image();

    img.src = url;
  }

  showCustomModal(metadata, promptMeta) {
    const css = renderStyles(promptMeta);
    const html = renderUI(promptMeta);

    if (promptMeta.logo) {
      this.preloadImage(promptMeta.logo);
    }

    const ReAimCSS = document.createElement('style');

    ReAimCSS.innerHTML = css;

    const ReAimDOM = document.createDocumentFragment();
    const htmlDOM = document.createElement('div');

    htmlDOM.classList.add('reaim-web-modal');
    htmlDOM.classList.add('reaim-web-modal-closed');
    htmlDOM.innerHTML = html;

    this.htmlDOM = htmlDOM;

    const $deny = htmlDOM.querySelector('.reaim-button-deny');

    $deny.addEventListener('click', (e) => {
      this.hideModal();
      this.logVisitsNumberWhenDenied();
    });

    const $accept = htmlDOM.querySelector('.reaim-button-accept');

    $accept.addEventListener('click', (e) => {
      this.hideModal();
      this.tryToSubscribe(metadata);
    });

    ReAimDOM.appendChild(htmlDOM);
    document.head.appendChild(ReAimCSS);
    document.body.appendChild(ReAimDOM);

    htmlDOM.classList.remove('reaim-web-modal-closed');
  }

  hideModal() {
    this.htmlDOM.style.display = 'none';
  }

  enoughVisitsAfterBlock(visitNumber) {
    const visitsWhenDenied = this.getNumberOfVisitsWhenDenied();
    const pageviews = this.getVisits();

    if (visitsWhenDenied !== 0) {
      if (pageviews >= (visitsWhenDenied + visitNumber)) {
        return true;
      }
      return false;

    }
    return true;

  }

  showModal(metadata) {
    if (metadata.prompt_type === 'custom') {
      const promptMeta = JSON.parse(atob(metadata.prompt));

      if (promptMeta.showImmediately) {
        this.log('show_immediately_custom_prompt');
        this.showCustomModal(metadata, promptMeta);
      } else {
        const visits = this.getVisits();

        if (visits >= promptMeta.sessionNumber && this.enoughVisitsAfterBlock(promptMeta.askAgainAfter)) {
          this.log('show_timed_custom_prompt');
          setTimeout(() => {
            this.showCustomModal(metadata, promptMeta);
          }, promptMeta.showAfter * 1000);
        }
      }
    } else {
      this.log('show_native_prompt');
      this.tryToSubscribe(metadata);
    }
  }

  logVisit() {
    const visits = this.getValue(REAIM_SDK_VISITS) || 0;

    this.setValue(REAIM_SDK_VISITS, +visits + 1);
  }

  logVisitsNumberWhenDenied() {
    const visits = this.getValue(REAIM_SDK_VISITS);

    this.setValue(REAIM_DENIED_ON_VISITS, visits);
  }

  getNumberOfVisitsWhenDenied() {
    const visits = JSON.parse(this.getValue(REAIM_DENIED_ON_VISITS));

    if (visits) {
      return visits;
    }

    return 0;
  }

  getVisits() {
    return JSON.parse(this.getValue(REAIM_SDK_VISITS)) || 0;
  }

  static trackConversion(payout) {
    const params = new URLSearchParams(window.location.search);
    const trackingID = params.get('r_cid');

    if (trackingID && payout && isValidToken(trackingID)) {
      fetch(`${REAIM_EVENTS_API}/conv?t=${trackingID}&payout=${payout}`);
    }
  }

  static addTags(tags) {
    const isSubscribed = JSON.parse(localStorage.getItem(REAIM_PUSH_USER_SUBSCRIBED));
    const sid = JSON.parse(localStorage.getItem(REAIM_UID));

    if (!isSubscribed || !sid) {
      return;
    }

    if (!Array.isArray('tags') && typeof tags === 'string') {
      tags = [tags];
    }

    fetch(`${REAIM_SUBS_API}/tags`, {
      method: 'POST',
      body: JSON.stringify({
        subscriber: sid,
        tags
      })
    });
  }

  async init(sitesUID) {
    this.logVisit();
    this.sitesUID = sitesUID;

    if (!('serviceWorker' in navigator)) return;
    if (!('PushManager' in window)) return;

    this.registration = await this.registerSW();

    if (this.canSubscribe()) {
      this.log('try_to_subscribe');
      const metadata = await this.getMetadata();

      this.showModal(metadata);
    } else {
      this.checkIfStillSubscribed();
    }
  }
}

window.ReAimSDK = ReAimSDK;
export default ReAimSDK;
