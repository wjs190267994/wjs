<template>
  <div class="navBar" :style="{backgroundColor:navBg}">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
    props:{
        navBg:{
            type:String,
            default:'#f40'
        }
    }
}
</script>

<style scoped>
    .navBar {
        display: flex;
        height: 44px;
        line-height: 44px;
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
    }
    .left,.right{
        width: 60px;
        /* background: chartreuse; */
    }
    .center{
        flex: 1;
        /* background: coral; */
    }
</style>

