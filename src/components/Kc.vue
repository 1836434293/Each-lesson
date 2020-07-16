<template>
  <div>
    <div class="kc_header_wrap">
      <div class="kc_header">
        <div></div>
        <div>特色课</div>
        <img @click="search"
          src="data:image/png;base64,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"
        />
      </div>
    </div>

    <div class="kc_vant">
      <van-dropdown-menu style="width:100%;height:1rem">
        <van-dropdown-item title="分类" ref="item">

            <div class="kc_item_child">
              <div v-for="(v,i) in this.list" :key="i" :class="['kc_item_child_v',twoIndex == v.id ? 'sel' : '']" @click="twofn(v)">{{v.name}}</div>
            </div>

            <!-- <div class="kc_item_name">班级</div>
            <div class="kc_item_child">
              <div v-for="(v,i) in this.onelist" :key="i" :class="['kc_item_child_v',oneIndex == v.id ? 'sel' : '']" @click="onefn(v)">{{v.name}}</div>
            </div>
            <div class="kc_item_name">学科</div>
            <div class="kc_item_child">
              <div v-for="(v,i) in this.twolist" :key="i" :class="['kc_item_child_v',twoIndex == v.id ? 'sel' : '']" @click="twofn(v)">{{v.name}}</div>
            </div> -->
          <div class="kc_item_child_button">
            <button style="border:1px solid lightgray" @click="reset">重置</button>
            <button style="background:#EB6100;color:white" @click="ok">确定</button>
          </div>
        </van-dropdown-item>

        <van-dropdown-item title="排序" ref="item">
          <div v-for="(item,index) in sortList" :key="index" class="kc_sort">{{item}}</div>
        </van-dropdown-item>

        <van-dropdown-item title="筛选" ref="item">
          <div class="kc_item_child" style="height:5rem">
            <div
              v-for="(v,i) in this.course_types"
              :key="i"
              class="kc_item_child_v"
              style="margin:0.2rem 0.2rem"
            >{{v.value}}</div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div class="ul" style="margin-bottom:2rem">
      <!-- <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        :immediate-check="isScroll"
      > -->
        <div class="li" v-for="(v,i) of this.item" :key="i" @click="courses(v)">
          <h4>
            <span>{{ v.title }}</span>
          </h4>
          <div style="font-size:0.3rem;color:gray">
            {{v.start_play_date | time}}
            <span style="margin:0rem 0.1rem">~</span>
            {{v.end_play_date | time}}
            <span style="margin:0rem 0.1rem">|</span>
            共{{v.total_periods}}课时
          </div>
          <div class="bo" v-for="(item,index) in v.teachers_list" :key="index">
            <h3>
              <img :src="item.teacher_avatar" alt />
              <p>{{ item.teacher_name }}</p>
            </h3>
          </div>
          <h2>
            <p>{{ v.sales_num }}人报名</p>
            <b id="pr">{{ v.price | price}}</b>
          </h2>
        </div>
      <!-- </van-list> -->
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg:{
        page:1,
        limit:10,
        course_type:'',
        classify_id:'',
        order_by:'',
        attr_val_id:'',
        is_vip:0
      },
      // onelist: [],
      // twolist:[],  //这两个是正式接口的分类的数据
      list:[],       //这是测试接口的分类的数据
      oneIndex:-1,
      twoIndex:-1,
      sortList: ["综合排序", "最新", "最热", "价格从低到高", "价格从高到低"],
      course_types: [
        { type: 0, value: "全部" },
        { type: 2, value: "大班课" },
        { type: 3, value: "小班课" },
        { type: 4, value: "公开课" },
        { type: 5, value: "点播课" },
        { type: 7, value: "面授课" },
        { type: 8, value: "音频课" },
        { type: 9, value: "系统课" },
        { type: 10, value: "图文课" },
        { type: 11, value: "会员课" }
      ],
      item: [],
      loading: false,
      finished: false,
      isScroll:false
    };
  },
  mounted() {
    this.http.get("/api/app/courseClassify").then(resp => {
      window.console.log(resp);
      // this.onelist = resp.data.data.attrclassify[0].child;
      // this.twolist = resp.data.data.attrclassify[1].child;   //这两个是正式接口的分类的数据

      this.list = resp.data.data.appCourseType
      //这是测试接口的分类的数据
    });

    this.kc()

    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let h1 = document.documentElement.clientHeight;
      // console.log(scrollTop + h1, scrollHeight);
      if (scrollTop + h1 >= scrollHeight) {
        this.msg.page++;
        window.console.log(this.msg.page)
        this.kc()
      }
    };
  },
  filters:{
    time(value){
      let shijian = new Date(value).toLocaleString()
      return shijian
    },
    price(value){
      if(value == 0){
        return "免费"
      }else{
        return `￥${(value/100).toFixed(2)}`
      }
    }
  },
  methods:{
    async kc(){
      let temp = this.item
      let { data:res } = await this.http.get("/api/app/courseBasis",{params:this.msg})
      if(this.msg.page > 1){
        this.item = temp.concat(res.data.list)
      }else{
        this.item = res.data.list
      }
      
      if(res.data.list.length == 0){
        this.finished = true// 加载状态结束
        this.loading = false;
      }
    },
    search(){
      this.$router.push('/Search')
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      // setTimeout(() => {
      //   window.console.log(123)
      //   this.msg.page++
      //   this.kc()
      // }, 1000);
    },
    twofn(v){
      this.twoIndex = v.id
    },
    onefn(v){
      this.oneIndex = v.id
    },
    reset(){
      this.oneIndex = -1
      this.twoIndex = -1
      this.msg.attr_val_id = ''
      this.msg.page = 1
      this.kc()
    },
    ok(){
      var temp = []
      if(this.oneIndex != -1){
        temp.push(this.oneIndex)
      }
      if(this.twoIndex != -1){
        temp.push(this.twoIndex)
      }
      var templist =temp.join(',')
      this.msg.attr_val_id = templist
      this.msg.page = 1
      this.kc()
      window.console.log(templist)
    },
    courses(v){
      window.console.log(v)
      this.$router.push({
        path:'/courses',
        query:{
          id:v.id,
          course_type:v.course_type
        }
      })
    }
  }
};
</script>

