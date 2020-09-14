<template>
    <div id="tabbar">
        <slot></slot>
    </div>
</template>
<script>

export default {
}
</script>

<style scoped>
    #tabbar {
        display: flex;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ccc;
        box-shadow: 2px 0px 5px rgba(100, 100, 100, 1);
        z-index: 999;
    }
    
</style>