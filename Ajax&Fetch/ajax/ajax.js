import DEFAULTS from "./defaults.js";
import { serialize, serializeJSON, addURLData } from "./utils.js";
import {
  HTTP_GET,
  CONTENT_TYPE_FORM_URLENCODED,
  CONTENT_TYPE_JSON,
} from "./constants.js";

export default class Ajax {
  constructor(url, options) {
    this.url = url;
    this.options = Object.assign({}, DEFAULTS, options);
    //初始化
    this.init();
  }
  init() {
    const xhr = new XMLHttpRequest();
    this.xhr = xhr;

    this.bindEvents();

    xhr.open(this.options.method, this.url + this.addParam(), true);

    //
    this.setResponseType();

    //
    this.setCookie();

    //
    this.setTimeout();

    //发送请求
    this.sendData();
  }
  bindEvents() {
    const xhr = this.xhr;
    const { success, httpCodeError, error, abort, timeout } = this.options;
    //成功状态
    xhr.addEventListener(
      "load",
      () => {
        if (this.ok()) {
          success(xhr.response, xhr);
        } else {
          httpCodeError(xhr.status, xhr);
        }
      },
      false
    );
    //error
    //当请求遇到错误，触发error事件
    xhr.addEventListener(
      "error",
      () => {
        error(xhr);
      },
      false
    );
    //abort
    //当请求被终止时，触发abort事件
    xhr.addEventListener(
      "abort",
      () => {
        abort(xhr);
      },
      false
    );
    //timeout
    //当请求被终止时，触发timeout事件
    xhr.addEventListener(
      "timeout",
      () => {
        timeout(xhr);
      },
      false
    );
  }
  //检测响应的状态码是否正常
  ok() {
    const xhr = this.xhr;
    return (xhr.status >= 200 && xhr.status < 300) || xhr.status === 304;
  }
  //在地址上添加数据
  addParam() {
    const { params } = this.options;

    if (!params) return "";

    return addURLData(this.url, serialize(params));
  }

  setResponseType() {
    this.xhr.responseType = this.options.responseType;
  }
  setCookie() {
    if (this.options.withCredentials) this.xhr.withCredentials = true;
  }
  setTimeout() {
    const { timeoutTime } = this.options;
    if (timeoutTime > 0) {
      this.xhr.timeout = timeoutTime;
    }
  }
  setContentType(contentType = this.options.contentType) {
    if (!contentType) return;
    this.xhr.setRequestHeader("Content-Type", contentType);
  }

  sendData() {
    const xhr = this.xhr;

    if (!this.isSendData()) {
      return xhr.send(null);
    }

    let resultData = null;
    const { data } = this.options;

    if (this.isFormData()) {
      resultData = data;
    } else if (this.isFormURLEncodedData()) {
      this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
      resultData = serialize(data);
    } else if (this.isJSONData()) {
      this.setContentType(CONTENT_TYPE_JSON);
      resultData = serializeJSON(data);
    } else {
      this.setContentType();
      resultData = data;
    }
    xhr.send(resultData);
  }
  //是否需要send发送数据
  isSendData() {
    const { data, method } = this.options;

    if (!data) return false;
    if (method.toLowerCase() === HTTP_GET.toLowerCase()) return false;

    return true;
  }
  //判断要发送的数据是不是form data
  isFormData() {
    return this.options.data instanceof FormData;
  }
  //是否发送form表单默认值格式的数据
  isFormURLEncodedData() {
    return this.options.contentType
      .toLowerCase()
      .includes(CONTENT_TYPE_FORM_URLENCODED);
  }
  //是否发送JSON格式的数据
  isJSONData() {
    return this.options.contentType.toLowerCase().includes(CONTENT_TYPE_JSON);
  }

  //获取XHR对象
  getXHR() {
    return this.xhr;
  }
}
