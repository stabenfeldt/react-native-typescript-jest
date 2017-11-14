import * as React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import App from "./App";

import { setAppConfigAction } from "./actions/app-config";
import { receiveSSOTokenAction } from "./actions/sso-token";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const loggerMiddleware = createLogger({
  collapsed: true,
});
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware, loggerMiddleware)(createStore);
const store = createStoreWithMiddleware(rootReducer);

sagaMiddleware.run(rootSaga);

class MeldSkadeReactNative extends React.Component<any, any> {

  public componentWillMount() {
    // Properties from consuming Native App
    // ToDo: Only do this if packaged as PROD
    const { ssoToken, environment, deviceId, systemName, version, name } = this.props;
    store.dispatch(receiveSSOTokenAction(ssoToken));
    store.dispatch(setAppConfigAction({
      deviceId,
      environment,
      name,
      systemName,
      version,
    }));

  }

  public render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("MeldSkadeReactNative", () => MeldSkadeReactNative);
