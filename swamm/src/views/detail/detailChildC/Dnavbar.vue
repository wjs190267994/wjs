<template>
  <div class="nav">
      <navbar navBg="#fff">
          <div class="back" slot="left" @click="back"> 《 </div>
          <div slot="center" class="title">
              <div v-for="(item,index) in title" class="item" @click="itemclick(index)" :class="{active:currindex==index}">{{item}}</div>
          </div>
      </navbar>
  </div>
</template>

<script>
import navbar from '@/components/common/navbar/navbar'
export default {
    data(){
        return {
            title:['商品','参数','评论','推荐'],
            currindex:0
        }
    },
    components:{
        navbar,
    },
    methods:{
        itemclick(index) {
            this.currindex = index;
            this.$emit('navClick',index);
        },
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
    .title {
        display: flex;
        font-size: 12px;
        text-align: center;
    }
    .item {
        flex:1
    }
    .active {
        color: #f40;
    }
    .back {
        text-align: center;
    }
</style>