<template>
  <div>
    <!--     <AddToHomescreen buttonColor="red"></AddToHomescreen>
 -->
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// import { AddToHomescreen } from '../../../dist/vue-addtohomescreen';
// import { useAddToHomescreen } from '../../../dist/vue-addtohomescreen';

import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
