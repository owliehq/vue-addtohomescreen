<template>
  <div>
    <div
      :class="[
        'add-to-homescreen-container',
        opened ? 'add-to-homescreen-visible' : 'add-to-homescreen-hidden',
      ]"
    >
      <div class="flex">
        <div class="icon-container">
          <span class="icon" :style="iconStyle"
            ><template v-if="!getOpt('iconPath')">{{
              firstCharTitle
            }}</template>
          </span>
        </div>
        <div class="col">
          <span class="app-title" :style="getCssOpt('titleColor')">{{
            getOpt('title') ? getOpt('title') : appTitle
          }}</span
          ><br />
          <span
            class="app-content"
            :style="{ color: getCssOpt('contentColor') }"
            v-html="getOpt('content') || appUrl"
          ></span>
        </div>
      </div>
      <div class="flex">
        <div class="col">
          <div class="btn-container">
            <button
              @click="addToHomescreen"
              class="add-button"
              :style="buttonStyle"
            >
              {{ t('addToHomescreen') }}
            </button>
          </div>
        </div>
      </div>
      <button class="close_btn" @click="close" />
    </div>
    <!-- IOS modal -->
    <div id="IOSmodal" class="modal add-to-homescreen-visible">
      <div class="modal-content">
        <ul>
          <li>
            {{ t('addMessages.ios1') }}
            <img class="shareIOS" src="./assets/shareios.svg" alt="share IOS" />
          </li>
          <li>
            {{ t('addMessages.ios2') }}
            <img class="addIOS" src="./assets/addios.svg" alt="add IOS" />
          </li>
        </ul>
        <button
          class="closeModal"
          :style="buttonStyle"
          label="OK"
          @click="closeModal"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Cookies from 'js-cookie';
import messages from './i18n';

import {
  ref,
  computed,
  CSSProperties,
  defineComponent,
  onMounted,
} from 'vue-demi';

import { isStandalone } from './utils';
import { Props, PropsKeys, DeviceInfos, availableLang } from './types';
import UAParser from 'ua-parser-js';

export default defineComponent({
  name: 'addToHomescreen',
  setup(props: Props) {
    console.log(props, 'PROPS');

    const getOpt = (option: PropsKeys): string | number | undefined => {
      const gettedOpt = props ? props[option] : undefined;
      return gettedOpt;
    };

    const getCssOpt = (option: PropsKeys): string | undefined => {
      const gettedOpt = props ? props[option] : option;
      return gettedOpt && typeof gettedOpt === 'string' ? gettedOpt : option;
    };

    const lang = (getOpt('lang') as availableLang) || 'en_GB';
    const currentLang = messages[lang];

    const t = (key: string) => {
      return key.split('.').reduce((o: unknown, i) => {
        if (o) return o[i as keyof typeof o];
      }, currentLang);
    };

    // eslint-disable-next-line no-undef
    const deferedAddToHomescreen = ref();

    const appTitle = computed(() => document.title);
    const appUrl = computed(() => window.location.href);
    const firstCharTitle = computed(() => appTitle.value.substring(0, 1));
    const opened = ref(false);

    const setCookie = () => {
      let exdate = new Date();
      const expire = props.expires || 365;
      exdate.setDate(exdate.getDate() + expire);
      Cookies.set('addToHomescreenCalled', 'true', {
        expires: exdate,
      });
    };

    const iconStyle = computed(() => {
      const iconColor = getOpt('iconColor');
      const iconPath = getOpt('iconPath');
      const iconTextColor = getOpt('iconTextColor');

      const properties: CSSProperties = {
        backgroundColor:
          iconColor && typeof iconColor === 'string'
            ? iconColor
            : 'transparent',
        backgroundImage: iconPath ? 'url(' + getOpt('iconPath') + ')' : 'none',
        color:
          iconTextColor && typeof iconTextColor === 'string'
            ? iconTextColor
            : 'black',
      };
      return properties;
    });

    const buttonStyle = computed(() => {
      const buttonTextColor = getOpt('buttonTextColor');
      const buttonColor = getOpt('buttonColor');

      const properties: CSSProperties = {
        color:
          buttonTextColor && buttonTextColor === 'string'
            ? buttonTextColor
            : 'white',
        backgroundColor:
          buttonColor && typeof buttonColor === 'string'
            ? buttonColor
            : 'black',
      };
      return properties;
    });

    const close = () => {
      setCookie();
      opened.value = false;
    };

    const closeModal = () => {
      const element: HTMLElement | null = document.getElementById('IOSmodal');
      if (element) element.style.display = 'none';
    };

    const addToHomescreen = () => {
      const parser = new UAParser();
      const parsedUa = parser.getResult();
      const deviceInfos: DeviceInfos = {
        os: parsedUa.os.name,
        browser: parsedUa.browser.name,
      };
      const iosElementModal: HTMLElement | null =
        document.getElementById('IOSmodal');
      if (deferedAddToHomescreen.value) {
        deferedAddToHomescreen.value.prompt();
      } else if (deviceInfos.os === 'iOS') {
        //Open IOS modal only on IOS device
        if (iosElementModal) iosElementModal.style.display = 'block';
      } else if (deviceInfos.os === 'Android') {
        alert(t('addMessages.android'));
      } else if (
        deviceInfos.os === 'Windows' &&
        (deviceInfos.browser === 'Chrome' || deviceInfos.browser === 'Edge')
      ) {
        alert(t('addMessages.windows.chrome'));
      } else if (
        deviceInfos.os === 'Windows' &&
        deviceInfos.browser === 'Firefox'
      ) {
        alert(t('addMessages.windows.firefox'));
      } else if (deviceInfos.os === 'Mac OS') {
        const isTouchDevice =
          'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
          //Open IOS modal only on IPad device
          if (iosElementModal) iosElementModal.style.display = 'block';
        } else {
          if (deviceInfos.browser === 'Firefox') {
            alert(t('addMessages.macos.firefox'));
          } else if (deviceInfos.browser === 'Chrome') {
            alert(t('addMessages.macos.chrome'));
          } else if (deviceInfos.browser === 'Safari') {
            alert(t('addMessages.macos.safari'));
          }
        }
      } else {
        alert(t('addMessages.others'));
      }
      opened.value = false;
    };

    onMounted(() => {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferedAddToHomescreen.value = e;
      });

      const getHomescreenCalledCookie = Cookies.get('addToHomescreenCalled');
      if (!isStandalone() && !getHomescreenCalledCookie) {
        opened.value = true;
        setCookie();
      }
    });

    return {
      t,
      addToHomescreen,
      closeModal,
      close,
      buttonStyle,
      iconStyle,
      getCssOpt,
      getOpt,
      appUrl,
      firstCharTitle,
      appTitle,
      opened,
    };
  },
});
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

button {
  cursor: pointer;
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
  border: 0;
  outline: 0;
  font-size: 1rem;
  padding: 5px;
  margin-bottom: 15px;
}
</style>
