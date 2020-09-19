<template>
  <div class="userRate">
      <div class="head">
          <div class="user">用户评论</div>
          <div class="more">更多</div>
      </div>
      <div class="body">
          <div class="title">
              <!-- <img :src="rate.user.avatar" alt=""> -->
              <!-- <div class="username">{{rate.user.uname}}</div> -->
              <div class="content">{{rate.content}}</div>
          </div>
          <div class="date">
              <span class="yea" >{{rate.created | showdate}}</span>
              <span class="style">{{rate.style}}</span>
          </div>
          <div class="img" >
              <img v-for="(item,index) in rate.images" :key="index" v-lazy="item" alt="" @load="imgLoad">
          </div>
      </div>
  </div>    
</template>

<script>

export default {
    props:{
        rate:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods: {
        imgLoad(){
            this.$emit('detailImg');
        }
    },
    filters:{
        showdate(value){
          const date = new Date(value * 1000);
          const yeard = date.getFullYear();
          const month = date.getMonth();
          const day = date.getDay();
          return `${yeard}-0${month}-0${day}`
        }
    }
}
</script>

<style scoped>
.userRate {
    margin-top:50px;
    padding:0 4px;
}
.userRate .head {
    height: 40px;
    font-size: 14px;
}
.userRate .head .user{
  float: left;
}
.userRate .head .more {
    float: right;
}
.userRate .body {
    padding-left: 15px;
}
.userRate .body .title img {
    width: 20px;
    height: 20px;
}
.userRate .body .title .username {
    display: inline-block;
    margin-left: 30px;
    vertical-align: top;
    color: #666;
}
.userRate .body .title .content {
    font-size: 13px;
    color: #666;
    line-height: 23px;
}
.userRate .body .date {
    color: #666;
    font-size: 12px;
  
}
.userRate .body .date .yea {
      margin-right: 15px;
}
.userRate .body .img img{
    width: 50px;
    height: 50px;
    float: left;
    margin-right: 5px;
    margin-top: 10px;
}
 .userRate .body .img::after {
  content: "";
  display: block;
  clear: both;
 } 
</style>