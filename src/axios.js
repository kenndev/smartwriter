import axios from "axios";
import store from "./store";
import app from "./main";

const axiosClient = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${store.state.user.token}`;
  app.$Progress.start(); 
  return config;
});

axiosClient.interceptors.response.use(response => {
  app.$Progress.finish();
  return response
})

export default axiosClient;
