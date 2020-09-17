<template>
  <div id='home'>
    <nav-bar class="homenav"><div slot="center"> 购物街</div></nav-bar>
     <TabC :titles="['流行','新款','精选']" class="tab-control" @tabC="goodList" v-show="isTabFeix" :class="{istabFeix:isTabFeix}" ref="tabC1"></TabC>

    <scroll class="content" :probeType="1"  :pullUpLoad= "true" @scrollDown="scrollDown" @moreLoad="moreLoad" ref="scroll">
      <homeSwipe :images="banner"></homeSwipe>
      <recommend :recommed="recommend"></recommend>
      <div class="fauture"></div>
      <TabC :titles="['流行','新款','精选']" class="tab-control" @tabC="goodList" ref="tabC"></TabC>

      <goodList :items="getListType" ></goodList>

    </scroll>
      <backUp v-if="isShouback" @click.native="backup"></backUp>
    <!-- <ul>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
    </ul> -->
  </div>
</template>

<script>

import {homemultdata,getHomeGoods} from '@/network/homemultidata.js'
import {debounds} from '@/assets/Tool/tool.js'
 
import navBar from '@/components/common/navbar/navbar'
import homeSwipe from './homeComponents/homeSwipe.vue'
import recommend from './homeComponents/homeRecomed'

import TabC from '@/components/content/TabContr/TabContr'
import goodList from '@/components/content/GoodList/goodlist'
import scroll from '../../components/content/scroll/scroll'
import backUp from '@//components/content/backup/backup'


export default {
  data(){
    return {
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      CurrGoodsType:'pop',
      isShouback:false,
      tabCoffset:0,
      isTabFeix:false,
      activeOffsetTop:0
    }
  },
  components:{
    navBar,
    homeSwipe,
    recommend,
    TabC,
    goodList,
    scroll,
    backUp
  },
  created(){
    this.homemultdata();//请求轮播图数据


    this.getHomeGoods('new');
    this.getHomeGoods('pop');
    this.getHomeGoods('sell');
  },
  computed:{
    getListType(){
      return this.goods[this.CurrGoodsType].list
    }
  },
  mounted(){
    // tabCoffset
      this.tabCoffset=this.$refs.tabC.$el.offsetTop;


    let fun = debounds( this.$refs.scroll.refresh,0);
    this.$bus.$on('homeitemimgLoad',()=>{
       fun();
    })
  },
  methods:{

    /*
    * 
    */
    scrollDown(op){
        this.isShouback = op.y > -1000 ? false : true;
        this.isTabFeix = op.y > -this.tabCoffset - 88 ? false : true;
    },
    moreLoad(){
      this.getHomeGoods(this.CurrGoodsType);
    },
/*
*事件方法
*/ 
    goodList(index){
      switch(index){
          case 0 :
             this.CurrGoodsType = 'pop'
             break
          case 1 :
              this.CurrGoodsType = 'new'
              break
          case 2 :
             this.CurrGoodsType = 'sell'
      }
      this.$refs.tabC.activeIndex =  this.$refs.tabC1.activeIndex = index;
    },
    backup(){
        // console.log(this.$refs.scroll)
        this.$refs.scroll.backup();
    },

/**
 * 网络方法
 * 
 */
    homemultdata(){
        homemultdata().then(res=>{
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;    
      // let func = debounds(this.$refs.scroll.finshPullUp,2000);

      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finshPullUp();
          //  func();
      })
    }
  },
 activated(){
   this.$refs.scroll.scrollTo(0, this.activeOffsetTop,0);
   this.$refs.scroll.refresh();
   console.log(this.activeOffsetTop)
 },
 deactivated(){
   this.activeOffsetTop = this.$refs.scroll.scroll.y;
 }
}
</script>

<style scoped>
#home {
  /* margin-top: 44px; */
  position: relative;
  height: 100vh;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
 .homenav  {
    text-align: center;
    color: #fff;
    position: fixed;
    /* width: 100%; */
    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .fauture {
    height: 200px;
    width: 100%;
    background: #666;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
  .istabFeix {
    position: relative;
    left: 0;
    top: 44px;
    z-index: 9999;
    background: #fff;
  }
  /* .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    /* background-color: #39a9ed; */
</style>