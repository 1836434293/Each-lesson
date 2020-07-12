<template>
  <div class="leave">
    <!-- 头部 -->
    <div class="header">
      <p>给我们留言</p>
      <van-icon name="arrow-down" color="#fff" style="margin-right:15px" @click="ff"/>
    </div>
    <h5>你好,很抱歉我们暂时无法为你提供服务，如有需要帮助,请留言，我们尽快联系并解决您的问题</h5>
    <div class="iphone">
      <p>手机:</p>
      <input type="text" placeholder="请输入" />
    </div>
    <div class="leave-nav">
      <p>留言内容:</p>
      <input type="textarea" placeholder="请输入" />
    </div>
    <van-button type="info" block>提交</van-button>
  </div>
</template>

<script>
// import "../assets/rem"
export default {
  data() {
    return {};
  },
  methods: {
    //   返回
    ff(){
        this.$router.go(-1)
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.leave {
  width: 100%;
  height: 100%;
  background: #eee;
}
.leave .header {
  width: 100%;
  height: 100px;
  background: blue;
  line-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.leave .header p {
  font-weight: normal;
  font-size: 33px;
  color: #fff;
}
h5 {
  font-weight: normal;
  font-size: 22px;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 20px;
}
.iphone {
  display: flex;
  flex-wrap: wrap;
}
.iphone p {
  font-size: 26px;
  margin-left: 20px;
}
.iphone input {
  width: 100%;
  height: 50px;
  font-weight: normal;
  font-size: 26px;
  border: 0;
}
.leave-nav {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}
.leave-nav p {
  font-size: 26px;
  margin-left: 20px;
}
.leave-nav input {
  width: 100%;
  height: 200px;
  font-weight: normal;
  font-size: 26px;
  border: 0;
}
.van-button {
  margin-top:40px;
}
</style>