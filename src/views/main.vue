<template>
  <div class="main width">
    <el-container>
      <el-aside width="auto">
        <el-scrollbar wrap-class="scrollbar-wrapper">
          <v-sidebar></v-sidebar>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>
          <v-header></v-header>
        </el-header>
        <el-main>
          <div class="tag-nav-wrapper">
            <v-tags></v-tags>
          </div>
          <div class="content-wrapper">
            <keep-alive :include="cacheList">
              <router-view/>
            </keep-alive>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import bus from "@/utils/bus";
import vSidebar from "@/components/Sidebar.vue";
import vTags from "@/components/Tags.vue";
import vHeader from "@/components/Header.vue";
export default {
  name: "main",
  data() {
    return {
      activeName: "plant",
      tagsList: []
    };
  },
  components: {
    vSidebar,
    vTags,
    vHeader
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  created() {
    // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
    bus.$on("tags", msg => {
      console.log(msg);
      let arr = [];
      for (let i = 0, len = msg.length; i < len; i++) {
        msg[i].name && arr.push(msg[i].name);
      }
      this.tagsList = arr;
    });
  }
};
</script>
<style lang="scss">
// @import "@/assets/scss/mixin.scss";
h1 {
  @include font_color(null);
}
.el-header {
  @include haeder-background();
  // background: #0e9b92 linear-gradient(135deg, #0b827c, #11bab0);
  color: #333;
  text-align: center;
  height: 60px;
  box-sizing: border-box;
  line-height: 60px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
  padding: 0 !important;
}
.el-aside {
  background-color: #d3dce6;
  // color: #333;
  .sidebar-el-menu[data-v-7d622f5c]:not(.el-menu--collapse){
    width: 210px !important;
  }
}
</style>
