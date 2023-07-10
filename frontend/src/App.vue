<template>
  <div id="app">
    <img alt="Hit Digital logo" width="180px" src="./assets/logo.png">

    <div id="nav">
      <router-link to="/">Introdução</router-link> |
      <router-link to="/contato">Contato</router-link>
    </div>
    <router-view />

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: 'black';
  color: gray;
  margin-top: 10px;
  background-color: 'gray';
}
</style>
