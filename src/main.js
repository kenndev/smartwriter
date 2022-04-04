import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import CKEditor from '@ckeditor/ckeditor5-vue';



const option = {
  color: "#109d87",
  failedColor: "#874b4b",
  thickness: "3px",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
    termination: 300,
  },
  autoRevert: true,
  location: "top",
  inverse: false,
  position: "relative"
};

const options = {
  // You can set your default options here
};

export default createApp(App)
  .use(store)
  .use(router)
  .use(Toast, options)
  .use( CKEditor )
  .use(VueProgressBar, option)
  .mount("#app");
