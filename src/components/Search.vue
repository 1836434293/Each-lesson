<template>
    <div>
        <div class="search_header">
            <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
            <div>
                <input @keydown.13="enter" v-model="value" placeholder="请输入内容" />
            </div>
            <div @click="enter">
                搜索
            </div>
        </div>

        <div v-if="this.value.length != 0">
            <div class="search_list">
                <div v-if="this.searchList.length == 0">
                    <div class="search_list_aa">
                        <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                        <div>暂无搜索结果</div>
                    </div>
                </div>
                <div v-else>
                    <ul style="margin-bottom:2rem">
                        <li v-for="(v,i) of this.searchList" :key="i">
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
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div v-else>
            <div class="search_del">
                <div style="font-weight: 900;">历史搜索</div>
                <span style="color:gray" class="iconfont icon-shanchu"></span>
            </div>
            <div class="search_history">
                <div v-for="(item,index) in historyList" :key="index" class="search_history_item" @click="itemfn(item)">
                    {{item}}
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            historyList:[],
            searchList:[]
        }   
    },
    methods:{
        onCancel(){
            this.$router.go(-1)
            //点击取消unshift
        },
        enter(){

            var index = this.historyList.findIndex((ele)=>{
                return ele === this.value
            })
            if(index != -1){
                this.historyList.splice(index,1)
            }
            this.historyList.unshift(this.value)
            
            if(this.historyList.length>5){
                this.historyList.pop()
            }

            this.http.get(`/api/app/courseBasis?limit=10&page=1&course_type=0&keywords=${this.value}`).then((resp)=>{
                window.console.log(resp)
                this.searchList = resp.data.data.list
            })
        },
        back(){
            window.history.back()
        },
        itemfn(item){
            this.value = item
        }
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
    }
}
</script>

<style lang="less" scoped>
.search_header{
    width: 100%;
    height: 100px;
    border-bottom: 1px solid lightgray;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 0.3rem;
    color: gray;
}
.search_header img{
    height: 30%;
}
.search_header input{
    width: 6rem;
    height: 0.7rem;
    border-radius: 20px;
    background: lightgray;
    border: none;
    padding-left: 0.5rem;
}
.search_del{
    width: 90%;
    height: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 5%;
    font-size: 0.4rem;
    background: white;
}
.search_history{
    width: 100%;
    height: 14.4rem;
    background: white;
    display: flex;
    flex-wrap: wrap;
}
.search_history_item{
    height: 0.4rem;
    font-size: 0.3rem;
    padding:0.1rem 0.2rem;
    background: #F7F7F7;
    border-radius: 20px;
    margin: 0.2rem;
}
.search_list{
    width: 100%;
    height: 16.4rem;
}
.search_list_aa{
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.3rem;
    color: gray;
}
.search_list_aa img{
    height: 70%;
}
ul {
    width: 96%;
    margin: 0.4rem auto;
        li {
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
</style>