import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueRouter);

Vue.use(ElementUI);

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});
