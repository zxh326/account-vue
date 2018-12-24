import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from "axios";

Vue.config.productionTip = false
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://localhost:3000';
// 未登录拦截
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
 if(response.data.ret==-1){
  this.$router.push({path:'/auth/login'});
 }
  return response;
}, function (error) {
  return error;
});

router.beforeEach((to, from, next) => {
  if (to.meta.Auth) {  // 判断该路由是否需要登录权限
    if (sessionStorage.getItem('uname')) {  
      next();
    }
    else {
      next({
        path: '/auth/login',
        query: { redirect: to.fullPath }
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
