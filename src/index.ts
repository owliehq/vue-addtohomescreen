import addToHomescreen from './addToHomescreen.vue';
import isStandalone from './utils/isStandalone';
import Cookies from 'js-cookie';
import { provide } from 'vue-demi';
import { App } from 'vue';
import { Props } from './types/addToHomescreenOptions';
import { createI18n } from 'vue-i18n';
import messages from './i18n/index.json';

export default {
  install(app: App, options: Props) {
    if (!isStandalone() || !Cookies.get('addToHomescreenCalled')) {
      const i18n = createI18n({
        locale: options?.lang ? options.lang : 'en_GB',
        messages,
      });
      app.use(i18n);
      app.provide('opt', options);
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        provide('deferedAddToHomescreen', e);
      });
    }
    app.component('addToHomescreen', addToHomescreen);
  },
};
