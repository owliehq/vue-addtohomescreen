import Vue from "vue";
import addToHomescreen from "./addToHomescreen";

const optionsDefaults = {
  title: "",
  titleColor: "#000",
  iconPath: "",
  iconColor: "#000",
  iconTextColor: "#fff",
  buttonText: "Add to homescreen",
  buttonColor: "#000",
  buttonTextColor: "#fff",
  background: "#fff",
};

export default {
  install(vue, opts) {
    const options = { ...optionsDefaults, ...opts };
    const root = new Vue({
      data: options,
      render: (createElement) => createElement(addToHomescreen),
    });
    root.$mount(document.body.appendChild(document.createElement("div")));
    vue.prototype.$addToHomescreen = root;
  },
};
