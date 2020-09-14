<template>
  <div class="recommed">
      <div class="item" v-for="item in recommed">
          <a :href="item.link">
              <img :src="item.image" alt="">
          </a>
          <div>{{item.title}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        recommed:{
            type:Array,
            default(){
                return [];
            }
        }
    }
}
</script>

<style scoped>
    .recommed {
        display: flex;
        text-align: center;
        font-size: 12px;
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
    }
    .item {
       width: 25%;
    }
    img {
        width: 70px;
        height: 70px;
    }
</style>