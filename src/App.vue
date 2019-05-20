<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-link to="/">HOME</router-link>
    <router-link to="/about">ABOUT</router-link> -->
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  name: 'app',
  components: {
  }
}
</script>

<style <style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
