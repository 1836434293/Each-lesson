<template>
    <div>
        <div class="concerns_header_wrap">
            <div class="concerns_header">
                <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div>我的收藏</div>
                <div></div>
            </div>
        </div>    
        <div v-if="this.list.length!=0">
            <div class="ul">
                <div class="li" v-for="(v,i) of this.list" :key="i">
                <h4>
                    <span>{{ v.title }}</span>
                    <span class="iconfont icon-xingxing" style="color:orange" @click="qx(v,i)"></span>
                </h4>
                <div style="font-size:0.3rem;color:gray">
                    共{{v.section_num}}课时
                </div>
                <div class="bo">
                    <h3>
                        <img :src="v.teachersAvatar" alt />
                        <p>{{ v.teachers }}</p>
                    </h3>
                </div>
                <h2>
                    <p>{{ v.sales_num }}人报名</p>
                    <b id="pr">{{ v.price | price}}</b>
                </h2>
                </div>
            </div>
            <div class="aa">没有更多了...</div>
        </div>
        <div v-else>
            <div class="img">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                <div>
                    暂无收藏
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted(){
        this.concerns()
    },
    methods:{
        back(){
            window.history.back()
        },
        async concerns(){
            let { data:res } = await this.http.get('/api/app/collect?page=1&limit=10&type=1')
            window.console.log(res)
            this.list = res.data.list
        },
        qx(item,index){
            window.console.log(item)
            this.http.put(`/api/app/collect/cancel/${item.collect_id}/1`).then((resp)=>{
                window.console.log(resp)
                if(resp.data.code == 200){
                    this.list.splice(index,1)
                }
            })
        }
    },
    filters:{
        price(value){
            if(value == 0){
                return '免费'
            }else{
                return `￥${(value/100).toFixed(2)}`
            }
        }
    }
}
</script>

<style  lang="less">
.concerns_header_wrap{
    width: 100%;
    height: 99px;
}
.concerns_header{
    position: fixed;
    top: 0rem;
    width: 95%;
    height: 100px;
    padding-left: 5%;
    border-bottom: 1px solid lightgray;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.5rem;
}
.concerns_header img{
    height: 30%;
}
.concerns_item{
    width: 96%;
    height: 4.5rem;
    background: white;
    margin: 0.5rem auto;
    display: flex;
    font-size:0.4rem
}

.img{
    width:100% ;
    height: 6rem;
    font-size: 0.4rem;
    color: gray;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
}
.img img{
    height: 70%;
}
.aa{
    font-size:0.3rem;
    color:gray;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>