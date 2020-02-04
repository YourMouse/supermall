<template>
    <div class="tabbar-item" @click="jump">
        <div v-if="status" class="img-active">
            <slot name="img-active"></slot>
        </div>
        <div v-else class="img-inactive">
            <slot name="img-inactive"></slot>
        </div>
        <div :style="style">
            <slot name="item-font"></slot>
        </div>
    </div>    
</template>

<script>
export default {
    name: "tabbar-main",
    props: {
        path: {
            type: String
        }
    },
    data() {
        return{
            style: {
                color: ''
            }
        }
    },
    methods: {
        jump() {            
            this.$router.push(this.path)
        }
    },
    computed: {
        //这个地方不可以用箭头函数，因为要用到this
        status() {
            //别使用this.$router,不可靠
            let result = this.path === this.$route.path;
            this.style.color = result ? '#ff5777' : ''
           return result;
        }
    }
}
</script>

<style scoped>
    .tabbar-item {
        flex: 1;
        text-align: center;
        padding-top: 4px;
        font-size: 14px;
        transition: .3s;
    }

    .tabbar-item:hover {
        background-color: #ccc;
    }
</style>