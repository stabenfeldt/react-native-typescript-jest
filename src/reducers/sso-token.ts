import * as actionTypes from "../action-types/sso-token";
import { SSOTokenAction } from "../actions/sso-token";
import { ISSOTokenState } from "../types/sso-token";

const initialState = {
  data: undefined,
  error: undefined,
  isFetching: false,
};

const ssoTokenReducer = (
  state: ISSOTokenState = initialState,
  action: SSOTokenAction,
): ISSOTokenState => {
  switch (action.type) {
    case actionTypes.REQUEST_SSO_TOKEN_FROM_API:
    case actionTypes.REQUEST_SSO_TOKEN_FROM_ASYNC_STORAGE: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case actionTypes.RECEIVE_SSO_TOKEN: {
      return {
        ...state,
        data: action.data,
        isFetching: false,
      };
    }
    case actionTypes.FETCH_ERROR_SSO_TOKEN: {
      return {
        ...state,
        error: action.error,
        isFetching: false,
      };
    }
    default:
      return state;
  }
};

export default ssoTokenReducer;
