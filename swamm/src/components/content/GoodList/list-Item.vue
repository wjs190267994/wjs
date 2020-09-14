<template>
  <div class="list-item" @click="itemclick">
     <img :src="item.show.img" alt="" @load="imgload">
     <div class="goodinfo">
         <p>{{item.title}}</p>
         <span>{{item.price}}</span>
         <span>{{item.cfav}}</span>
     </div>
  </div>
</template>

<script>
export default {
    props:{
        item:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    methods:{
        imgload(){
           this.$bus.$emit('itemimgLoad');
        },
        itemclick(){
            this.$router.push({
                path:"/detail",
                query:{
                    iid:this.item.iid
                }
            });
        }
    }
}
</script>

<style scoped>
    .list-item {
        width: 48%;
        font-size: 12px;
        margin-top:15px;
    }
    .list-item img {
        width: 100%;
        height: 230px;
        border-radius: 5px;
    }
    .goodinfo p {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .goodinfo span {
        display: inline-block;
        width: 50%;
        text-align: center;
        background-color: chartreuse;
    }
</style>