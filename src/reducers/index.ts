import { combineReducers } from "redux";

import appConfig from "./app-config";
import exampleAppNavigation from "./example-app-navigation";
import kunde from "./kunde";
import navigation from "./navigation";
import ssoToken from "./sso-token";

const rootReducer = combineReducers({
  appConfig,
  exampleAppNavigation,
  kunde,
  navigation,
  ssoToken,
});

export default rootReducer;
