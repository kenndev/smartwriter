import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const options = {
  // You can set your default options here
};


createApp(App).use(store).use(router).use(Toast, options).mount("#app");
