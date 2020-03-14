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

export const apiRequest = ({body, method, url, feature}) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: {method, url, feature},
});

export const apiSuccess = ({response, feature}) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: {feature},
});

export const apiError = ({error, feature}) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: {feature},
});
