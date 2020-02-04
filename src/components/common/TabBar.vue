<template>
    <!-- 为什么不在此层封装tabbar-main：没有更好的扩展性，最好时在app.vue中，可以任意添加 -->
    <div id="tabbar">
        <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "tabbar",
        components: {

        }
    }
</script>

<style scoped>
    #tabbar {
        display: flex;
        position: fixed;
        left: 0;
        bottom: 0;
        box-sizing: border-box; 
        width: 100%;
        height: 49px;
        background-color: #f6f6f6;
        box-shadow: 0 -1px 2px rgba(0, 0, 0, .3);
    }
</style>