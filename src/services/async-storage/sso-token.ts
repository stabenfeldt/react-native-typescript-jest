import { AsyncStorage } from "react-native";

const SSO_TOKEN = "SSO_TOKEN";

const getSSOTokenKey = (environment: string) => (
  `${SSO_TOKEN}:${environment}`
);

export const setSSOToken = async (token: string, environment: string) => {
  await AsyncStorage.setItem(getSSOTokenKey(environment), token);
};

export const getSSOToken = async (environment: string): Promise<string> => (
  await AsyncStorage.getItem(getSSOTokenKey(environment))
);
