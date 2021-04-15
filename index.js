import Vue from 'vue'
import addToHomescreen from './addToHomescreen'
import { isStandalone } from './utils'

export default {
  install(vue, opts) {
    if (!isStandalone()) {
      window.addEventListener('beforeinstallprompt', e => {
        e.preventDefault()
        vue.prototype.$deferedAddToHomescreen = e
      })
    }
    Vue.component(addToHomescreen.name, addToHomescreen)

    const addToHomescreenProt = {
      mount: opt => {
        const root = new Vue({
          data: opt,
          render: createElement => createElement(addToHomescreen)
        })
        root.$mount(document.body.appendChild(document.createElement('div')))
      }
    }
    //
    vue.prototype.$addToHomescreen = addToHomescreenProt
  }
}
