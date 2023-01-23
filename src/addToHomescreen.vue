<template>
  <div>
    <div
      :class="[
        'add-to-homescreen-container',
        opened ? 'add-to-homescreen-visible' : 'add-to-homescreen-hidden',
      ]"
    >
      <button class="close_btn" @click="close" />
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
          :style="{
            color: getCssOpt('iconTextColor'),
            background: getCssOpt('iconColor'),
            border: '1px solid ' + getCssOpt('iconColor'),
          }"
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
import UAParser from 'ua-parser-js';
import { useI18n } from 'vue-i18n';

import {
  ref,
  computed,
  inject,
  CSSProperties,
  defineComponent,
  onMounted,
} from 'vue';

import { isStandalone } from './utils';

interface Props {
  title?: string;
  content?: string;
  titleColor?: string;
  contentColor?: string;
  iconPath?: string;
  iconColor?: string;
  iconTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  background?: string;
  lang?: string;
  expires?: number;
}

type PropsKeys = keyof Props;

export default defineComponent({
  name: 'addToHomescreen',
  setup(props: Props) {
    const { t } = useI18n({
      inheritLocale: true,
    });
    const opened = ref(false);
    const options = ref<Props>({});
    options.value = inject('opt') as Props;

    const appTitle = computed(() => document.title);
    const appUrl = computed(() => window.location.href);
    const firstCharTitle = computed(() => appTitle.value.substring(0, 1));

    const setCookie = () => {
      let exdate = new Date();
      const expire = props.expires || 365;
      exdate.setDate(exdate.getDate() + expire);
      Cookies.set('addToHomescreenCalled', 'true', {
        expires: exdate,
      });
    };

    const getOpt = (option: PropsKeys): string | number | undefined => {
      const gettedOpt = options.value ? options.value[option] : undefined;
      return gettedOpt;
    };

    const getCssOpt = (option: PropsKeys): string | undefined => {
      const gettedOpt = options.value ? options.value[option] : option;
      return gettedOpt && typeof gettedOpt === 'string' ? gettedOpt : option;
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
      const iosElementModal: HTMLElement | null =
        document.getElementById('IOSmodal');
      const parser = new UAParser('user-agent');
      const parsedUa = parser.getResult();
      const deferedAddToHomescreen = inject(
        'deferedAddToHomescreen'
      ) as BeforeInstallPromptEvent;
      if (deferedAddToHomescreen) {
        deferedAddToHomescreen.prompt();
      } else if (parsedUa.os.name === 'iOS') {
        //Open IOS modal only on IOS device
        if (iosElementModal) iosElementModal.style.display = 'block';
      } else if (parsedUa.os.name === 'Android') {
        alert(t('addMessages.android'));
      } else if (
        parsedUa.os.name === 'Windows' &&
        (parsedUa.browser.name === 'Chrome' || parsedUa.browser.name === 'Edge')
      ) {
        alert(t('addMessages.windows.chrome'));
      } else if (
        parsedUa.os.name === 'Windows' &&
        parsedUa.browser.name === 'Firefox'
      ) {
        alert(t('addMessages.windows.firefox'));
      } else if (parsedUa.os.name === 'Mac OS') {
        const isTouchDevice =
          'ontouchstart' in window || navigator.maxTouchPoints > 0;

        if (isTouchDevice) {
          //Open IOS modal only on IPad device
          if (iosElementModal) iosElementModal.style.display = 'block';
        } else {
          if (parsedUa.browser.name === 'Firefox') {
            alert(t('addMessages.macos.firefox'));
          } else if (parsedUa.browser.name === 'Chrome') {
            alert(t('addMessages.macos.chrome'));
          } else if (parsedUa.browser.name === 'Safari') {
            alert(t('addMessages.macos.safari'));
          }
        }
      } else {
        alert(t('addMessages.others'));
      }
      opened.value = false;
    };

    onMounted(() => {
      console.log('MOUNT');
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

<i18n src="./i18n/index.json"></i18n>

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
