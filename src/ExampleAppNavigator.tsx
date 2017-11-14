import { StackNavigator } from "react-navigation";

import {
  ROUTE_EXAMPLE_APP_BANK_ID_LOGIN,
  ROUTE_EXAMPLE_APP_START,
  ROUTE_EXAMPLE_ENVIRONMENT_SELECTOR,
} from "./constants/navigation-routes";

import ExampleAppBankIdLogin from "./containers/screens/ExampleAppBankIdLogin";
import ExampleAppEnvironmentSelector from "./containers/screens/ExampleAppEnvironmentSelector";
import ExampleAppStart from "./containers/screens/ExampleAppStart";

const AppNavigator = StackNavigator({
  [ROUTE_EXAMPLE_ENVIRONMENT_SELECTOR]: { screen: ExampleAppEnvironmentSelector },
  [ROUTE_EXAMPLE_APP_START]: { screen: ExampleAppStart },
  [ROUTE_EXAMPLE_APP_BANK_ID_LOGIN]: { screen: ExampleAppBankIdLogin },
}, {
  navigationOptions: {
    headerTitleStyle: {
      fontFamily: "GjensidigeBrownTT-Regular",
    },
  },
});

export default AppNavigator;
