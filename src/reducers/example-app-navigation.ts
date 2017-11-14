import ExampleAppNavigator from "../ExampleAppNavigator";

import { NavigationStackAction, NavigationState } from "react-navigation";
import { ROUTE_EXAMPLE_ENVIRONMENT_SELECTOR } from "../constants/navigation-routes";

const initialState = ExampleAppNavigator.router.getStateForAction(
  ExampleAppNavigator.router.getActionForPathAndParams(ROUTE_EXAMPLE_ENVIRONMENT_SELECTOR),
  null,
);

const exampleAppnavigationReducer = (
  state: NavigationState = initialState,
  action: NavigationStackAction,
): NavigationState => (
  ExampleAppNavigator.router.getStateForAction(action, state) || state
);

export default exampleAppnavigationReducer;
