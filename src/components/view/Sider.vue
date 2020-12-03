<template>
  <div>
    <a-menu
      mode="inline"
      @click="handleClick"
    >
      <a-menu-item key="1">options</a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title"
          ><a-icon type="mail" />
          <span>Navigation One</span>
        </span>
        <a-menu-item key="1"> Option 1 </a-menu-item>
        <a-menu-item key="2"> Option 2 </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name:'Sider',
  data(){
    return{
      
    }
  },
  methods:{
    handleClick(e){
      // this.$route.
      //console.log(this.$router.push("/index/workbench"))
    }
  }
};
</script>

<style>
</style>