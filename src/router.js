import VueRouter from "vue-router";
import Main from "@/pages/Main";


export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/main",
      component: Main,
    }
  ]
}) 