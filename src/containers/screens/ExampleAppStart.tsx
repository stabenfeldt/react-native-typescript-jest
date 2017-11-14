import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import {
  RequestSSOTokenFromAsyncStorage,
  requestSSOTokenFromAsyncStorageAction,
  SSOTokenAction,
} from "../../actions/sso-token";
import { BANK_ID_MOBIL_PATH, BANK_ID_PATH } from "../../constants/bank-id";
import { ROUTE_EXAMPLE_APP_BANK_ID_LOGIN } from "../../constants/navigation-routes";
import { ISSOTokenState } from "../../types/sso-token";
import { IStoreState } from "../../types/store";

import GjeButton from "../../components/GjeButton";

interface IComponentProps {
  navigation: NavigationScreenProp<any, any>;
}

interface IStateToProps {
  ssoToken: ISSOTokenState;
}

interface IDispatchToProps {
  requestSSOTokenFromAsyncStorage: RequestSSOTokenFromAsyncStorage;
}

type Props = IComponentProps & IStateToProps & IDispatchToProps;

class ExampleAppStart extends React.Component<Props> {

  public static navigationOptions = {
    headerBackTitle: null,
    title: "Select login",
  };

  public componentDidMount() {
    this.props.requestSSOTokenFromAsyncStorage();
  }

  public render() {
    const { ssoToken, navigation } = this.props;

    if (ssoToken.isFetching) {
      return (
        <View style={styles.container}>
          <Text>Fetching token...</Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <GjeButton
          onPress={() => navigation.navigate(
            ROUTE_EXAMPLE_APP_BANK_ID_LOGIN,
            { path: BANK_ID_PATH },
          )}
          style={styles.button}
          title="BankID"
        />
        <GjeButton
          onPress={() => navigation.navigate(
            ROUTE_EXAMPLE_APP_BANK_ID_LOGIN,
            { path: BANK_ID_MOBIL_PATH },
          )}
          style={styles.button}
          title="BankID på mobil"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  container: {
    backgroundColor: "#fffffa",
    flex: 1,
    justifyContent: "center",
  },
});

const mapStateToProps = (state: IStoreState) => ({
  ssoToken: state.ssoToken,
});

const mapDispatchToProps = (dispatch: Dispatch<SSOTokenAction>) => bindActionCreators({
  requestSSOTokenFromAsyncStorage: requestSSOTokenFromAsyncStorageAction,
}, dispatch);

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(ExampleAppStart);
