import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueRouter from "vue-router";
Vue.use(VueRouter);

import App from './App.vue';
import router from './router.js';
Vue.config.productionTip = false

new Vue({
	el:'#app',
  render: h => h(App),
  router
});
