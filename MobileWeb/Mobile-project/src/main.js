import { createApp } from "vue";
import "./assets/style/base.css";
import "./assets/style/layout.css";
import "./assets/style/reset.css";
import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
