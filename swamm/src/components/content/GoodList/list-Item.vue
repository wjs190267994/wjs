<template>
  <div class="list-item" @click="itemclick">
     <img :src="showImg" alt="" @load="imgload">
     <div class="goodinfo">
         <p>{{itemObj.title}}</p>
         <span>{{itemObj.price}}</span>
         <span>{{itemObj.cfav}}</span>
     </div>
  </div>
</template>

<script>
export default {
    props:{
        itemObj:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed: {
        showImg(){
            return this.itemObj.image || this.itemObj.show.img
        }
    },
    methods:{
        imgload(){
            if(this.$route.path.indexOf('/Home')) {
                 this.$bus.$emit('homeitemimgLoad');
            }else if(this.$route.path.indexOf('/detail')) {
                this.$bus.$emit('dateilitemimgLoad');
            }
        },
        itemclick(){
            this.$router.push({
                path:"/detail",
                query:{
                    iid:this.itemObj.iid
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