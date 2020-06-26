const PRODUCTION = !!(process.env.NODE_ENV === 'production');
const LOCAL_EVENTS_API = 'http://localhost:5555';
const LOCAL_SUBS_API = 'http://localhost:4343';
const PROD_EVENTS_API = 'https://events.reaim.me';
const PROD_SUBS_API = 'https://subs.reaim.me';

export const REAIM_SW_PATH = self.window && self.window.REAIM_SW_PATH_GLOBAL || '/reaim-sw.js';
export const REAIM_SDK_VISITS = 'reaim_sdk_visits';
export const REAIM_DENIED_ON_VISITS = 'reaim_sdk_denied_on_visits';
export const REAIM_PUSH_USER_SUBSCRIBED = 'reaim_sdk_push_user_subscribed';
export const REAIM_UID = 'reaim_sdk_uid';
export const REAIM_SAVE_SUBSCRIPTION = 'reaim_save_subscription';
export const REAIM_EVENTS_API = !PRODUCTION ? LOCAL_EVENTS_API : PROD_EVENTS_API;
export const REAIM_SUBS_API = !PRODUCTION ? LOCAL_SUBS_API : PROD_SUBS_API;
export const REAIM_STORAGE_NAME = 'reaim_sdk_storage';
export const REAIM_IMPRESSION = 'i';
export const REAIM_CLICK = 'c';
