import { createSSRApp } from "vue";
import { createPinia } from "pinia";
import { http, upload } from "./utils/request";
console.log(http, upload);
import App from "./App.vue";
import "uno.css";

export function createApp() {
  const app = createSSRApp(App);
  app.config.globalProperties.$http = http;
  app.config.globalProperties.$upload = upload;
  app.use(createPinia());
  return {
    app
  };
}
