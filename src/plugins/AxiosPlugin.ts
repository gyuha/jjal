import Vue from 'vue';
import Axios, { AxiosStatic, AxiosResponse } from 'axios';

function AxiosPlugin(vue: typeof Vue): void {
  Vue.prototype.$http = Axios;
}

declare module 'vue/types/vue' {
  export interface Vue {
    $http: AxiosStatic;
  }
}

Vue.use(AxiosPlugin);
