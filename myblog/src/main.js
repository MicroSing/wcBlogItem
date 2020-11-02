import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 引入背景组件 PageBg.vue
import PageBg from "@/views/pageBackground/PageBg";

// 绑定到全局组件
Vue.component("page-bg", PageBg);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
