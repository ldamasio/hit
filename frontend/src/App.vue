<template>
  <div id="app">
    <img alt="Hit Digital logo" class="logo" src="./assets/logo.png">
    <div id="nav">
      <router-link to="/"><div class="button">Introdução</div></router-link>
      <router-link to="/contato"><div class="button">Contato</div></router-link>
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
.logo {
  width: 160px;
  margin-top: 60px;
  margin-bottom: 30px;
}
.button {
  height: 12px;
  display: inline-block;
  width: 160px;
  background-image: linear-gradient(#ea916b, #e05c4e);
  color: white;
  padding: 10px 24px;
  margin: 10px 24px;
  border-radius: 8px;
  text-align: center;
  vertical-align: middle;
  line-height: 12px;
}
</style>
