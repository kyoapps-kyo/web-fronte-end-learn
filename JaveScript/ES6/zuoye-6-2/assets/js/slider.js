import BaseSlider from "./base";
import Modulehandles from "./modules";
import { click, mouseover, mouseout, prevClick, nextClick } from "./MouseEvent";
export default class Slider extends BaseSlider {
  pagination = null;
  paginationOptions = null;
  arrow = null;
  prevBtn = null;
  nextBtn = null;
  constructor(el, options) {
    super(el, options);
    this._addModules();
    this._bindEvents();
    this.init();
  }

  _init() {
    super.init();
    this._addModules();
  }

  _addModules() {
    if (this.options.modules.includes("pagination")) {
      this._initPagination();
    }
    if (this.options.modules.includes("arrow")) {
      this._initArrow();
    }
  }

  _bindEvents() {
    if (
      this.options.modules.includes("dots") ||
      this.options.modules.includes("options")
    ) {
      click(this);
    }
    if (
      this.options.modules.includes("dots") ||
      this.options.modules.includes("arrow")
    ) {
      mouseover(this);
      mouseout(this);
    }
    if (this.options.modules.includes("arrow")) {
      prevClick(this);
      nextClick(this);
    }
  }
  _initPagination() {
    if (this.options.modules.includes("dots")) {
      this.pagination = this.slider.querySelector(".dots.pagination");
    }
    if (this.options.modules.includes("options")) {
      this.pagination = this.slider.querySelector(".pagination");
    }
    this.paginationOptions = this.pagination.querySelectorAll("span");
    Modulehandles.paginationInit(
      this.options.initialIndex,
      this.paginationOptions,
      this
    );
  }

  _initArrow() {
    if (this.options.modules.includes("arrow")) {
      const { prevBtn, nextBtn, arrow } = Modulehandles.arrowInit(this);
      this.prevBtn = prevBtn;
      this.nextBtn = nextBtn;
      this.arrow = arrow;
    }
  }

  autoplay() {
    clearInterval(this.timer);
    this.timer = setInterval(
      (self) => {
        self.play();
        if (this.pagination) {
          Modulehandles.moveOptions(
            self.paginationOptions[self.currIndex],
            self
          );
        }
      },
      this.options.interval,
      this
    );
  }
}
