import Vue from "vue"
import { createPinia, PiniaVuePlugin } from "pinia"
import App from "./App.vue"
import router from "./router"
import "./assets/css/main.scss"

import "@/plugins/element-ui"
import "@/plugins/clipboard"
import "@/plugins/svg-icon"
import "@/plugins/analytics"

Vue.use(PiniaVuePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  pinia: createPinia(),

  render: (h) => h(App),
}).$mount("#app")
