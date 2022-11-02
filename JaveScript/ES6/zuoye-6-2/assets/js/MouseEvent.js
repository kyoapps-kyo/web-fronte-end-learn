import Modulehandles from "./modules";
export function mouseover(target) {
  target.slider.onmouseover = function () {
    if (!target.options.autoplay) {
      target.options.autoplay = true;
    } else {
      target.stopPlay();
    }
    if (target.options.modules.includes("arrow")) {
      target.arrow[0].style.opacity = 1;
      target.arrow[1].style.opacity = 1;
    }
  };
}
export function mouseout(target) {
  target.slider.onmouseout = function () {
    if (target.options.autoplay) {
      target.autoplay();
    }
  };
}
export function click(target) {
  target.pagination.onclick = function (e) {
    if (e.target.tagName.toLowerCase() === "span") {
      let index = Modulehandles.moveOptions(e.target, target);
      target.to(index);
    }
  };
}

export function prevClick(target) {
  let lock = true;
  target.prevBtn.onclick = function () {
    if (!lock) return;
    target.prev();
    if (target.pagination) {
      Modulehandles.moveOptions(
        target.paginationOptions[target.currIndex],
        target
      );
    }
    lock = false;
    setTimeout(() => {
      lock = true;
    }, 500);
  };
}

export function nextClick(target) {
  let lock = true;
  target.nextBtn.onclick = function () {
    if (!lock) return;
    target.next();
    if (target.pagination) {
      Modulehandles.moveOptions(
        target.paginationOptions[target.currIndex],
        target
      );
    }
    lock = false;
    setTimeout(() => {
      lock = true;
    }, 500);
  };
}