<style   lang="less">
.kc_header_wrap {
  width: 100%;
  height: 100px;
}
.kc_header {
  position: fixed;
  top: 0rem;
  width: 90%;
  height: 99px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.5rem;
  padding: 0rem 5%;
  background: white;
  z-index: 999;
}
.kc_header img {
  height: 40%;
}
.kc_vant {
  width: 100%;
  height: 1rem;
}
.kc_item_name {
  padding: 0.3rem;
  font-size: 0.3rem;
}
.kc_item_child {
  width: 94%;
  height: 3rem;
  padding: 0rem 3%;
  display: flex;
  flex-wrap: wrap;
  background: white;
}
.kc_item_child_v {
  width: 20%;
  height: 1rem;
  background: #f5f5f5;
  font-size: 0.3rem;
  margin-right: 0.45rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}
.kc_item_child_button {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.kc_item_child_button button {
  width: 45%;
  height: 0.8rem;
  font-size: 0.4rem;
  border: none;
  outline: none;
  background: white;
  border-radius: 10px;
}
.kc_sort {
  width: 100%;
  height: 1.5rem;
  font-size: 0.35rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgray;
}
.ul {
    width: 96%;
    margin: 0.4rem auto;
        .li {
          width: 100%;
          height: 407px;
          background: #fff;
          border-radius: 10px;
          margin-bottom: 30px;
          padding: 0px 29px 0 29px;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          h4 {
            font-size: 33px;
            display: flex;
            justify-content: space-between;
          }
          .bo {
            display: flex;
            flex-wrap: wrap;
            h3 {
              display: flex;
              height: 55px;
              align-items: center;
              margin-bottom: 15px;
              img {
                width: 55px;
                height: 55px;
                border-radius: 50%;
              }
              p {
                font-size: 20px;
                color: #666;
                margin: 0 20px;
              }
            }
          }
          h2 {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #eee;
            padding-top: 26px;
            p {
              font-size: 23px;
              color: #666;
            }
            b {
              font-size: 33px;
              color: #389d1d;
            }
          }
        }
      }
      .sel{
        background: orange;
        color: white;
      }
</style>