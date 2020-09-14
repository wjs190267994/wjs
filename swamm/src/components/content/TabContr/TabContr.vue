<template>
  <div class="tabC">
      <div v-for="(item,index) in titles" class="items" :class="{active:index == activeIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type:Array,
            default(){
                return [];
            }
        }
    },
    data(){
        return {
            activeIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.activeIndex = index;
            this.$emit('tabC',index);
        }
    }
}
</script>

<style scoped>
    .tabC {
        display: flex;
        font-size: 12px;
        background-color: #fff;
        text-align: center;
        margin-top: 10px;
    }
    .items {
        flex: 1;
        height: 20px;
    }
    .items span {
        padding: 3px 2px;
    }
    .active {
        color: deeppink;
    }
    .active span {
        border-bottom: 2px solid deeppink;
    }
</style>