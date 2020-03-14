import {createAction} from '@reduxjs/toolkit';

export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

// types

interface ApiRequest {
  type: typeof API_REQUEST;
  payload: string;
}

interface ApiSuccess {
  type: typeof API_SUCCESS;
  meta: {
    feature: string;
  };
}

interface ApiError {
  type: typeof API_ERROR;
  meta: {
    feature: string;
  };
}

export type ApiActionTypes = ApiRequest | ApiSuccess | ApiError;

// action creators
export const apiRequest = createAction(
  `${feature} ${API_REQUEST}`,
  ({body, method, url, feature}) => ({
    payload: body,
    meta: {method, url, feature},
  }),
);

export const apiSuccess = createAction(
  `${feature} ${API_SUCCESS}`,
  ({response, feature}) => ({
    payload: response,
    meta: {feature},
  }),
);

export const apiError = createAction(
  `${feature} ${API_ERROR}`,
  ({error, feature}) => ({
    payload: error,
    meta: {feature},
  }),
);
