import { IReduxAsyncState } from "./redux-async";

export interface IKunde {
  navn?: string;
}

export interface IKundeState extends IReduxAsyncState {
  data?: IKunde;
}
