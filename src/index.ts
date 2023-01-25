import AddToHomescreenComponent from './addToHomescreen.vue';
import isStandalone from './utils/isStandalone';
import Cookies from 'js-cookie';
import { h, render } from 'vue-demi';
import { Props } from './types';

function useAddToHomescreen(opts: Props) {
  console.log(opts, 'OPTS');
  if (!isStandalone() || !Cookies.get('addToHomescreenCalled')) {
    const addToHomescreenNode = h(AddToHomescreenComponent, opts);
    const container = document.createElement('div');
    document.body.appendChild(container);
    render(addToHomescreenNode, container);
    return addToHomescreenNode.component;
  }
}

export default AddToHomescreenComponent;
export { useAddToHomescreen as useAddtoHomescreen };
