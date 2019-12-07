import Vue from 'vue';
import 'babel-polyfill';
import VueApollo from 'vue-apollo';
import apolloClient from './utils/graphql';
import VueClipboard from 'vue-clipboard2';

Vue.config.productionTip = false;

Vue.use(VueApollo);

VueClipboard.config.autoSetContainer = true;
Vue.use(VueClipboard);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient(),
});

import '@/plugins/AxiosPlugin';
import '@/plugins/MomentPlugin';
import '@/plugins/LodashPlugin';

import App from './App';

import vuetify from '@/plugins/vuetify';

new Vue({
  apolloProvider,
  render: (h) => h(App),
  vuetify,
}).$mount('#app');
