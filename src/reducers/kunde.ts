import * as actionTypes from "../action-types/kunde";
import { KundeAction } from "../actions/kunde";
import { IKundeState } from "../types/kunde";

const initialState = {
  data: undefined,
  error: undefined,
  isFetching: false,
};

const kundeReducer = (
  state: IKundeState = initialState,
  action: KundeAction,
): IKundeState => {
  switch (action.type) {
    case actionTypes.REQUEST_KUNDE: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case actionTypes.RECEIVE_KUNDE: {
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    }
    case actionTypes.FETCH_ERROR_KUNDE: {
      return {
        isFetching: false,
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default kundeReducer;
