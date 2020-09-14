<template>
  <div class="goodsInfo">
     <div class="head">
         <div class="start"></div>
         <div class="desc">{{goodList.desc}}</div>
         <div class="end"></div>
     </div>
     <div class="goodslist" v-for="item in goodList.detailImage">
        <div class="key">{{item.key}}</div>
        <img v-for="img in item.list" :src="img" alt="" @load="imgLoad">
     </div>
  </div>
</template>

<script>
export default {
    props:{
        goodList:{
            type:Object,
            default(){
                return {
                 
                }
            }
        }
    },
    data(){
        return {
            imglength:0,
            count:0
        }
    },
    methods:{
        imgLoad(){
            if(++this.count == this.imglength) {
                this.$emit("detailImgLoad");
            }
        }
    },
    watch:{
        goodList(){
            this.imglength = this.goodList.detailImage[0].list.length
        }
    },
    computed:{
        setKey(){
            return '444'
        }
    }
}
</script>

<style scoped>
   .goodsInfo{
       width: 100%;
   }
    .head .start,.head .end {
        position: relative;
        width: 80px;
        height: 1px;
        background: #666;
    }
    .head .start::after, .head .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #000;
        top: -5px;
    }
    .head .end {
        left:calc(100% - 90px)
    }
    .head .end::after {
        right: 0px;
    }
    .head .desc {
       margin: 10px 0;
       font-size: 14px;
       line-height: 15px;
       text-indent: 9px;
    }
    .key {
        font-size: 14px;
        text-indent: 9px;
        margin-top: 5px;
    }
    .goodslist img{
        width: 100%;
    }
</style>