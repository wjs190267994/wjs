<template>
<div>
    <swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <swipe-item v-for="(img,index) in images" :key="index">
        <a :href="img.link" class="navlink">
            <img v-lazy="img.image" />
        </a> 
        </swipe-item>
        <!-- <swipe-item>1</swipe-item>
        <swipe-item>2</swipe-item> -->
    </swipe>
</div>
  
</template>

<script>
import Vue from 'vue'
import {Swipe,SwipeItem,Lazyload }  from 'vant';

Vue.use(Lazyload)
export default {
    props:{
        images:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    components:{
        Swipe,
        SwipeItem
    }
}
</script>

<style scoped>
.my-swipe {
    height: 170px;
}
  .navlink,.navlink img {
    width: 100%;
    height: 170px;
  }

</style>