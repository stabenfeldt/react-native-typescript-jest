import * as kundeJson from "../../../mock-data/kunde.json";
import { GET, HttpMethod } from "../../types/request";

export const getEndpointMockData = (endpoint: string, method: HttpMethod) => {
  if (endpoint.match("ip-web\/kunde") && method === GET) {
    return kundeJson;
  }

  throw new Error(`mock-data for endpoint '${method}: ${endpoint}' not found`);
};
