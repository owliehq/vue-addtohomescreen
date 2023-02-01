import AddToHomescreenComponent from './addToHomescreen.vue';
import isStandalone from './utils/isStandalone';
import Cookies from 'js-cookie';
import { h, render, App, Plugin } from 'vue';
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

const install: Plugin = {
  install(app: App, opts: Props) {
    useAddToHomescreen(opts);
  },
};
export default install;
export { useAddToHomescreen };
