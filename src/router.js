import Vue from 'vue'
import Router from 'vue-router'
import Detail from './views/Detail.vue'
import Count from './views/Count.vue'
import New from './views/New.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Detail,
      meta: {
        Auth:true
      }
    },
    {
      path: '/new',
      name: 'new',
      component:New,
      meta: {
        Auth:true
      }
    },
    {
      path: '/count',
      name: 'count',
      component: Count,
      meta: {
        Auth:true
      }
    },
    {
      path: '/auth/login',
      name: 'login',
      component: () => import("./components/Login.vue"),
      meta: {
        noNavBar: true
      }
    },
    {
      path: '/auth/reg',
      name: 'reg',
      component: () => import("./components/Reg.vue"),
      meta: {
        noNavBar: true
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
