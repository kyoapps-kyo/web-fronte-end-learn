/*
 *   显示菜单
 *   KYO
 *
 */
(function () {
  const banner_nav_ul = document.getElementById("banner-nav-ul");
  const banner_nav = document.getElementById("banner-nav");
  const menus = document.querySelectorAll(".menus-box .menu");
  let dataT;
  banner_nav_ul.onmouseover = function (e) {
    if (["li"].includes(e.target.tagName.toLowerCase())) {
      dataT = e.target.getAttribute("data-t");
      const theMenu = document.querySelector(
        ".menus-box .menu[data-t=" + dataT + "]"
      );
      [...menus].forEach((item) => {
        item.className = "menu";
      });

      theMenu.className = "menu current";
    }
  };
  banner_nav.onmouseleave = function () {
    const theMenu = document.querySelector(
      ".menus-box .menu[data-t=" + dataT + "]"
    );
    theMenu.className = "menu";
  };
})();
