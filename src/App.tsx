import * as React from "react";
import { addNavigationHelpers, NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";

import { ISSOTokenState } from "./types/sso-token";
import { IStoreState } from "./types/store";

import AppNavigator from "./AppNavigator";
import ExampleAppNavigator from "./ExampleAppNavigator";

interface IComponentProps {
  dispatch: any;
}

interface IStateToProps {
  navigation: NavigationScreenProp<any, any>;
  exampleAppNavigation: NavigationScreenProp<any, any>;
  ssoToken: ISSOTokenState;
}

type Props = IComponentProps & IStateToProps;

class App extends React.Component<Props> {
  public render() {
    const { dispatch, ssoToken, navigation, exampleAppNavigation } = this.props;

    if (__DEV__ && !ssoToken.data) {
      return (
        <ExampleAppNavigator navigation={addNavigationHelpers({
          dispatch,
          state: exampleAppNavigation,
        })}/>
      );
    }

    return (
      <AppNavigator navigation={addNavigationHelpers({
        dispatch,
        state: navigation,
      })}/>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  exampleAppNavigation: state.exampleAppNavigation,
  navigation: state.navigation,
  ssoToken: state.ssoToken,
});

export default connect<IStateToProps>(mapStateToProps)(App);
