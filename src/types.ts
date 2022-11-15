import { AxiosRequestConfig } from "axios";

export declare type WooCommerceRestApiVersion =
  | "wc/v3"
  | "wc/v2"
  | "wc/v1"
  | "wc-api/v3"
  | "wc-api/v2"
  | "wc-api/v1";
export declare type WooCommerceRestApiEncoding = "utf-8" | "ascii";
export declare type WooCommerceRestApiMethod =
  | "get"
  | "post"
  | "put"
  | "delete"
  | "options";

export interface IWooCommerceRestApiOptions extends AxiosRequestConfig {
  /* Your Store URL, example: http://woo.dev/ */
  url: string;
  /* Your API consumer key */
  consumerKey: string;
  /* 	Your API consumer secret */
  consumerSecret: string;
  /* Custom WP REST API URL prefix, used to support custom prefixes created with the `rest_url_prefix filter` */
  wpAPIPrefix?: string;
  /* API version, default is `v3` */
  version?: WooCommerceRestApiVersion;
  /* Encoding, default is 'utf-8' */
  encoding?: WooCommerceRestApiEncoding;
  /* When `true` and using under HTTPS force Basic Authentication as query string, default is `false` */
  queryStringAuth?: boolean;
  /* Provide support for URLs with ports, eg: `8080` */
  port?: number;
  /* Provide support for custom timeout, eg: `5000` */
  timeout?: number;
  /* Define the custom Axios config, also override this library options */
  axiosConfig?: AxiosRequestConfig;
  classVersion?: string;
}

export interface IWooCommerceRestApiQuery {
  [key: string]: string;
}