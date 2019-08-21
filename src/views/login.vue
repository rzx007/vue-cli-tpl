<template>
  <div class="about">
    <h1>This is an login page</h1>
  </div>
</template>
<script>
import Cookies from 'js-cookie'
export default {
  created(){
    
  },
  mounted(){
    Cookies.set('token','qewqcasdwq')
    this.$router.push('/')
  }
}
</script>
<style lang="scss">
h1{
  color: $theme-color;
}
</style>
