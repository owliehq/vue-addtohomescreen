import App from './App.vue';
import { createApp } from 'vue';
// import AddToHomescreen from '../../../dist/vue-addtohomescreen.mjs';

const app = createApp(App);
/*
app.use(AddToHomescreen, {
  buttonColor: 'blue',
});
*/
app.mount('#app');
