//给url添加属性键值对
let url = "https://api.twitter.com?sajoif";
//判断最后一位是不是？
//是，直接添加属性键值对
//否，正常判断，有？添加&，无问好添加问号
const addUrlParam = (url, key, value) => {
  if (url.includes("?", url.length - 1)) url += `${key}=${value}`;
  else url += (url.includes("?") ? "&" : "?") + `${key}=${value}`;
  return url;
};

url = addUrlParam(url, "name", "description");
url = addUrlParam(url, "sex", "male");
url = addUrlParam(url, "age", "18");

console.log(url);
