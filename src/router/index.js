import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "SubConverter",
      component: () => import("@/views/SubConverter.vue"),
    },
  ],
})

export default router
