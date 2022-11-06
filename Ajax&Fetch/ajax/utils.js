//工具函数

// 数据序列化成urlencoded格式的字符串
const serialize = (param) => {
  const result = [];
  for (const [key, value] of Object.entries(param)) {
    result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
  }
  return result.join("&");
};
// 数据序列化成JSON格式的字符串
const serializeJSON = (param) => {
  return JSON.stringify(param);
};

// 给URL添加参数

const addURLData = (url, data) => {
  if (!data) return;
  const mark = url.includes("?") ? "&" : "?";
  return `${mark}${data}`;
};

export { serialize, addURLData, serializeJSON };

//
