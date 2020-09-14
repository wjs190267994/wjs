<template>
  <SwipeItem class="item" >
      <slot></slot>
 </SwipeItem>

</template>

<script>
import {SwipeItem }  from 'vant';
export default {
   components:{
       SwipeItem
   }
}
</script>

<style scoped>
.item {
    width: 100%;
    height: 100%;
} 
</style>