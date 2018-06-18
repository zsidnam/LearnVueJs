import Vue from 'vue';
import App from './App';
import router from './router';

// Components
import Layout from './components/layout/layout';
import Header from './components/header/header';
import Footer from './components/footer/footer';

Vue.component('z-layout', Layout);
Vue.component('z-header', Header);
Vue.component('z-footer', Footer);

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
