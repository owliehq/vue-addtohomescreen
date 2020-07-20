import Vue from 'vue'
import addToHomescreen from './addToHomescreen'
import { isStandalone } from './utils'
import MobileDetect from 'mobile-detect'
import Cookies from 'js-cookie'

export default {
  install(vue, opts) {
    const md = new MobileDetect(window.navigator.userAgent)
    const getHomescreenCookie = Cookies.get('addToHomescreen')
    if (!isStandalone() && !getHomescreenCookie) {
      if (md.is('AndroidOS')) {
        window.addEventListener('beforeinstallprompt', e => {
          e.preventDefault()
          vue.prototype.$deferedAndroidAddToHomescreen = e
        })
      }
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
