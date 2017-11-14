import { StackNavigator } from "react-navigation";

import {
  ROUTE_SKADEMELDING_START,
} from "./constants/navigation-routes";

import SkademeldingStart from "./containers/screens/SkademeldingStart";

const AppNavigator = StackNavigator({
  [ROUTE_SKADEMELDING_START]: { screen: SkademeldingStart },
}, {
  navigationOptions: {
    headerTitleStyle: {
      fontFamily: "GjensidigeBrownTT-Regular",
    },
  },
});

export default AppNavigator;
