import BaseSlider from "./base.js";
import Keyboard from "./keyboard.js";
import Mouse from "./mouse.js";
export default class Slider extends BaseSlider {
  constructor(el, options, btn) {
    super(el, options);
    if (btn.leftBtn.nodeType !== 1 || btn.rightBtn.nodeType !== 1)
      throw new Error("实例化的时候，请传入 DOM 元素！");
    this.leftBtn = btn.leftBtn;
    this.rightBtn = btn.rightBtn;
    this._bindEvent();
  }

  _bindEvent() {
    Keyboard.bindEvent(this);
    Mouse.bindEvent(this);
  }
}
