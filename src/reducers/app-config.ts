import * as actionTypes from "../action-types/app-config";
import { AppConfigAction } from "../actions/app-config";
import { IAppConfigState } from "../types/app-config";

const initialState = {
  deviceId: undefined,
  environment: undefined,
  name: undefined,
  systemName: undefined,
  version: undefined,
};

const appConfigReducer = (
  state: IAppConfigState = initialState,
  action: AppConfigAction,
): IAppConfigState => {
  switch (action.type) {
    case actionTypes.SET_APP_CONFIG: {
      return {
        ...state,
        ...action.config,
      };
    }
    default:
      return state;
  }
};

export default appConfigReducer;
