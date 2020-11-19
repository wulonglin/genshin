<template>
  <div>
    <header-view></header-view>
    <h1>首页</h1>
    <footer-view></footer-view>
  </div>
</template>

<script>
import headerView from "@/views/header";
import footerView from "@/views/footer";
export default {
  components: {
    headerView,
    footerView,
  },
};
</script>
