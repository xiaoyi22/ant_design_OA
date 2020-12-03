<template>
  <div class="header_content">
    <span class="header_menu-left">
      <a-icon type="menu-fold"></a-icon>
    </span>
    <span class="hedar_user-right">
      <span class="userinfo">
        <a-avatar icon="user"></a-avatar>
        <span>xiaoyi</span>
      </span>
      <span></span>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.header_content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #F3F4F5;
  box-shadow: darkgrey 0px 2px 2px 0px ;//边框阴影
  .header_menu-left {
    width: 60px;
  }
  .hedar_user-right {
    height: 100%;
    display: flex;
    .userinfo {
      padding: 0 20px;
      span {
        margin: 0 5px;
      }
    }
  }
}
</style>