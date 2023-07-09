<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="HIT Digital" />

    <div id="nav">
      <router-link to="/">Introdução</router-link> |
      <router-link to="/contato">Contato</router-link>
    </div>
    <router-view />

    <div>
      <GetValue />
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GetValue from './components/GetValue.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    GetValue
  }
}
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
