import { NavigationScreenProp } from "react-navigation";
import { IAppConfigState } from "./app-config";
import { IKundeState } from "./kunde";
import { IReduxAsyncState } from "./redux-async";

export interface IStoreState {
  kunde: IKundeState;
  ssoToken: IReduxAsyncState;
  navigation: NavigationScreenProp<any, any>;
  exampleAppNavigation: NavigationScreenProp<any, any>;
  appConfig: IAppConfigState;
}
