<template>
  <div class="home">
    
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="发电厂" name="first">发电厂</el-tab-pane>
      <el-tab-pane label="发电机" name="second">机组</el-tab-pane>
      <el-tab-pane label="交流线端" name="third">线端</el-tab-pane>
      <el-tab-pane label="变压器绕组" name="fourth">绕组</el-tab-pane>
      <el-tab-pane label="并联电容器" name="fifth">并联电容器</el-tab-pane>
      <el-tab-pane label="并联电抗器" name="six">并联电抗器</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>
