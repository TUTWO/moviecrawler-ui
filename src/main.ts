import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router';
import SearchInput from './components/SearchInput.vue';
import MenuType from './components/MenuType.vue';
import Recommendation from './components/Recommendation.vue';

Vue.config.productionTip = false;
Vue.component('SearchInput', SearchInput);
Vue.component('MenuType', MenuType);
Vue.component('Recommendation', Recommendation);

Vue.use(VueResource);
Vue.use(iView);
Vue.use(VueRouter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
