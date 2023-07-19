import Vue from "vue"
import { createPinia, PiniaVuePlugin } from "pinia"
import piniaPluginPersistedstate from "pinia-plugin-persistedstate"
import App from "./App.vue"
import router from "./router"
import "./assets/css/main.scss"

import "@/plugins/element-ui"
import "@/plugins/clipboard"
import "@/plugins/svg-icon"

Vue.use(PiniaVuePlugin)
Vue.config.productionTip = false

new Vue({
  router,
  pinia: createPinia().use(piniaPluginPersistedstate),

  render: (h) => h(App),
}).$mount("#app")
