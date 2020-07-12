<template>
  <div class="shop">
    <router-view />
    <!-- 邮件留言 -->
    <div class="yj" @click="ly"><img src="../assets/img/lx_22.jpg" alt=""></div>
    <van-tabbar route>
      <van-tabbar-item replace to="/shop/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/shop/kc" icon="bar-chart-o">课程</van-tabbar-item>
      <van-tabbar-item replace to="/shop/yk" icon="thumb-circle-o">约课记录</van-tabbar-item>
      <van-tabbar-item replace to="/shop/lx" icon="records">练习</van-tabbar-item>
      <van-tabbar-item replace to="/shop/user" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  methods: {
    // 邮件留言
    ly() {
      this.$router.push("/leave");
    }
  }
};
</script>

<style lang="less">
.van-tabbar-item__icon {
  font-size: 40px;
}
.van-tabbar {
  height: 100px;
}
.van-tabbar-item {
  font-size: 23px;
}
.van-tabbar-item--active {
  color: rgb(235, 97, 0);
}
// 邮件留言
.yj {
  width: 100px;
  height: 70px;
  background: dodgerblue;
  position: fixed;
  top: 80%;
  left: 85%;
  font-size: 20px;
  color: #fff;
  line-height: 70px;
  border-radius: 20px;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
}
</style>