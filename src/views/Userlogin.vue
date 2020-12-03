<template>
  <div class="index_content">
    <div class="login-panel-logo">
      <img src="../assets/logo (2).png" alt="" />
    </div>
    <div class="login-panel">
      <div class="login-panel-title"><span>登录</span></div>
      <a-form>
        <a-form-item>
          <a-input placeholder="username">
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, 0.25)"
            >
            </a-icon>
          </a-input>
        </a-form-item>
        <a-form-item style="margin-bottom:5px">
          <a-input-password placeholder="password">
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, 0.25)"
            ></a-icon>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-checkbox class="checkControl">7天内保持登录</a-checkbox>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">登录</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Userlogin",
  data() {
    return {};
  },
  mounted() {
    // this.Viewportheight = document.body.clientHeight;
    // console.log(this.Viewportheight)
  },
};
</script>

<style lang="less">
.index_content {
  background: url("../assets/1b4f5529-fc5d-4f3f-950f-30ba6558c89d.png");
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  position: fixed;
  .login-panel-logo {
    margin-top: 100px;
    img {
      width: 200px;
    }
  }
  .login-panel {
    padding: 20px 0;
    margin: 20px auto;
    background: #f3f3f3;
    width: 336px;
    .login-panel-title {
      font-size: 15px;
      margin: 10px 0 20px 0;
    }
    // 去掉a-form-item 间距
    .ant-form {
      margin: 0 auto;
      width: 80%;
    }
    .ant-input {
      margin: 0 auto;
      height: 40px;
    }
    .ant-input-suffix {
      left: 240px;
    }
    .checkControl {
      margin-right: 140px;
    }
    // 按钮样式
    .ant-btn-primary {
      width: 100%;
      height: 40px;
      line-height: 40px;
    }
  }
}
</style>