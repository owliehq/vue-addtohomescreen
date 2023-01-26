import AddToHomescreenComponent from './addToHomescreen.vue';
import isStandalone from './utils/isStandalone';
import Cookies from 'js-cookie';
import { h, render } from 'vue-demi';
import type { App, Plugin } from 'vue-demi';
import { Props } from './types';

function useAddToHomescreen(opts: Props) {
  if (!isStandalone() || !Cookies.get('addToHomescreenCalled')) {
    const addToHomescreenNode = h(AddToHomescreenComponent, opts);
    const container = document.createElement('div');
    document.body.appendChild(container);
    render(addToHomescreenNode, container);
    return addToHomescreenNode.component;
  }
}

export const install: Plugin = {
  install(app: App, opts: Props) {
    useAddToHomescreen(opts);
  },
};

export { useAddToHomescreen };
