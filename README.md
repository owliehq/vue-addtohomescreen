# vue-addtohomescreen

Vue-addtohomescreen is a plugin allowing you to trigger a box asking the user if he wants to install the PWA version of your website at the place you want.

You can for example display it after a connection process or when reading an article.

**Only for Vue 3 ! For Vue 2, check @owliehq/vue-addtohomescreen@legacy**

## Installation

Install it with npm

```bash
npm install @owliehq/vue-addtohomescreen@legacy
```

Or Yarn

```bash
yarn add @owliehq/vue-addtohomescreen@legacy
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

## Parameters list (hope parameters name are explicit enough; for lang, only en_GB, fr_FR & ru_RU available for now, feel free to translate & MR :))

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
