# vue-addtohomescreen

Vue-addtohomescreen is a plugin allowing you to trigger a box asking the user if he wants to install the PWA version of your website at the place you want.

You can for example display it after a connection process or when reading an article.

**Only for Vue 3 ! For Vue 2, check @owliehq/vue-addtohomescreen@legacy**

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

### Vue 3 - Usage as plugin

You'll need to initialize the plugin and ask you app instance to use it, you can pass parameters for customization:

```javascript
import App from './App.vue';
import { createApp } from 'vue';
import AddToHomescreen from '@owliehq/vue-addtohomescreen';

const app = createApp(App);
app.use(AddToHomescreen, {
  buttonColor: 'blue',
});

app.mount('#app');
```

### Vue 3 - Usage inside your app

Import useAddToHomescreen

```javascript
import { useAddToHomescreen } from '@owliehq/vue-addtohomescreen';
```

And use it (for example here directly in the setup hook), you can pass parameters for customization:

```javascript
export default {
  name: 'App',
  setup() {
    useAddToHomescreen({ buttonColor: 'red' });
  },
};
```

## Parameters list ##

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
	default: 'en_GB' // See Available lang
},
expires: {
	type: Number,
	default: 8
}

```

## Available languages

en_GB: English
fr_FR: French
ru_RU: Russian
de_DE: German
es_ES: Spanish
pt_PT: Portuguese
nl_NL: Dutch
pl_PL: Polish
ja_JP: Japanese
zh_CN: Chinese


## Credits

Made with <3 in Metz, a small town in France by Owlie.

Feel free to patch / edit / optimize / add features. MR are Welcome.
