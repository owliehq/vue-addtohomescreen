# vue-addtohomescreen

Vue-addtohomescreen is a plugin allowing you to trigger a box asking the user if he wants to install the PWA version of your website at the place you want.
You can for example display it after a connection process or when reading an article.

## Installation

Install it with npm

```bash
npm install @owliehq/vue-addtohomescreen
```

Or Yarn

```bash
yarn add @owliehq/vue-addtohomescreen
```

## Usage

### Vue 3 init

First, you'll need to initialize the plugin and ask Vue to use it:

```javascript
import { createApp } from "vue";
import VueAddtohomescreen from "@owliehq/vue-addtohomescreen";

const app = createApp(App);

app.use(VueAddtohomescreen);
```

### Vue 2 init

First, you'll need to initialize the plugin and ask Vue to use it:

```javascript
import VueAddtohomescreen from "@owliehq/vue-addtohomescreen";
Vue.use(VueAddtohomescreen);
```

### Vue3 & 2 use

Then add the component where you want

```javascript
<add-to-homescreen />
```

with props

```javascript
<add-to-homescreen lang="fr_FR" />
```

Or initialize it in Vue script area

```javascript
this.$addToHomescreen.mount();
```

with parameters

```javascript
this.$addToHomescreen.mount({
  lang: "fr_FR",
  iconColor: "#1B2334",
  buttonColor: "#27E9B8",
});
```

##Parameters list (hope parameters name are explicit enough; for lang, only en_GB & fr_FR available for now, feel free to translate & MR :))

```javascript
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
```

## Credits

Made with <3 in Metz, a small town in France by Owlie.
Feel free to patch / edit / optimize / add features. MR are Welcome.
