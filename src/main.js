import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('name')) {  // 通过vuex state获取当前的token是否存在
          next();
    }
    else {
      next({
        path: '/',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
