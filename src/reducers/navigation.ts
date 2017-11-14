import AppNavigator from "../AppNavigator";

import { NavigationStackAction, NavigationState } from "react-navigation";
import { ROUTE_SKADEMELDING_START } from "../constants/navigation-routes";

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams(ROUTE_SKADEMELDING_START),
  null,
);

const navigationReducer = (
  state: NavigationState = initialState,
  action: NavigationStackAction,
): NavigationState => (
  AppNavigator.router.getStateForAction(action, state) || state
);

export default navigationReducer;
