<script setup lang="ts">
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';

const srt = ref<string>('')

axios.get('http://192.168.0.55:8888/json').then(res => {
  console.log(res)
  console.log(res.data)
  srt.value = res.data.data
}).catch(err => {
  console.log(err)
})
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    嘻嘻 => {{srt}}
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
