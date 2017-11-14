import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { KundeAction, requestKundeAction, RequestKundeInterface } from "../../actions/kunde";
import { IKundeState } from "../../types/kunde";
import { IStoreState } from "../../types/store";

interface IStateToProps {
  kunde: IKundeState;
}

interface IDispatchToProps {
  requestKunde: RequestKundeInterface;
}

class SkademeldingStart extends React.Component<IStateToProps & IDispatchToProps> {

  public static navigationOptions = {
    title: "Skademelding",
  };

  public componentDidMount() {
    this.props.requestKunde();
  }

  public render() {
    const { kunde } = this.props;

    return (
      <View style={styles.container}>
        <Text>{(kunde.data || {}).navn}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

const mapStateToProps = (state: IStoreState) => ({
  kunde: state.kunde,
});

const mapDispatchToProps = (dispatch: Dispatch<KundeAction>) => bindActionCreators({
  requestKunde: requestKundeAction,
}, dispatch);

export default connect<IStateToProps, IDispatchToProps>(
  mapStateToProps,
  mapDispatchToProps,
)(SkademeldingStart);
