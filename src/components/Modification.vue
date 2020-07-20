<template>
    <div> 
        <div v-if="this.$route.query.name == '名称'">
            <div class="info_header">
                <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div>修改个人信息</div>
                <div @click="Save">保存</div>
            </div>   
            <div class="modification_contatiner">
                <input v-model="mobile" />
            </div>
        </div>
        
        <div v-else-if="this.$route.query.name == '性别'">
            <div class="info_header">
                <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div>修改个人信息</div>
                <div @click="sex">保存</div>
            </div>   
            <van-radio-group v-model="radio">
                <van-cell-group>
                    <van-cell title="男" clickable @click="radio = '0'">
                        <template #right-icon>
                            <van-radio name="0" />
                        </template>
                    </van-cell>
                    <van-cell title="女" clickable @click="radio = '1'">
                        <template #right-icon>
                            <van-radio name="1" />
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>
        </div>

        <div v-else>
            <div class="info_header">
                <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div>修改个人信息</div>
                <div @click="xueke">保存</div>
            </div>
            <!-- <div v-for="(item,index) in list" :key="index" class="info_list_item"> -->
                <div>
                    <van-checkbox-group v-model="result">
                        <van-cell-group>
                            <van-cell
                            v-for="(item, index) in list"
                            clickable
                            :key="index"
                            :title="`${item.attr_name}`"
                            @click="toggle(index)"
                            >
                            <template #right-icon>
                                <van-checkbox :name="item.attr_val_id" ref="checkboxes" />
                            </template>
                            </van-cell>
                        </van-cell-group>
                    </van-checkbox-group>
                </div>
            <!-- </div>    -->
        </div>
        
    </div>    
</template>

<script>
export default {
    data(){
        return{
            mobile:'',
            radio:'0',
            result: [],
            list:[
                {
                attr_id:2,
                attr_val_id:7,
                attr_name:'语文'
                },{
                attr_id:2,
                attr_val_id:8,
                attr_name:'数学'
                },{
                attr_id:2,
                attr_val_id:9,
                attr_name:'英语'
                },{
                attr_id:2,
                attr_val_id:12,
                attr_name:'物理'
                },{
                attr_id:2,
                attr_val_id:13,
                attr_name:'化学'
                },{
                attr_id:2,
                attr_val_id:24,
                attr_name:'生物'
                },{
                attr_id:2,
                attr_val_id:25,
                attr_name:'政治'
                },{
                attr_id:2,
                attr_val_id:26,
                attr_name:'信息技术'
                }
            ]
        }
    },
    methods:{
        back(){
            window.history.back()
        },
        async Save(){
            let { data:res } = await this.http.put('/api/app/user',{nickname: this.mobile})
            window.console.log(res)
            if(res.code == 200){
                this.$router.push('/info')
            }
        },
        async sex(){
            let { data:res } = await this.http.put('/api/app/user',{sex: this.radio})
            window.console.log(res)
            if(res.code == 200){
                this.$router.push('/info')
            }
        },
        toggle(index) {
            this.$refs.checkboxes[index].toggle();
            window.console.log(this.result)
        },
        async xueke(){
            let { data:res } = await this.http.put('/api/app/user',{user_attr:this.result})
            window.console.log(res)
        },
    },
    mounted(){
        this.mobile = this.$route.query.nickname
    }
}
</script>

<style scoped>
.info_header{
    width: 90%;
    height: 100px;
    padding: 0rem 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    font-size: 0.4rem;
}
.info_header img{
    height: 30%;
}
.modification_contatiner{
    margin-top: 0.3rem;
    width: 90%;
    padding: 0rem 5%;
    height: 1.5rem;
    background: white;
    font-size: 0.4rem;
}
.modification_contatiner input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
}
.van-cell{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.4rem;
}
.info_list_item{
    width: 90%;
    padding: 0rem 5%;
    height: 1.3rem;
    background: white;
    margin-top: 0.3rem;
    font-size: 0.4rem;
    display: flex;
    align-items: center;
}
</style>