<template>
  <div :class="['add-to-homescreen-container', opened ? 'add-to-homescreen-visible' : 'add-to-homescreen-hidden']">
    <button class="close_btn" @click="close" />
    <div class="flex">
      <div class="icon-container">
        <span
          class="icon"
          :style="{
            'background-color': getOpt('iconColor'),
            'background-image': 'url(' + getOpt('iconPath') + ')',
            color: iconTextColor
          }"
          ><template v-if="!getOpt('iconPath')">{{ firstCharTitle }}</template>
        </span>
      </div>
      <div class="col">
        <span class="app-title" :style="{ color: getOpt('titleColor') }">{{
          getOpt('title') ? getOpt('title') : appTitle
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
              color: getOpt('buttonTextColor'),
              'background-color': getOpt('buttonColor')
            }"
          >
            {{ localizedString.addToHomescreen }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import MobileDetect from 'mobile-detect'
import appLang from './i18n/lang'
import { isStandalone } from './utils'
const md = new MobileDetect(window.navigator.userAgent)

export default {
  name: 'addToHomescreen',
  props: {
    title: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
      default: '#000'
    },
    iconPath: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: '#000'
    },
    iconTextColor: {
      type: String,
      default: '#fff'
    },
    buttonColor: {
      type: String,
      default: '#000'
    },
    buttonTextColor: {
      type: String,
      default: '#fff'
    },
    background: {
      type: String,
      default: '#fff'
    },
    lang: {
      type: String,
      default: 'en_GB'
    }
  },
  data () {
    return {
      opened: false
    }
  },
  computed: {
    options () {
      return this.$root.$data
    },
    appTitle () {
      return document.title
    },
    appUrl () {
      return window.location.href
    },
    firstCharTitle () {
      return this.appTitle.substring(0, 1)
    },
    localizedString () {
      if (this.getOpt('lang') && appLang[this.lang]) {
        return appLang[this.getOpt('lang')]
      } else {
        return appLang.en_GB
      }
    }
  },
  methods: {
    getOpt (option) {
      return this.options[option] ? this.options[option] : this[option]
    },
    close () {
      this.setCookie()
      this.opened = false
    },
    addTohomescreen () {
      if (md.is('iPhone')) {
        alert(this.localizedString.addMessages.ios)
      } else if (md.is('AndroidOS')) {
        if (this.$deferedAndroidAddToHomescreen) {
          this.$deferedAndroidAddToHomescreen.prompt()
        } else {
          alert(this.localizedString.addMessages.android)
        }
      } else {
        // TODO : Add modal with arrow to show where to click on desktop
        alert(this.localizedString.addMessages.windows)
      }
      this.setCookie()
      this.opened = false
    },
    setCookie () {
      Cookies.set('addToHomescreen', true, { expires: 7 })
    }
  },
  created () {
    const getHomescreenCookie = Cookies.get('addToHomescreen')
    if (!isStandalone() && !getHomescreenCookie) this.opened = true
  }
}
</script>

<style scoped>
.add-to-homescreen-container {
  z-index: 10000;
  border-top: 1px solid #e0e0e0;
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

.add-to-homescreen-container.add-to-homescreen-visible {
  transform: translateY(0);
}
.add-to-homescreen-container.add-to-homescreen-hidden {
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
