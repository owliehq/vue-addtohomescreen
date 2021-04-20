<template>
  <div>
    <div
      ref="addtohomescreen"
      :class="[
        'add-to-homescreen-container',
        opened ? 'add-to-homescreen-visible' : 'add-to-homescreen-hidden'
      ]"
    >
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
          <span class="app-content" :style="{ color: getOpt('contentColor') }" v-html="getOpt('content') || appUrl"></span>
        </div>
      </div>
      <div class="flex">
        <div class="col">
          <div class="btn-container">
            <button
              @click="addToHomescreen"
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
    <!-- IOS modal -->
    <div id="IOSmodal" class="modal add-to-homescreen-visible">
      <div class="modal-content">
        <ul>
          <li>
            {{ localizedString.addMessages.ios1 }}
            <img class="shareIOS" src="./assets/shareios.svg" alt="share IOS" />
          </li>
          <li>
            {{ localizedString.addMessages.ios2 }}
            <img class="addIOS" src="./assets/addios.svg" alt="add IOS" />
          </li>
        </ul>
        <button class="closeModal" label="OK" @click="closeModal">OK</button>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import uaParser from 'ua-parser-js'
import appLang from './i18n/lang'
import { isStandalone } from './utils'

export default {
  name: 'addToHomescreen',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
    },
    titleColor: {
      type: String,
      default: '#000'
    },
    contentColor: {
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
    },
    expires: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {
      opened: false
    }
  },
  computed: {
    options() {
      return this.$root.$data
    },
    appTitle() {
      return document.title
    },
    appUrl() {
      return window.location.href
    },
    firstCharTitle() {
      return this.appTitle.substring(0, 1)
    },
    localizedString() {
      if (this.getOpt('lang') && appLang[this.lang]) {
        return appLang[this.getOpt('lang')]
      } else {
        return appLang.en_GB
      }
    }
  },
  methods: {
    setCookie() {
      Cookies.set('addToHomescreenCalled', true, { expires: this.getOpt(this.expires) })
    },
    getOpt(option) {
      return this.options[option] ? this.options[option] : this[option]
    },
    close() {
      this.setCookie()
      this.opened = false
    },
    closeModal() {
      document.getElementById('IOSmodal').style.display = 'none'
    },
    addToHomescreen() {
      const parsedUa = uaParser(window.navigator)

      if (this.$deferedAddToHomescreen) {
        this.$deferedAddToHomescreen.prompt()
      } else if (parsedUa.os.name === 'iOS') {
        //Open IOS modal only on IOS device
        document.getElementById('IOSmodal').style.display = 'block'
      } else if (parsedUa.os.name === 'Android') {
        alert(this.localizedString.addMessages.android)
      } else if (
        parsedUa.os.name === 'Windows' &&
        (parsedUa.browser.name === 'Chrome' || parsedUa.browser.name === 'Edge')
      ) {
        alert(this.localizedString.addMessages.windows.chrome)
      } else if (parsedUa.os.name === 'Windows' && parsedUa.browser.name === 'Firefox') {
        alert(this.localizedString.addMessages.windows.firefox)
      } else if (parsedUa.os.name === 'Mac OS' && parsedUa.browser.name === 'Firefox') {
        alert(this.localizedString.addMessages.macos.firefox)
      } else if (parsedUa.os.name === 'Mac OS' && parsedUa.browser.name === 'Chrome') {
        alert(this.localizedString.addMessages.macos.chrome)
      } else if (parsedUa.os.name === 'Mac OS' && parsedUa.browser.name === 'Safari') {
        alert(this.localizedString.addMessages.macos.safari)
      } else {
        alert(this.localizedString.addMessages.others)
      }
      this.opened = false
    }
  },
  created() {
    const getHomescreenCalledCookie = Cookies.get('addToHomescreenCalled')
    if (!isStandalone() && !getHomescreenCalledCookie) {
      this.opened = true
      this.setCookie()
    }
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
  cursor: pointer;
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;
  border: 0;
  background: url('assets/x.svg');
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
.app-content {
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

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* IOS modal */
.modal {
  display: none;
  position: fixed;
  z-index: 10000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: white;
  border-radius: 1rem;
  text-align: center;
  margin: 50% auto;
  border: 1px solid #27e9b8;
  width: 80%;
}

.modal-content ul {
  padding: 0;
  padding-left: 15px;
  text-align: left;
  list-style-type: none;
}
.shareIOS {
  width: 20px;
  vertical-align: top;
}
.addIOS {
  width: 20px;
  vertical-align: top;
}

.modal-content .closeModal {
  color: #27e9b8;
  background-color: white;
  border: solid 0.1rem #27e9b8;
  border-radius: 0.3rem;
  font-size: 1rem;
  margin-bottom: 14px;
}
</style>
