/*
 * 轮播图特效
 * kyo
 */
//IIEF 避免变量污染
(function () {
  const carousel_list = document.getElementById("carousel_list");
  const left_btn = document.getElementById("left_btn");
  const right_btn = document.getElementById("right_btn");
  const circles_ol = document.getElementById("circles_ol");
  const banner = document.getElementById("banner");

  const clone_li = carousel_list.firstElementChild.cloneNode(true);
  carousel_list.appendChild(clone_li);

  let n = 0;
  while (n < carousel_list.children.length - 1) {
    const li = document.createElement("li");
    li.dataset.n = n;
    circles_ol.appendChild(li);
    n++;
  }

  let lock = true;
  let idx = 0;
  circles_ol.children[idx].classList.add("current");
  right_btn.onclick = right_btn_handle;
  function right_btn_handle() {
    if (!lock) return;
    carousel_list.style.transition = "transform .5s ease 0s";
    carousel_list.style.transform = `translateX(-${++idx * 16.666}%)`;
    if (idx == 5) {
      setTimeout(() => {
        idx = 0;
        carousel_list.style.transition = "none";
        carousel_list.style.transform = `translateX(0%)`;
      }, 500);
    }
    setCircles();
    lock = false;
    setTimeout(() => {
      lock = true;
    }, 500);
  }

  left_btn.addEventListener("click", () => {
    if (!lock) return;
    if (idx == 0) {
      carousel_list.style.transition = "none";
      carousel_list.style.transform = `translateX(-${16.666 * 5}%)`;
      idx = 4;
      setTimeout(() => {
        carousel_list.style.transition = "transform .5s ease 0s";
        carousel_list.style.transform = `translateX(-${16.666 * 4}%)`;
      }, 0);
    } else {
      carousel_list.style.transform = `translateX(-${16.666 * --idx}%)`;
    }
    setCircles();
    lock = false;
    setTimeout(() => {
      lock = true;
    }, 500);
  });

  circles_ol.onclick = (e) => {
    if (e.target.tagName.toLowerCase() == "li") {
      let n = e.target.getAttribute("data-n");
      idx = n;
      carousel_list.style.transform = `translateX(-${16.666 * idx}%)`;
      setCircles();
    }
  };

  let timer = setInterval(right_btn_handle, 2000);
  banner.onmouseenter = () => {
    clearInterval(timer);
  };
  banner.onmouseleave = () => {
    clearInterval(timer);
    timer = setInterval(right_btn_handle, 2000);
  };

  function setCircles() {
    for (let i = 0; i <= 4; i++) {
      if (i == idx % 5) {
        circles_ol.children[i].className = "current";
      } else {
        circles_ol.children[i].className = "";
      }
    }
  }
})();
