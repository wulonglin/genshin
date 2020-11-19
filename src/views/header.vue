<template>
  <div class="jg">
    <el-container>
      <el-header>
        <div class="header">
          <div class="header__inner">
            <div class="header__logo">
              <img src="https://bbs.mihoyo.com/ys/_nuxt/img/75577a9.png" />
            </div>
            <div class="header__title">| 米游社 · 原神</div>
            <div class="header__left">
              <el-menu
                class="el-menu-header"
                mode="horizontal"
                background-color="#2D2F33"
                text-color="#fff"
                router="ture"
              >
                <el-menu-item index="hm"><a href="#/hm">首页</a></el-menu-item>
                <el-menu-item index="jg"><a href="#/jg">酒馆</a></el-menu-item>
                <el-menu-item index="gl"><a href="#/gl">攻略</a></el-menu-item>
                <el-menu-item index="gf"><a href="#/gf">官方</a></el-menu-item>
                <el-menu-item index="trt"><a href="#/trt">同人图</a></el-menu-item>
                <el-menu-item index="gcs"
                  ><a href="#/gcs" target="_blank">观测枢</a></el-menu-item
                >
              </el-menu>
            </div>
          </div>
        </div>
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style scoped>
.header {
  font-family: "Microsoft YaHei", "微软雅黑", Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: 62px;
  background-color: #2d2f33;
  color: #fff;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
}
.header__inner {
  position: relative;
  left: 160px;
}
.header__logo img {
  width: 90px;
  vertical-align: middle;
}
.header__logo {
  height: 62px;
  display: inline-block;
  cursor: pointer;
  vertical-align: top;
}
.header__title {
  display: inline-block;
  margin-left: 10px;
  position: relative;
  font-size: 14px;
  vertical-align: top;
  font-weight: 600;
  width: 180px;
}
.header__left {
  display: inline-block;
  vertical-align: top;
}
a {
  text-decoration: none;
  outline: none;
}
</style>
