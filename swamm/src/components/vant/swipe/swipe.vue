<template>
   <div>
       <Swipe  class="swipe" :autoplay="2000" >
         <slot></slot>
       </Swipe>
   </div>
</template>

<script>
import Vue from 'vue';
import { Swipe} from 'vant';
export default {
    components:{
        Swipe
    }
}
</script>

<style scoped>
 .swipe {
     width: 100%;
     height: 100%;
 }
</style>