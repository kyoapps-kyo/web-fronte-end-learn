/*
 * 返回顶部按钮
 * KYO
 *
 *
 */
//防止变量污染
(function () {
  const backtotop = document.getElementById("backtotop");
  const root = document.documentElement;
  let timer = null;
  window.onscroll = function () {
    if (root.scrollTop > 100) {
      backtotop.style.display = "block";
    } else backtotop.style.display = "none";
  };
  backtotop.onclick = function () {
    clearInterval(timer);
    timer = setInterval(() => {
      root.scrollTop -= 100;
      if (root.scrollTop < 1) clearInterval(timer);
    }, 30);
  };
})();
