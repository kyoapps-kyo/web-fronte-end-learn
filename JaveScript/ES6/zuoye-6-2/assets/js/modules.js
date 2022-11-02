import { ACTIVE_DOT_CLASSNAME } from "./constants";
export default {
  paginationInit(currIndex, options, self) {
    self.addClassName(options[currIndex], ACTIVE_DOT_CLASSNAME);
    options.forEach((item, index) => {
      item.setAttribute("data-i", index);
    });
  },
  moveOptions(target, self) {
    self.exclusiveClassName(self.paginationOptions, ACTIVE_DOT_CLASSNAME);
    //激活活动样式
    target.classList.add(ACTIVE_DOT_CLASSNAME);
    return parseInt(target.getAttribute("data-i"));
  },
  arrowInit(self) {
    const arrow = self.slider.querySelectorAll(".arrow div");
    const prevBtn = self.slider.querySelector(".prev");
    const nextBtn = self.slider.querySelector(".next");
    return { arrow, prevBtn, nextBtn };
  },
};
