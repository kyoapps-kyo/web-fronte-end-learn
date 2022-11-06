import { HTTP_GET, CONTENT_TYPE_FORM_URLENCODED } from "./constants.js";
export default {
  method: HTTP_GET,
  //请求头携带的数据
  params: null,
  //请求体携带的数据
  data: null,
  contentType: CONTENT_TYPE_FORM_URLENCODED,
  responseType: "",
  timeoutTime: 0,
  withCredentials: false,

  //默认方法
  success() {},
  httpCodeError() {},
  error() {},
  abort() {},
  timeout() {},
};
