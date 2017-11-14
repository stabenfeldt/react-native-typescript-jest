export const GET = "GET";
export type GET = typeof GET;

export const POST = "POST";
export type POST = typeof POST;

export type HttpMethod = GET | POST;

export interface IRequestParams {
  endpoint: string;
  method: HttpMethod;
  body?: any;
  isJson?: boolean;
}
