<template>
  <div class="goodList">
      <listItem v-for="(item,index) in items" :item='item' :key="index"></listItem>
  </div>
</template>

<script>
import listItem from './list-Item'
export default {
    props:{
        items:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        listItem
    }
}
</script>

<style scoped>
 .goodList {
     display: flex;
     flex-wrap: wrap;
    justify-content: space-around;
 }
</style>