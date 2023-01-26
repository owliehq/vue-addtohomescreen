import Vue from 'vue';
import VueAddToHomescreen from '../../../dist/vue-addtohomescreen.mjs';

import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueAddToHomescreen);
