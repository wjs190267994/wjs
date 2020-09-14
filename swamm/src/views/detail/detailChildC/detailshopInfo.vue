<template>
  <div class="shop">
     <div class="name">
         <img :src="shopinfo.shopLogo" alt="">
         <span>{{shopinfo.name}}</span>
     </div>
     <div class="derect">
         <div class="left item">
             <div class="sell">
                 <div>{{sellTofixed}}万</div>
                 <div>总销量</div>
             </div>
             <div class="goods">
                <p>{{shopinfo.cGoods}}</p>
                <p>全部宝贝</p>
             </div>
         </div>
         <div class="right item">
             <div v-for="item in shopinfo.score">
                 <span class="name">{{item.name}}</span>
                 <span class="score" :class="{isBetter:item.isBetter}">
                     <span> {{item.score}}</span>
                     <span>{{item.isBetter? '高' : '低'}}</span>
                </span>
             </div>
         </div>
     </div>
     <div class="shopButton">
         <a :href="shopinfo.shopUrl">进店逛逛</a>
     </div>
  </div>
</template>

<script>
export default {
    props:{
       shopinfo:{
            type:Object,
            defaule(){
                return {}
            } 
       }
    },
    computed:{
        sellTofixed(){
            return (this.shopinfo.cSells / 10000).toFixed(1)
        }
    }
}
</script>

<style scoped>
    .shop {
        padding-top:15px;
        margin-top:15px;
        border-top: 2px solid #ccc;
        padding-bottom:25px;
        margin-bottom:20px;
        border-bottom: 2px solid #ccc;
    }
    .name {
        font-size: 14px;
        font-weight: 600;
        color: #666;
    }
    .name img{
        width: 25px;
        height: 25px;
        vertical-align: middle;
    }
    .derect {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
    }
  .derect .item {
      flex-basis: 45%;
  }
  .derect .left {
      font-size: 14px;
      margin-left: 35px;
      position: relative;
      line-height: 25px;
  }
    .derect .left::after{
        content: "";
        position: absolute;
        width: 1px;
        height: 60%;
        background: #ccc;
        right: 0;
        top: 8px;
    }
  .derect .left .sell  {
      width: 40%;
      text-align: center;
      display: inline-block;
       margin-right: 10px;
  }
  .derect .left .sell div:nth-child(2) {
      font-size: 10px;
  }
  .derect .left .goods {
      width: 40%;
      text-align: center;
      display: inline-block; 
  }
  .derect .left .goods p:nth-child(2){
        font-size: 8px;
  }
   .derect .right {
       margin-top: -10px;
       margin-left: 40px;
       font-size: 14px;
       line-height: 22px;
   }
   .derect .right .name {
       font-size: 12px;
       margin-right: 8px;
   }
   .derect .right .score {
       position: relative;
       color: green;
   }
     .derect .right .score span:nth-child(2) {
         position: absolute;
         left: 50px;
     }
   .derect .right .isBetter span:nth-child(1) {
       color: red;
   }
   .derect .right .isBetter span:nth-child(2) {
       background: red;
       color: #fff;
   }
   
   .shopButton {
       width: 100%;
       text-align: center;

   }
   .shopButton a{ 
       display: inline-block;
       color: grey;
       font-size: 14px;
       background: #ccc;
       width:100px;
       height: 25px;
       line-height: 25px;
       border-radius: 15px;
   }
</style>