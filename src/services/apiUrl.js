/**
 * api base url
 * type { String }
 */
 export const {REACT_APP_BASE_URL} = process.env;

 const VERSION_URL = `${REACT_APP_BASE_URL}/v1`;

const AUTH_URL = `${VERSION_URL}/auth`;

 export const LOG_IN_ENDPOINT = `${AUTH_URL}/login`;
 export const SUBSCRIBE_WAITLIST_ENDPOINT = `${AUTH_URL}/subscribe/waitlist`;