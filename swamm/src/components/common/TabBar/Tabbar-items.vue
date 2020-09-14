<template>
        <div class="tabbar-items" @click="itemClick">
            <div v-if="!isLink"><slot name="img"></slot></div>
            <div v-else><slot name="img_acvite"></slot></div>
            <div :class="{active:isLink}">
                <slot name="text"></slot>
            </div>
         
        </div>
</template>
<script>
export default {
    props:{
        path:{
            type:String,
            default:'/home'
        }
    },
    data(){
        return {
            // isLink:false
        }
    },
    computed:{
        isLink(){
            return this.$route.path.indexOf(this.path) !== -1;
        }
    },
    methods:{
        itemClick(){
            this.$router.push(this.path);
        }
    }
}
</script>
<style scoped>
    .tabbar-items {
        flex: 1;
        height: 49px;
        text-align: center;
        cursor: pointer;
        /* overflow: hidden; */
    }
    .tabbar-items img {
        width: 25px;
        height: 25px;
        margin-top:2px;
    }
    .tabbar-items p {
        font-size: 13px;
        margin-top:0px;
        font-weight: bold;
    }
    .active {
        color: #f40;;
    }
</style>