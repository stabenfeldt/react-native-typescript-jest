import { getSystemName, getUniqueID } from "react-native-device-info";

import {RequestParams} from "../../sagas/helpers/api";
import {GET, POST} from "./request";

export const getKundeRequestParams = (): RequestParams => ({
  endpoint: "ip-web/kunde",
  method: GET,
});

export const getCsrfTokenRequestParams = (): RequestParams => ({
  endpoint: "ip-web/kunde/csrf-token",
  method: GET,
});

export const getKundeDevicerRequestParams = (): RequestParams => ({
  endpoint: `ip-web/kunde/devicer/${getUniqueID()}/${getSystemName()}`,
  isJson: false,
  method: POST,
});
