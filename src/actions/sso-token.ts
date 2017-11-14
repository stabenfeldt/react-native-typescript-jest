import * as actionTypes from "../action-types/sso-token";

export interface IRequestSSOTokenFromApiAction {
  type: actionTypes.REQUEST_SSO_TOKEN_FROM_API;
}

export interface IRequestSSOTokenFromAsyncStorageAction {
  type: actionTypes.REQUEST_SSO_TOKEN_FROM_ASYNC_STORAGE;
}

export interface IReceiveSSOTokenAction {
  type: actionTypes.RECEIVE_SSO_TOKEN;
  data: string;
}

export interface IFetchErrorSSOTokenAction {
  type: actionTypes.FETCH_ERROR_SSO_TOKEN;
  error: object;
}

export type SSOTokenAction =
  IRequestSSOTokenFromApiAction |
  IRequestSSOTokenFromAsyncStorageAction |
  IReceiveSSOTokenAction |
  IFetchErrorSSOTokenAction;

export type RequestSSOTokenFromApi = () => IRequestSSOTokenFromApiAction;

export const requestSSOTokenFromApiAction: RequestSSOTokenFromApi = () => ({
  type: actionTypes.REQUEST_SSO_TOKEN_FROM_API,
});

export type RequestSSOTokenFromAsyncStorage = () => IRequestSSOTokenFromAsyncStorageAction;

export const requestSSOTokenFromAsyncStorageAction: RequestSSOTokenFromAsyncStorage = () => ({
  type: actionTypes.REQUEST_SSO_TOKEN_FROM_ASYNC_STORAGE,
});

export type ReceiveSSOToken = (data: string) => IReceiveSSOTokenAction;

export const receiveSSOTokenAction: ReceiveSSOToken = (data) => ({
  data,
  type: actionTypes.RECEIVE_SSO_TOKEN,
});

export type FetchErrorSSOToken = (error: object) => IFetchErrorSSOTokenAction;

export const fetchErrorSSOTokenAction: FetchErrorSSOToken = (error) => ({
  error,
  type: actionTypes.FETCH_ERROR_SSO_TOKEN,
});
