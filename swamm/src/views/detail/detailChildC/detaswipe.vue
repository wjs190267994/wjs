<template>
   <swipe>
       <swipeItem v-for="(item,index) in images" :key="item">
           <img :src='item'>
           <!-- {{item}} -->
       </swipeItem>
   </swipe>
</template>

<script>
import swipe from '@/components/vant/swipe/swipe'
import swipeItem from '@/components/vant/swipe/swipeItem'
export default {
    props:{
        images:{
            type:Array,
            default(){
                return ['1','3']
            }
        }
    },
    components:{
        swipe,
        swipeItem
    },
    mounted(){
        
    }
}
</script>

<style scoped>
 img {
     width: 100%;
     height: 100%;
 }
</style>
