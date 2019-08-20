<template>
  <div class="about">
    <h1>This is an login page</h1>
  </div>
</template>
<script>
export default {
  mounted(){
    sessionStorage.setItem('token','qwewqdqwewdsadqw');
    this.$router.push('/')
  }
}
</script>
<style lang="scss">
h1{
  color: $theme-color;
}
</style>
