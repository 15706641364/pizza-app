import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import { store } from './store/store.js'

axios.defaults.baseURL = 'https://wd1564806050jvgoba.wilddogio.com/';

//问题为什么要用括号包起来
import { routes } from './routes'




Vue.config.productionTip = false

//使用vue-router
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
})

//全局守卫
// router.beforeEach((to, from, next) => {
//   if (this.$store.gettets.isLogin) {
//     next();
//   }else{
//     alert("还没有登录，请先登录");
//   }
// })

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
