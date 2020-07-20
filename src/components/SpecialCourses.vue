<template>
    <div>
        <div class="SpecialCourses_header_wrap">
            <div class="SpecialCourses_header">
                <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
                <div>我的学习</div>
                <div class="iconfont icon-rili"></div>
            </div>
        </div>
        <van-tabs @click="classfn">
            <van-tab v-for="(v,i) in typeNum" :key="i" :title="`${v.name}(${v.num})`">
                <div v-if="courses.length== 0">
                    <div class="SpecialCourses_img">
                        <img src="https://wap.365msmk.com//img/empty.0d284c2e.png" />
                        <div style="font-size:0.4rem;color:gray;margin:0.4rem; 0rem">还没有课程，快去选择课程学习吧</div>
                        <div class="SpecialCourses_img_div">选择课程</div>
                    </div>
                </div>
                <div v-else>
                    <div v-for="(item,index) in courses" :key="index" class="SpecialCourses_courses_item">
                        <div style="font-size:0.55rem;margin:0.4rem 0rem">
                            {{item.title}}
                        </div>
                        <div style="font-size:0.3rem;color:gray">
                            {{item.start_play_date | time}} ~ {{item.end_play_date | time}}
                            <span style="margin:0rem 0.3rem">|</span>
                            共{{item.section_num}}课时
                        </div>
                        <div style="font-size:0.3rem;color:gray;margin-top:1.5rem" @click="del(item,index)">移除</div>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            courses:[],       //  课程列表数据
            typeNum:[],        //  分类数据
        }
    },
    mounted(){
        this.specialCourses(2)
    },
    methods:{
        async specialCourses(type){
            let { data:res } = await this.http.get(`/api/app/myStudy/${type}`)
            window.console.log(res)
            this.courses = res.data.courseList
            this.typeNum = res.data.typeNum
        },
        back(){
            window.history.back()
        },
        del(item,index){
            this.http.delete(`/api/app/myStudy/course/${item.course_id}`).then((resp)=>{
                window.console.log(resp)
                if(resp.data.code == 200){
                    this.courses.splice(index,1)
                    alert('删除成功')
                }
            })
        },
        classfn(index){
            let temp = this.typeNum[index].type
            this.specialCourses(temp)
        }
    },
    filters:{
        time(value){
            var temp = new Date(value).toLocaleString()
            return temp
        }
    }
}
</script>

<style scoped>
.SpecialCourses_header_wrap{
    width: 100%;
    height: 100px; 
}
.SpecialCourses_header{
    width: 90%;
    height: 99px;
    border-bottom: 1px solid lightgray; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.5rem;
    padding: 0rem 5%;
    background: white;
}
.SpecialCourses_header img{
    height: 30%;
}
.SpecialCourses_typeNum{
    width: 100%;
    height: 1rem;
    border-bottom: 1px solid lightgray;
    overflow-x: scroll;
    font-size: 0.4rem;
    color: gray;
    background: white;
}
.SpecialCourses_typeNum_item{
    width: 150%;
    height: 100%;
    display: flex;
}
.van-tabs--line{
    width: 100%;
}
.SpecialCourses_img{
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.SpecialCourses_img img{
    height: 40%;
}
.SpecialCourses_img_div{
    width: 25%;
    height: 0.8rem;
    background:#EB6100 ;
    font-size: 0.4rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: white;
    justify-content: center;
}
.SpecialCourses_courses_item{
    width: 90%;
    height: 4rem;
    padding: 0rem 5%;
    background: white;
    border-radius: 20px;
    margin-top: 0.3rem;
    overflow: hidden;
}
</style>