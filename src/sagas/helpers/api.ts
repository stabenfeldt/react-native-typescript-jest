import { call, select } from "redux-saga/effects";

import { makeRequest } from "../../services/api/request";
import { IRequestParams, POST } from "../../types/request";
import { getCsrfToken } from "./csrf-token";

export function* callApi({ endpoint, method, body, isJson = true }: IRequestParams): any {
  const { deviceId, version, environment, name } = yield select((state: any) => state.appConfig);

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Accept", isJson ? "application/json" : "*");
  headers.append("Applikasjon", "KONSERNAPP");
  headers.append("X-Klient-Navn", name);
  headers.append("X-Klient-Versjon", version);
  headers.append("devid", deviceId);

  const ssoToken = yield select((state: any) => state.ssoToken.data);

  if (ssoToken) {
    headers.append("token", ssoToken);
  }

  if (method === POST) {
    const csrfToken = yield call(getCsrfToken);
    headers.append("X-Requested-By", csrfToken.value);
  }

  return yield call(makeRequest, environment, endpoint, method, headers, body, isJson);
}
