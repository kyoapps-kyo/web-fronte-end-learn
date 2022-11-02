import "../css/base.css";
import "../css/index.css";
import Slider from "./slider";

new Slider(document.querySelector(".banner-slider"), {
  modules: ["pagination", "dots"],
});

new Slider(document.querySelector(".tab-slider"), {
  modules: ["pagination", "options"],
});

new Slider(document.querySelector(".pagination-arrow .banner-slider"), {
  modules: ["pagination", "dots", "arrow"],
});
