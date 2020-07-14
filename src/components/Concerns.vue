<template>
    <div>
        <div class="concerns_header_wrap">
            <div class="concerns_header">
                <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div>我的关注</div>
                <div></div>
            </div>
        </div>    
        <div v-if="this.list.length!=0">
            <div v-for="(item,index) in list" :key="index" class="concerns_item">
                <div class="concerns_item_img">
                    <img :src="item.avatar" />
                </div>
                <div class="concerns_item_name">
                    <div style="font-size:0.35rem;margin:0.4rem 0rem">
                        <span>{{item.teacher_name}}</span>
                        <span style="font-size:0.3rem;color:orange;margin-left:0.2rem">{{item.level_name}}</span>
                    </div>
                    <div style="font-size:0.3rem;color:gray">{{item.introduction | title}}</div>
                </div>
                <div class="concerns_item_button">
                    <button @click="qx(item,index)">取消关注</button>
                </div>
            </div>
            <div class="aa">没有更多了...</div>
        </div>
        <div v-else>
            <div class="img">
                <img src="https://wap.365msmk.com/img/empty.0d284c2e.png" />
                <div>
                    暂无关注
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
            let { data:res } = await this.http.get('/api/app/collect?page=1&limit=10&type=2')
            window.console.log(res)
            this.list = res.data.list
        },
        qx(item,index){
            window.console.log(item)
            this.http.put(`/api/app/collect/cancel/${item.collect_id}/2`).then((resp)=>{
                window.console.log(resp)
                if(resp.data.code == 200){
                    this.list.splice(index,1)
                }
            })
        }
    },
    filters:{
        title(value){
            if(value.length>17){
                return value.slice(0,17)+'...'
            }
        }
    }
}
</script>

<style scoped>
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
    height: 2rem;
    background: white;
    margin: 0.5rem auto;
    display: flex;
    font-size:0.4rem
}
.concerns_item_img{
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: red; */
}
.concerns_item_img img{
    width: 65%;
    height: 50%;
}
.concerns_item_name{
    width: 65%;
    height: 100%;
    /* background: yellow; */
}
.concerns_item_button{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: green; */
}
.concerns_item_button button{
    width: 90%;
    height: 30%;
    font-size: 0.3rem;
    border-radius: 20px;
    outline: none;
    border: none;
    background: #FDEFE5;
    color: #F39F64;
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
</style>