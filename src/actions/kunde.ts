import * as actionTypes from "../action-types/kunde";
import { IKunde } from "../types/kunde";

export interface IRequestKundeAction {
  type: actionTypes.REQUEST_KUNDE;
}

export interface IReceiveKundeAction {
  type: actionTypes.RECEIVE_KUNDE;
  data?: IKunde;
}

export interface IFetchErrorKundeAction {
  type: actionTypes.FETCH_ERROR_KUNDE;
  error: object;
}

export type KundeAction = IRequestKundeAction | IReceiveKundeAction | IFetchErrorKundeAction;

export type RequestKundeInterface = () => IRequestKundeAction;

export const requestKundeAction: RequestKundeInterface = () => ({
  type: actionTypes.REQUEST_KUNDE,
});

export type ReceiveKundeInterface = (data: IKunde) => IReceiveKundeAction;

export const receiveKundeAction: ReceiveKundeInterface = (data) => ({
  data,
  type: actionTypes.RECEIVE_KUNDE,
});

export type FetchErrorKundeInterface = (error: object) => IFetchErrorKundeAction;

export const fetchErrorKundeAction: FetchErrorKundeInterface = (error) => ({
  error,
  type: actionTypes.FETCH_ERROR_KUNDE,
});
