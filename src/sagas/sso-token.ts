import { call, put, select, takeEvery } from "redux-saga/effects";

import * as actionTypes from "../action-types/sso-token";
import { fetchErrorSSOTokenAction, receiveSSOTokenAction } from "../actions/sso-token";
import { ENV_DEMO } from "../constants/environments";
import { getKundeDevicerRequestParams } from "../services/api/kunde";
import { getSSOToken, setSSOToken } from "../services/async-storage/sso-token";
import { callApi } from "./helpers/api";

function* getSSOTokenFromApi() {
  try {
    const { deviceId, systemName, environment } = yield select((state: any) => state.appConfig);
    const ssoToken = yield callApi(getKundeDevicerRequestParams(deviceId, systemName));

    yield call(setSSOToken, ssoToken, environment);
    yield put(receiveSSOTokenAction(ssoToken));

  } catch ({ message }) {
    yield put(fetchErrorSSOTokenAction(message));
  }
}

function* getSSOTokenFromAsyncStorage() {
  try {
    const { environment } = yield select((state: any) => state.appConfig);

    // Should return mock-sso-token if ENV is DEMO
    const ssoToken = environment !== ENV_DEMO ?
      yield call(getSSOToken, environment) :
      "mockSSOToken";

    yield put(receiveSSOTokenAction(ssoToken));

  } catch ({ message }) {
    yield put(fetchErrorSSOTokenAction(message));
  }
}

function* watchSSOTokenAsync() {
  yield takeEvery(actionTypes.REQUEST_SSO_TOKEN_FROM_API, getSSOTokenFromApi);
  yield takeEvery(actionTypes.REQUEST_SSO_TOKEN_FROM_ASYNC_STORAGE, getSSOTokenFromAsyncStorage);
}

export default watchSSOTokenAsync;
