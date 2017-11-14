import { fork } from "redux-saga/effects";

import kunde from "./kunde";
import ssoToken from "./sso-token";

function* rootSaga() {
  yield fork(kunde);
  yield fork(ssoToken);
}

export default rootSaga;
