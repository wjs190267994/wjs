<template>
  <div id="detail">
    <dnavbar class="dnavbar" @navClick="dnavbarClick"></dnavbar>
    <detailscroll class="scroll" ref="scroll" @scrollDown="scrollDown" :pullUpLoad='true'>
      <swipe :images="Topimages" class="detailswipe" ></swipe>
      <detailbaseInfo :goods="Goods"></detailbaseInfo>
      <detailshopInfo :shopinfo='shopInfo'></detailshopInfo>
      <detailgoodsInfo :goodList="goodsList" @detailImgLoad="refesh"></detailgoodsInfo>
      <detaparamsInfo :paramsInfo='paramsInfo' ref="params"></detaparamsInfo>
      <detailrate :rate='rateDate' @detailImg="refesh" ref="rate"></detailrate>
      <goodlist :items='recommend' ref="recommend"></goodlist>
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
import detailrate from './detailChildC/detailusertare'

import detailscroll  from '@/components/content/scroll/scroll'
import goodlist  from '@/components/content/GoodList/goodlist'
import backup from '@/components/content/backup/backup'

import {backTop} from '@/assets/commen/mixin.js'


import {getDetail,GoodsInfo,Params,getRecommed} from '@/network/detaildata'

import {debounds} from '@/assets/Tool/tool.js'
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
            rateDate:{},
            fun:null,
            recommend:[],
            // isShowback:false,
            navTooffsetTop:[]
        }
    },
    mixins:[backTop],
    mounted() {
     this.fun =  debounds( this.$refs.scroll.refresh,100);
     this.$bus.$on('detailitemimgLoad',()=>{
       this.fun();
      // this.$refs.scroll.refresh();
     });
    },
    updated() {
    
    },
    methods:{
      refesh(){
        this.fun();
        // this.$refs.scroll.refresh();
          this.navTooffsetTop = [];
      this.navTooffsetTop.push(0);
      this.navTooffsetTop.push(this.$refs.params.$el.offsetTop-60);
      this.navTooffsetTop.push(this.$refs.rate.$el.offsetTop-60);
      this.navTooffsetTop.push(this.$refs.recommend.$el.offsetTop-45);
      console.log(this.navTooffsetTop);
      },
      // backup(){
      //   this.$refs.scroll.backup();
      // },

      scrollDown(op){
        this.isShowback = op.y < -1000? true : false 
      },
      dnavbarClick(index){
        console.log(index);
        this.$refs.scroll.scrollTo(0,-this.navTooffsetTop[index],200);
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
      goodlist,
      detailrate,
      backup
    },
    created(){
        this.iid = this.$route.query.iid  

        getDetail(this.iid).then(res => {

          const data = res.result;
          this.Topimages = data.itemInfo.topImages;
          // console.log(data);
          this.Goods = new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services);
          // console.log(this.Goods)
          this.shopInfo = data.shopInfo;//店铺信息数据

          this.goodsList = data.detailInfo;//商品详细数据

          this.paramsInfo  = new Params(data.itemParams);//参数数据

          if(data.cRate != 0) {
            this.rateDate = data.rate.list[0]; // 用户评论数据
          }
        })
        getRecommed().then(res =>{//获取推荐数据
         this.recommend = res.data.list;
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