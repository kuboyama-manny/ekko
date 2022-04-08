import {requestService} from './request';
import * as ApiUrls from './apiUrl';
import {store} from '../store';

export const commonService = (request, token = true) => {
  let reqObj = {
    method: request.method,
    url: request.url,
  };
  if (token && store.getState().auth.token) {
    reqObj = Object.assign(reqObj, {
      token: `Bearer ${store.getState().auth.token}`,
    });
  }
  if (request.data) {
    reqObj = Object.assign(reqObj, {data: request.data});
  }
  if (request.queryParams) {
    reqObj = Object.assign(reqObj, {queryParams: request.queryParams});
  }
  return requestService(reqObj)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return Promise.reject(error.response);
    });
};

export const logInService = (data) => {
  return commonService(
    {
      method: 'POST',
      url: ApiUrls.LOG_IN_ENDPOINT,
      data,
    },
    false,
  );
};

export const subscribeWaitlistService = (data) => {
  return commonService(
    {
      method: 'POST',
      url: ApiUrls.SUBSCRIBE_WAITLIST_ENDPOINT,
      data,
    },
    false,
  );
};
