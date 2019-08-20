<template lang="html">
  <footer>
    <p>{{companyInfo|uppercaseFirst}}</p>
  </footer>
</template>

<script>
// import company from '@/assets/config/company.js'
export default {
  name:"foot",
  data(){
    return{
      companyInfo:''
    }
  },
  created(){
    this.companyInfo = 'vue!';
  }
}
</script>

<style lang="css">
footer{
  margin-top: 10px;
  height: 30px;
  text-align: center;
}
footer p{
  height: 100%;
  line-height:30px;
  text-align: center;
    color: #84f1f1;
    font-size: 13px;
}
</style>
