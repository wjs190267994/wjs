<template>
  <div v-if="isShow">
      <div class="title">
          <p>{{goods.title}}</p>
      </div>
      <div class="price">
          <span class="nowPrice">{{goods.newPrice}}</span>
          <span class="lowProce">¥{{goods.oldPrice}}</span>
          <span v-show='isshowDiscount' class="discount" :style="{background:goods.discountBgColor}">{{goods.discount}}</span>
      </div>
      <div class="columns" >
          <div>{{goods.columns[0]}}</div>
          <div>{{goods.columns[1]}}</div>
          <div>{{goods.services[goods.services.length - 1].name}}</div>
      </div>
      <div class="services">
          <p v-for="index in goods.services.length-1">
              <img :src="goods.services[index-1].icon" alt="">{{goods.services[index-1].name}}
            </p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        goods:{
            type:Object,
            default(){
                return {
                
                }
            }
        }
    },
    data(){
        return{
          
        }
    },
    computed:{
        isShow(){
            return Object.keys(this.goods).length == 0 ? false : true;
        },
        isshowDiscount() {
            return this.goods.discount === '' ? false : true;
        }
    }
}
</script>

<style scoped>

 .title {
    font-size: 14px;
    line-height: 14px;
 }
  .title p {
      margin-bottom: 5px;
       margin-top: 10px;
  }
  .price {
      margin-top:10px;
      position: relative;
  }
 .price .nowPrice {
     color: deeppink;
     font-weight: bold;
     margin-right: 3px;
 }
 .price .lowProce {
     font-size: 12px;
     margin-right: 5px;
     text-decoration: line-through;
     color: #666;
 }
 .price .discount {
     position: absolute;
     top: -6px;
     width: 55px;
     border-radius: 15px;
     height: 18px;
     text-align: center;
     color: #fff;
     font-size: 1px;
     line-height: 18px;
     vertical-align: top;
    font-weight: bold;
 }
 .columns {
     margin-top:10px;
     display: flex;
     font-size: 12px;
     color: #666;
 }
 .columns div {
     flex: 1;
 }
.columns div:nth-child(2) {
      text-align: center;
  }
.columns div:last-child {
      text-align: right;
  }
.services {
    display: flex;
    font-size: 12px;
    margin-top:10px;
}
.services p {
    flex: 1;
}

.services p:nth-child(2) {
    text-align: center;
} 
.services p:last-child{
    text-align: right;
}

.services p img{
    width: 12px;
    height: 12px;
    vertical-align:text-top;
}
</style>