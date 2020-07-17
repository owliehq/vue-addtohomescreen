<template>
  <div
    :class="[
      'add-to-homescreen-container',
      opened ? 'visible' : 'hidden',
    ]"
  >
    <button class="close_btn" @click="close" />
    <div class="flex">
      <div class="icon-container">
        <span
          class="icon"
          :style="{
            'background-color': options.iconColor,
            'background-image': 'url(' + options.iconPath + ')',
            color: options.iconTextColor,
          }"
          ><template v-if="!options.iconPath">{{ firstCharTitle }}</template>
        </span>
      </div>
      <div class="col">
        <span class="app-title" :style="{ color: options.titleColor }">{{
          options.title ? options.title : appTitle
        }}</span
        ><br />
        <span class="app-url">{{ appUrl }}</span>
      </div>
    </div>
    <div class="flex">
      <div class="col">
        <div class="btn-container">
          <button
            @click="addTohomescreen"
            class="add-button"
            :style="{
              color: options.buttonTextColor,
              'background-color': options.buttonColor,
            }"
          >
            {{ options.buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isIos, isStandalone } from "./utils";
import Cookies from "js-cookie";
export default {
  data() {
    return {
      opened: false,
    };
  },
  mounted() {
    const getHomescreenCookie = Cookies.get("addToHomescreen");
    if (!isStandalone() && !getHomescreenCookie) this.opened = true;
  },
  computed: {
    options() {
      return this.$root.$data;
    },
    appTitle() {
      return document.title;
    },
    appUrl() {
      return window.location.href;
    },
    firstCharTitle() {
      return this.appTitle.substring(0, 1);
    },
  },
  methods: {
    close() {
      this.setCookie();
      this.opened = false;
    },
    addTohomescreen() {
      if (isIos() && !isStandalone()) {
        alert(`1. Open Share menu
2. Tap on "Add to Home Screen" button`);
      }
      this.setCookie();
      this.opened = false;
    },
    setCookie() {
      Cookies.set("addToHomescreen", true, { expires: 7 });
    },
  },
};
</script>

<style scoped>
.add-to-homescreen-container {
  font-family: -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
  width: 100%;
  box-sizing: border-box;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 16px;
  align-items: center;
  transition: all 0.5s;
}

.add-to-homescreen-container.visible {
  transform: translateY(0);
}
.add-to-homescreen-container.hidden {
  transform: translateY(100%);
}

.close_btn {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  border: 0;
  background: url("assets/x.svg");
}

.flex {
  display: flex;
  flex-wrap: wrap;
}

.col {
  flex: 1;
}

.icon {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

.icon-container .icon {
  width: 60px;
  height: 60px;
  display: block;
  line-height: 60px;
  text-align: center;
  border-radius: 30px;
  font-size: 1.3rem;
  margin-right: 15px;
  text-transform: uppercase;
}

.app-title {
  font-size: 1.3rem;
  display: inline-block;
}
.app-url {
  font-size: 0.8rem;
  display: inline-block;
}

.btn-container {
  width: 40%;
  float: right;
}

.add-button,
.add-button:hover,
.add-button:visited {
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 1rem;
  padding: 5px;
}
</style>
