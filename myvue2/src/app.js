import Vue from 'vue';
import Main from './App.vue';
import Router from 'vue-router';
import routers from './router';
import Ued from 'ued';

import '../src/less/reset.less';

Vue.use(Router);

Vue.use(Ued);

const router = new Router({
  // 页面跳转后y轴为0
  scrollBehavior: () => ({ y: 0 }),
  mode: 'history',
  routes: routers,
});

//初始化
const vm = new Vue({
  router,
  render: h => h(Main)
}).$mount("#app");

export default vm;