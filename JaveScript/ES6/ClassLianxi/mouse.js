const mouse = {
  bindEvent(el) {
    el.leftBtn.onclick = () => {
      el.prev();
    };
    el.rightBtn.onclick = () => {
      el.next();
    };
  },
};

export default mouse;
