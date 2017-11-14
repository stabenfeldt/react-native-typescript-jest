import { IReduxAsyncState } from "./redux-async";

export interface ISSOTokenState extends IReduxAsyncState {
  data?: string;
}
