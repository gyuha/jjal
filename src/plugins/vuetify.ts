import Vue from 'vue';
import Vuetify from 'vuetify';
import { VuetifyPreset } from 'vuetify/types/presets';
import colors from 'vuetify/es5/util/colors';

import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/dist/vuetify.min.css';
import '@/sass/main.scss';

const opts: VuetifyPreset = {
  icons: {
    iconfont: 'mdi',
  },
};
Vue.use(Vuetify);

export default new Vuetify(opts);
