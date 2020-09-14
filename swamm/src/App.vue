<template>
  <div id="app">
    <mainTabbar></mainTabbar>
    <keep-alive exclude="detail">
       <router-view></router-view>
    </keep-alive>
   
  </div>
</template>
<script>
import  mainTabbar from "@/components/content/mainTabbar/mainTabbar.vue";

export default {

  data(){
    return {}
  },
  components:{
    mainTabbar
  }
}
</script>
<style>
  @import url('./assets/base.css');
</style>
