import * as React from "react";
import { StyleSheet, View } from "react-native";
import { getReadableVersion, getSystemName, getUniqueID } from "react-native-device-info";
import { NavigationScreenProp } from "react-navigation";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import {
  AppConfigAction,
  setAppConfigAction,
  SetAppConfigInterface,
} from "../../actions/app-config";
import {
  ENV_DEMO,
  ENV_DEVGJENSIDIGE,
  ENV_GJENSIDIGE,
  ENV_TESTGJENSIDIGE,
} from "../../constants/environments";
import { ROUTE_EXAMPLE_APP_START } from "../../constants/navigation-routes";

import GjeButton from "../../components/GjeButton";

interface IComponentProps {
  navigation: NavigationScreenProp<any, any>;
}

interface IDispatchToProps {
  setAppConfig: SetAppConfigInterface;
}

type Props = IComponentProps & IDispatchToProps;

class ExampleAppEnvironmentSelector extends React.Component<Props> {

  public static navigationOptions = {
    headerBackTitle: null,
    title: "Select environment",
  };

  public handleEnvironmentSelected = (environment: string): void => {
    const { navigation, setAppConfig } = this.props;

    setAppConfig({
      deviceId: getUniqueID(),
      environment,
      name: "AppForPrivat-RN",
      systemName: getSystemName(),
      version: getReadableVersion(),
    });
    navigation.navigate(ROUTE_EXAMPLE_APP_START);
  }

  public render() {
    return (
      <View style={styles.container}>
        <GjeButton
          onPress={() => this.handleEnvironmentSelected(ENV_GJENSIDIGE)}
          style={styles.button}
          title="gjensidige.no"
        />
        <GjeButton
          onPress={() => this.handleEnvironmentSelected(ENV_DEVGJENSIDIGE)}
          style={styles.button}
          title="devgjensidige.no"
        />
        <GjeButton
          onPress={() => this.handleEnvironmentSelected(ENV_TESTGJENSIDIGE)}
          style={styles.button}
          title="testgjensidige.no"
        />
        <GjeButton
          onPress={() => this.handleEnvironmentSelected(ENV_DEMO)}
          style={styles.button}
          title="demo"
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

const mapDispatchToProps = (dispatch: Dispatch<AppConfigAction>) => bindActionCreators({
  setAppConfig: setAppConfigAction,
}, dispatch);

export default connect<null, IDispatchToProps>(
  null,
  mapDispatchToProps,
)(ExampleAppEnvironmentSelector);
