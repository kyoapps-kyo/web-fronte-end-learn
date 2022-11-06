(function () {
  const btn = document.createElement("button");
  document.body.appendChild(btn);
  btn.onclick = () => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener(
      "load",
      () => {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          console.log(xhr.response);
        }
      },
      false
    );
    const url = "https://www.imooc.com/api/http/json/search/suggest?words=js";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({ username: "imooc" }));
  };
})();
