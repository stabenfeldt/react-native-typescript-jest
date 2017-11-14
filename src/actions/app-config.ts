import * as actionTypes from "../action-types/app-config";
import { IAppConfigState } from "../types/app-config";

export interface ISetAppConfigAction {
  config?: IAppConfigState;
  type: actionTypes.SET_APP_CONFIG;
}

export type AppConfigAction = ISetAppConfigAction;

export type SetAppConfigInterface = (config: IAppConfigState) => ISetAppConfigAction;

export const setAppConfigAction: SetAppConfigInterface = (config) => ({
  config,
  type: actionTypes.SET_APP_CONFIG,
});
