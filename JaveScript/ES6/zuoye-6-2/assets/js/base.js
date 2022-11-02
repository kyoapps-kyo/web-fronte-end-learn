import { ELEMENT_NODE, ACTIVE_SLIDER_ITEM_CLASSNAME } from "./constants";
import { DEFAULTS } from "./defaults";

export default class BaseSlider {
  constructor(el, options) {
    this.options = {
      ...DEFAULTS,
      ...options,
    };
    if (el.nodeType !== ELEMENT_NODE)
      throw new Error("实例化的时候，请传入 DOM 元素！");
    const slider = el;
    const sliderContent = el.querySelector(".slider-content");
    const sliderItems = sliderContent.querySelectorAll(".slider-item");

    this.slider = slider;
    this.sliderContent = sliderContent;
    this.sliderItems = sliderItems;

    this.minIndex = 0;
    this.maxIndex = sliderItems.length - 1;
    this.currIndex = this.getCorrectedIndex(this.options.initialIndex);
    //控制播放或者停止
    this.timer = null;

    this.init();
  }
  getCorrectedIndex(index) {
    if (index < this.minIndex) return this.maxIndex;
    if (index > this.maxIndex) return this.minIndex;
    return index;
  }
  init() {
    // 切换到初始索引 initialIndex
    this.active(this.getInitIndex());
    // this.autoplay();
  }

  exclusiveClassName(el, className) {
    el.forEach((sliderItem) => sliderItem.classList.remove(className));
  }
  addClassName(el, className) {
    el.classList.add(className);
  }

  active(index) {
    this.exclusiveClassName(this.sliderItems, ACTIVE_SLIDER_ITEM_CLASSNAME);
    this.addClassName(this.sliderItems[index], ACTIVE_SLIDER_ITEM_CLASSNAME);
  }

  //禁止初始的index越界
  getInitIndex(index = this.options.initialIndex) {
    return this.getCorrectedIndex(index);
  }
  to(index) {
    index = this.getCorrectedIndex(index);
    if (this.currIndex === index) return;

    this.currIndex = index;

    this.active(this.currIndex);
  }
  prev() {
    this.to(this.currIndex - 1);
  }

  next() {
    this.to(this.currIndex + 1);
  }

  autoplay() {
    const self = this;
    clearInterval(this.timer);
    if (this.options.autoplay) {
      this.timer = setInterval(() => {
        self.play();
      }, this.options.interval);
    }
  }

  play() {
    this.next();
  }

  stopPlay() {
    clearInterval(this.timer);
  }
}
