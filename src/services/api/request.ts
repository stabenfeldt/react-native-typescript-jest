import { ENV_DEMO } from "../../constants/environments";
import { HttpMethod } from "../../types/request";
import { getEndpointMockData } from "./mock-data";

const checkStatus = (response: Response): Response => {
  if (response.status < 200 || response.status > 300) {
    throw new Error(JSON.stringify(response));
  }

  return response;
};

export const makeRequest = (
  host: string,
  endpoint: string,
  method: HttpMethod,
  headers: Headers,
  body: any,
  isJson: boolean = true,
): Promise<any> => {
  if (host === ENV_DEMO) {
    return new Promise((resolve) => resolve(getEndpointMockData(endpoint, method)));
  }

  return fetch(`${host}/${endpoint}`, {
    body,
    credentials: "same-origin",
    headers,
    method,
  })
    .then(checkStatus)
    .then((response) => (
      isJson ? response.json() : response.text()
    ));
};
