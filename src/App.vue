<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT</router-link> -->
      <router-view></router-view>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/base.scss";
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
