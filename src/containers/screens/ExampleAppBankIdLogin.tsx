import * as React from "react";
import {
  NavState,
  StyleSheet,
  Text,
  View,
  WebView,
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import {
  RequestSSOTokenFromApi,
  requestSSOTokenFromApiAction,
  SSOTokenAction,
} from "../../actions/sso-token";
import { BANK_ID_REDIRECT_PATH } from "../../constants/bank-id";
import { IAppConfigState } from "../../types/app-config";
import { ISSOTokenState } from "../../types/sso-token";
import { IStoreState } from "../../types/store";

interface IComponentProps {
  navigation: NavigationScreenProp<any, any>;
}

interface IStateToProps {
  ssoToken: ISSOTokenState;
  appConfig: IAppConfigState;
}

interface IDispatchToProps {
  requestSSOTokenFromApi: RequestSSOTokenFromApi;
}

type Props = IComponentProps & IStateToProps & IDispatchToProps;

class ExampleAppBankIdLogin extends React.Component<Props> {

  public static navigationOptions = {
    headerBackTitle: null,
    title: "BankID login",
  };

  public handleNavigationStateChanged = (navState: NavState): void => {
    const { ssoToken, requestSSOTokenFromApi, appConfig } = this.props;

    if (navState.url === `${appConfig.environment}/${BANK_ID_REDIRECT_PATH}`) {
      if (!ssoToken.isFetching && !ssoToken.data && !ssoToken.error) {
        requestSSOTokenFromApi();
      }
    }
  }

  public render() {
    const { ssoToken, navigation, appConfig } = this.props;

    if (ssoToken.isFetching) {
      return (
        <View style={styles.container}>
          <Text>Fetching token...</Text>
        </View>
      );
    }

    return (
      <WebView
        source={{ uri: `${appConfig.environment}/${navigation.state.params.path}` }}
        style={styles.container}
        onNavigationStateChange={this.handleNavigationStateChanged}
        startInLoadingState={true}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fffffa",
    flex: 1,
    justifyContent: "center",
  },
});

const mapStateToProps = (state: IStoreState) => ({
  appConfig: state.appConfig,
  ssoToken: state.ssoToken,
});

const mapDispatchToProps = (dispatch: Dispatch<SSOTokenAction>) => bindActionCreators({
  requestSSOTokenFromApi: requestSSOTokenFromApiAction,
}, dispatch);

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleAppBankIdLogin);
