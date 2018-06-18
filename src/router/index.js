import Vue from 'vue';
import Router from 'vue-router';
import RealContent from './../components/real-content/real-content';
import TestContent from './../components/test-content/test-content';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'real-content', component: RealContent },
    { path: '/test', name: 'test-content', component: TestContent }
  ]
});
