<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
        <!-- 这个地方不推荐使用router-link,因为要写得写四个，可以封装到子组件中去 -->
      <TabBarItem :path="'/home'">
        <!-- 之前的那种slot="",slot scope都已废弃，现在都是用v-slot:"" -->
        <template #img-active>
          <img src="~assets/images/tabbar/home_active.svg" />
        </template>
        <template #img-inactive>
          <img src="~assets/images/tabbar/home.svg" />
        </template>
        <template #item-font>
          首页
        </template>
      </TabBarItem>

      <TabBarItem :path="'/category'">
       <template #img-active>
          <img src="~assets/images/tabbar/category_active.svg" />
        </template>
        <template #img-inactive>
          <img src="~assets/images/tabbar/category.svg" />
        </template>
        <template #item-font>
          分类
        </template>
      </TabBarItem>

      <TabBarItem :path="'/shopcart'">
         <template #img-active>
          <img src="~assets/images/tabbar/shopcart_active.svg" />
        </template>
        <template #img-inactive>
          <img src="~assets/images/tabbar/shopcart.svg" />
        </template>
        <template #item-font>
          购物车
        </template>
      </TabBarItem>

      <TabBarItem :path="'/profile'">
        <template #img-active>
          <img src="~assets/images/tabbar/profile_active.svg" />
        </template>
        <template #img-inactive>
          <img src="~assets/images/tabbar/profile.svg" />
        </template>
        <template #item-font>
          个人
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
  import TabBar from "./components/common/TabBar"
  import TabBarItem from "./components/context/TabBar-Main"

  export default {
    name: "app",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  /* 引入css,该css会改变字体大小，所以h1-h2都变成了默认效果 */
  @import "./assets/css/base.css";

  img {
    height: 25px;
    width: 25px;
    vertical-align: middle;
  }

</style>
