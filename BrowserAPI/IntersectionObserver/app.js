const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      console.log(entry.intersectionRatio);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  }
  //   {
  //     threshold: 0.1, // 阈值，传入单个数或者数组，0-1之间，观察元素与视窗相交比例，到达阈值位置观察一次
  //   }
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
