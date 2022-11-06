export default function () {
  const url = "https://www.imooc.com/api/http/search/suggest?words=js";

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
      console.log(xhr.responseText);
    } else {
      throw new Error(xhr.readyState);
    }
  };

  xhr.open("GET", url, true);

  xhr.send(null);
}
