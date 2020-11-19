import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);

Vue.use(ElementUI);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
