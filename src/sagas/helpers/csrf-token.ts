import { getCsrfTokenRequestParams } from "../../services/api/kunde";
import { callApi } from "./api";

export function* getCsrfToken() {
  return yield callApi(getCsrfTokenRequestParams());
}
