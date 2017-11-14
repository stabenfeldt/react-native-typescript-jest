import * as React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

interface IComponentProps {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  title: string;
}

const GjeButton: React.SFC<IComponentProps> = ({ style, title, ...props }) => (
  <TouchableOpacity
    {...props}
    style={[styles.button, style]}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#d0d2d3",
    borderWidth: 5,
    padding: 20,
  },
  buttonText: {
    fontFamily: "GjensidigeBrownTT-Regular",
    fontSize: 18,
  },
});

export default GjeButton;
