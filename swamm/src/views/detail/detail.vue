<template>
  <div id="detail">
    <dnavbar class="dnavbar"></dnavbar>
    <detailscroll class="scroll" ref="scroll" @scrollDown="scrollDown" :pullUpLoad='true'>
      <swipe :images="Topimages" class="detailswipe" ></swipe>
      <detailbaseInfo :goods="Goods"></detailbaseInfo>
      <detailshopInfo :shopinfo='shopInfo'></detailshopInfo>
      <detailgoodsInfo :goodList="goodsList" @detailImgLoad="refesh"></detailgoodsInfo>
      <detaparamsInfo :paramsInfo='paramsInfo'></detaparamsInfo>
    </detailscroll>
    <backup @click.native="backup" v-if="isShowback"></backup>
  </div>
</template>

<script>
import dnavbar from './detailChildC/Dnavbar'
import swipe from './detailChildC/detaswipe'
import detailbaseInfo from './detailChildC/detailbaseInfo'
import detailshopInfo from './detailChildC/detailshopInfo'
import detailgoodsInfo from './detailChildC/detailgoodsInfo'
import detaparamsInfo from './detailChildC/detailparamsInfo'


import detailscroll  from '@/components/content/scroll/scroll'
import backup from '@/components/content/backup/backup'

import {getDetail,GoodsInfo,Params} from '@/network/detaildata'
export default {
    name:'detail',
    data(){
        return {
            iid:null,
            Topimages:null,
            Goods:{},
            shopInfo:{},
            goodsList:{},
            paramsInfo:{},
            isShowback:false
        }
    },
    methods:{
      refesh(){
         this.$refs.scroll.refresh();
         console.log('refresh');
      },
      backup(){
        this.$refs.scroll.backup();
      },

      scrollDown(op){
        this.isShowback = op.y < -1000? true : false 
      }
    },
    components:{
      dnavbar,
      swipe,
      detailbaseInfo,
      detailshopInfo,
      detailgoodsInfo,
      detaparamsInfo,
      detailscroll,
      backup
    },
    created(){
        this.iid = this.$route.query.iid  

        getDetail(this.iid).then(res => {
          const data = res.result;
          this.Topimages = data.itemInfo.topImages;
          console.log(data);
          this.Goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services);
          // console.log(this.Goods)
          this.shopInfo = data.shopInfo;//店铺信息数据

          this.goodsList = data.detailInfo;//商品详细数据

          this.paramsInfo  = new Params(data.itemParams);//参数数据
        })
    }
}
</script>

<style scoped>
.detailswipe {
  height: 400px;
  width: 100%;
}
 #detail {
    position: relative;
    z-index: 1000;
    background: #fff;
    padding: 0 3px;
    height: 100vh;
 }
 .dnavbar {
   position: relative;
   top: 0;
   left: 0;
   z-index: 1001;
 }
.scroll {
  height: calc(100% - 44px);
}
</style>