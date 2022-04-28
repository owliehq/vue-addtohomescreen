import addToHomescreen from "./addToHomescreen";
import { isStandalone } from "./utils";
import Cookies from "js-cookie";
import Vue from "vue";

export default {
  install(vue, opts) {
    if (!isStandalone() || !Cookies.get("addToHomescreenCalled")) {
      window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        vue.prototype.$deferedAddToHomescreen = e;
      });
    }
    vue.component(addToHomescreen.name, addToHomescreen);

    const addToHomescreenProt = {
      mount: (opt) => {
        const root = new Vue({
          data: opt,
          render: (createElement) => createElement(addToHomescreen),
        });
        root.$mount(document.body.appendChild(document.createElement("div")));
      },
    };
    if (vue.provide) {
      vue.provide("addToHomescreen", addToHomescreenProt);
    } else {
      vue.prototype.$addToHomescreen = addToHomescreenProt;
    }
  },
};
