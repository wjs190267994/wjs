<template>
   <TabBar>
        <TabbarItem path='/home'>
        <img src="@/assets/home.jpg" alt="" slot="img">
        <img src="@/assets/home_active.jpg" slot="img_acvite">
        <p slot="text">首页</p>
       </TabbarItem>
       <TabbarItem  path='/cart'>
           <img src="@/assets/cart.jpg" alt="" slot="img">
            <img src="@/assets/cart_active.jpg" slot="img_acvite">
            <p slot="text">分类</p>
       </TabbarItem>
       <TabbarItem  path='/category'>
          <img src="@/assets/category.jpg" alt="" slot="img">
        <img src="@/assets/category_active.jpg" slot="img_acvite">
        <p slot="text">购物车</p>
       </TabbarItem>
       <TabbarItem  path='/profile'>
          <img src="@/assets/profile.jpg" alt="" slot="img">
        <img src="@/assets/profile_active.jpg" slot="img_acvite">
        <p slot="text">我的</p>
       </TabbarItem>
   </TabBar>
</template>

<script>
import TabBar from '@/components/common/TabBar/TabBar'
import TabbarItem from '@/components/common/TabBar/Tabbar-items.vue'
export default {
    components:{
        TabBar,
        TabbarItem
    }
}
</script>

<style>

</style>