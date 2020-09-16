<template>
   <div class="wrapp" ref="scroll">
       <div class="content">
           <slot></slot>
       </div>
   </div>
</template>

<script>
//
import BSscroll from 'better-scroll' 
export default {
    props:{
        probeType:{
            type:Number,
            default:1
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            scroll:null
        }
    },
    mounted(){
        this.scroll = new BSscroll(this.$refs.scroll,{
            click: true,
            probeType:1,
            pullUpLoad:this.pullUpLoad
        })
        //监听滚动的位置
        this.scroll.on('scroll',(op) => {
            // console.log(op)
            this.$emit('scrollDown',op)
        })
        //监听上啦事件
        this.scroll.on('pullingUp',()=>{
            console.log('上啦')
            this.$emit('moreLoad')
        })
    },
    methods:{
        backup(){
             this.scroll&this.scroll.scrollTo(0,0,500);
        },
        finshPullUp(){
             this.scroll&this.scroll.finishPullUp();
        },
        refresh(){
            this.scroll& this.scroll.refresh();
            console.log('detail');
        },
        scrollTo(x,y,esy){
             this.scroll&this.scroll.scrollTo(x,y,esy);
        }
    }
}
</script>

<style>

</style>