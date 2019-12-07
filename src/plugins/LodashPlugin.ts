import Vue from 'vue';
import _, { LoDashStatic } from 'lodash';

function LodashPlugin(vue: typeof Vue): void {
  vue.prototype.$_ = _;
}

declare module 'vue/types/vue' {
  export interface Vue {
    $_: LoDashStatic;
  }
}

Vue.use(LodashPlugin);
