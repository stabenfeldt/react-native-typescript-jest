import { put, takeEvery } from "redux-saga/effects";

import * as actionTypes from "../action-types/kunde";
import { fetchErrorKundeAction, receiveKundeAction } from "../actions/kunde";
import { getKundeRequestParams } from "../services/api/kunde";
import { callApi } from "./helpers/api";

function* fetchKundeData() {
  try {
    const data = yield callApi(getKundeRequestParams());

    yield put(receiveKundeAction(data));
  } catch ({ message }) {
    yield put(fetchErrorKundeAction(message));
  }
}

function* watchKundeAsync() {
  yield takeEvery(actionTypes.REQUEST_KUNDE, fetchKundeData);
}

export default watchKundeAsync;
