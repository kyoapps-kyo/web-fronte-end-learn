import axios from "axios";
import { TIMEOUT, SUCC_CODE } from "./config";

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const getData = (url, options) => {
  return axios
    .get(url, {
      timeout: TIMEOUT,
      ...options,
    })
    .then((response) => {
      if (response.status !== SUCC_CODE)
        throw new Error(`出错了:${response.code}`);
      return response.data.data;
    })
    .catch((err) => console.log(err));
};

export const getDelayData = (url, options) => {
  return delay(1000).then(() => {
    return getData(url, options);
  });
};
