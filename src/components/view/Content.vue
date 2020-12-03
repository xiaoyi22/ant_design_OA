<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
html,
body {
  height: 100%;
}
.content {
  height: calc(100vh - 133px);
}
</style>