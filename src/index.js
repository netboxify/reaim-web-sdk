import {
  noop,
  urlBase64ToUint8Array
} from './helpers';

import {
  REAIM_SDK_VISITS,
  REAIM_DENIED_ON_VISITS,
  REAIM_PUSH_USER_SUBSCRIBED,
  REAIM_UID
} from './constants';

class ReAimSDK {
  constructor(onAllow, onBlock) {
    if (onAllow && typeof onAllow !== 'function') {
      throw new Error('Type of onAllow parameter should be function.');
    }

    if (onBlock && typeof onBlock !== 'function') {
      throw new Error('Type of onBlock parameter should be function.');
    }

    this.metaEndpoint = process.env.NODE_ENV !== 'production' ? 'http://localhost:4343' : 'https://subs.reaim.me';
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

  registerSW() {
    return navigator.serviceWorker.register('/reaim-sdk-web.js');
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

  async saveUser(user) {
    try {
      const res = await fetch(this.metaEndpoint + '/save', {
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
      console.log(err);
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

      this.onAllow();
      const stringified = JSON.stringify(subscription);
      const parsed = JSON.parse(stringified);
      const userObject = this.prepareRequest(parsed, metadata);

      this.saveUser(userObject);

      if (metadata.wn) {
        this.showWelcomeNotification(metadata);
      }
    } catch (err) {
      console.log(err);
      this.log('user_declined');
      this.onBlock();
    }
  }

  showWelcomeNotification(metadata) {
    try {
      const wnContent = JSON.parse(atob(metadata.wn_content));

      this.registration.showNotification(wnContent.title, {
        body: wnContent.description,
        data: { url: wnContent.url }
      });
    } catch (err) {
      console.log(err);
    }
  }

  showCustomModal(metadata, promptMeta) {

    const css = `
        .reaim-web-modal {
          box-sizing: border-box;
          display: flex;
          position: absolute;
          max-width: 547px;
          padding: 45px;
          font-size: 14px;
          font-weight: 100;
          width: 100%;
          height: 200px;
          background: ${promptMeta.backgroundColor};
          color: ${promptMeta.fontColor};
          margin: 0 auto;
          left: 0;
          right: 0;
          box-shadow: 0 20px 70px 0 #E5E8EC;
          border-radius: 8px;
          top: 0;
        }

        .reaim-prompt-logo-branding small a {
          position: relative;
          top: 15px;
          text-decoration: none;
          opacity: 0.5;
          color: #020E17;
          font-size: 10px;
          text-decoration: none;
        }

        .reaim-prompt-logo {
          width: 80px;
          height: 80px;
          margin-right: 30px;
        }

        .reaim-prompt-logo img {
          max-width: 80px;
          width: 100%;
        }

        .reaim-modal-content {
          width: 350px;
          position: relative;
        }

        .reaim-modal-content p {
          height: 65px;
          font-size: 16px;
          margin-top: 0;
        }

        .reaim-prompt-buttons {
          position: absolute;
          right: 20px;
        }

        .reaim-prompt-buttons button {
          height: 52px;
          border-radius: 8px;
          cursor: pointer;
          margin-left: 10px;
          padding: 10px 20px;
          border: none;
          outline: none;
        }

        .reaim-button-deny {
          backgorund: ${promptMeta.blockButtonColor};
          color: ${promptMeta.blockFontColor};
        }

        .reaim-button-accept {
          background: ${promptMeta.allowButtonColor};
          color: ${promptMeta.allowFontColor};
        }

      `;

    const html = `
        <div class="reaim-prompt-logo-branding">
          <div class="reaim-prompt-logo">
            <img src="${promptMeta.logo}" alt="logo">
          </div>

          <small><a href="https://reaim.me" target="_blank" rel="noopener">Powered by ReAim</a></small>
        </div>

        <div class="reaim-modal-content">
          <p>${promptMeta.actionText}</p>
          <div class="reaim-prompt-buttons">
            <button class="reaim-button-deny">${promptMeta.blockButton}</button>
            <button class="reaim-button-accept">${promptMeta.allowButton}</button>
          </div>
        </div>
      `;

    const ReAimCSS = document.createElement('style');

    ReAimCSS.innerHTML = css;

    const ReAimDOM = document.createDocumentFragment();
    const htmlDOM = document.createElement('div');

    htmlDOM.classList.add('reaim-web-modal');
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
    const promptMeta = JSON.parse(atob(metadata.prompt));

    if (metadata.prompt_type === 'custom') {
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

export default ReAimSDK;
