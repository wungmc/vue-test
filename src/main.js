import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

// 也可以使用之前定义的 firstcomponent
const first = { template: '<div><h2>我是第 1 个子页面</h2></div>' }
import secondcomponent from './component/secondcomponent.vue'

const router = new VueRouter({
  mode: 'history',
  // 跟目录
  base: '__dirname',
  routes: [
    {
      path: '/first',
      component: first
    },
    {
      path: '/second',
      component: secondcomponent
    }
  ]
})

const app = new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
