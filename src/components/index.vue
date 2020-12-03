<template>
  <div class="layout_content">
    <a-layout>
      <a-layout-sider><Sider></Sider></a-layout-sider>
      <a-layout>
        <a-layout-header><Header></Header></a-layout-header>
        <a-layout-content><Content></Content></a-layout-content>
        <a-layout-footer>Footer</a-layout-footer>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import Sider from "./view/Sider";
import Header from "./view/Header";
import Content from "./view/Content";
export default {
  components: {
    Sider,
    Header,
    Content,
  },
  name: "index",
};
</script>

<style>
html,
body,
#root {
  width: 100%;
  height: 100%;
  background: #ffffff;
}
.ant-layout {
  height: 100%;
}
.ant-layout-header {
  background: #ffffff;
}
.ant-layout-header {
  padding: 0;
}
</style>