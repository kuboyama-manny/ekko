import * as ActionTypes from '../utils/actionType';
import * as ApiServices from '../services/service';
import {notification} from '../utils/function';

export const authApiLoading = () => ({
  type: ActionTypes.AUTH_API_LOADING,
});

export const authApiFailed = (error) => ({
  type: ActionTypes.AUTH_API_FAILED,
  payload: error,
});

export const changeScrollFocus = (focus) => ({
  type: ActionTypes.CHANGE_SCROLL_FOCUS,
  payload: focus,
});

export const changeLoginState = (isLoggedIn) => {
  return {
    type: ActionTypes.CHANGE_LOGIN_STATE,
    payload: isLoggedIn,
  }
};

export const login = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.logInService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch(authApiFailed(error));
      });
  };
};

export const subscribeWaitlist = (data) => {
  return (dispatch, getState) => {
    dispatch(authApiLoading());
    return ApiServices.subscribeWaitlistService(data)
      .then((response) => {
        dispatch({
          type: ActionTypes.SUBSCRIBE_WAITLIST_SUCCESS,
          payload: response.data,
        });
        return Promise.resolve(response);
      })
      .catch((error) => {
        if (error && error.data && error.data.message) {
          notification('error', error.data.message);
        }
        dispatch(authApiFailed(error));
        return Promise.reject(error);
      });
  };
};
