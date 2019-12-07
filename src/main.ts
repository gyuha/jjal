import Vue from 'vue';
import 'babel-polyfill';

Vue.config.productionTip = false;

import '@/plugins/AxiosPlugin';
import '@/plugins/MomentPlugin';
import '@/plugins/LodashPlugin';

import App from './App';

import vuetify from '@/plugins/vuetify';

new Vue({
  render: (h) => h(App),
  vuetify,
}).$mount('#app');
