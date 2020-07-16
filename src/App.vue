<template>
  <div id="app">
   
    <router-view/>
    <van-tabbar route v-show="this.$route.meta.isshow">
      <van-tabbar-item replace to="/my" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/kc" icon="bar-chart-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/yk" icon="thumb-circle-o">约课记录</van-tabbar-item>
      <van-tabbar-item replace to="/lx" icon="records">练习</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import xinfeng from './utils/xinfeng'
export default {
  
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
  font-weight: normal;
}
body{
  background: #f0f2f5;
}
.van-hairline--top-bottom{
  height: 1rem;
} 
.van-tabbar{
  height: 1rem;
} 
.van-tabbar--fixed{
  height: 1rem;
}
</style>
