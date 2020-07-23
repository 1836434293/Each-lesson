<template>
    <div>
        <div class="info_header">
            <img @click="back" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAwCAYAAAAGlsrkAAADgUlEQVRYR8XY+6ulUxzH8dcYYsglGteI/OASpsYPrkXKdRq5TogIM5Mf5D8RPx23URTygzCuTcYouSU1Ipo0buMSEWJCGPpMa9eeZ9az97P3efbxrdM5nf3s9V7ftb6Xz/dZ5H+yRQvEPQCnIb8/wdaFAAe2GidjL/yMuVmC98BRuAtHNk723VmB98T5uAIHV65z8yzA8fQ6XIAlaDL+nMVRH4JbcHpL0G7H09jQp8cnFU+PR7xu2md4Bu9hRx/grJH7vAYHVY72X7yPx/D1YDfzBe+NFViJ/N20vwr0Afw2/OF8wEfgSpxR8rMJ/REv4hVkA7vYtOATcROOrRxtACkS9+ND/FMLtEnBixHoHS35Gcg23IPvR5XjScAH4kJchn1a7vNVrMdP43pAV/C+uL3kZ+pt0/7G43gNf4yD5vNx4Hx+GO7EcZUFkyo/4OESvV2YO58ZBc59noOrcGjLigmeJ/EpsonO1gbO/5MqlyLH3HwuQbSxlL9fOtOGHqyBU31uxNktC/6O58vPbvnZdRNNcOrs9TgBOeqmfVXq7Ttt+TkN+CzcUPKzuaHc38d4FF92XXxcHqdpX4yrW/IzqfIR7isVqQ/uzqBJUYintSKfQrABLyMNvDcL+F4srayYbpKushnxulcL+G4cXlk10ZvCkECaCfhc3Iz9KvBIlU14Dr/26XI8TtpEmK1qgcfbLXhwXMeZZGPDaROlv7ZFvmTNrXiopNNE5bG2oWa+RoBHmi5D0qxpaQhpe6/PN8prJTN9N40haVaztL2kWBRjpxbYxePhZy4pRaXWJPLcG6WSTRV0o9pitPFyXIujW7xPO3yilNMd0wZX24lECNyKUyoPJMiiJgN/q0/wYK2U09tGSNls4Cm80DXoxkmfYSdy15kYLi8DdtPB5PvbZQPfjfN+EnDWSrFJr47wq5XZKJP07Gjqz0fBJwUP1orwy5R/TMuAllI7VwRgL4J+2IkM3Dn281paarRYxpeMMWk4u9i0Hg8H3UVl8s8Q3rRosg+wriny5wsegCKb0uH2bxlTI5vSYr8ZfKEvcNbLABclkwG9JhS/xbN4M/29T3DgeRWRJpNBoGYJukjjl/oGD2ARjhnYU3hqw8C6WYFz1GeWJlPL922zAsfzwQu2NcigMGxfzBI8AEXLBR6FkxE3Of3IQoCzgcBPLcGX105bFgq8W4T/B/tloBIPNqWNAAAAAElFTkSuQmCC" />
            <div>个人信息</div>
            <div></div>
        </div>
        
        <van-cell is-link title="头像" cancel-text="取消" close-on-click-action @click="ImageHead('Image')">
            <img class="ii" :src="this.obj.avatar" />
            <input type="file" accept="image/*" style="display:none" ref="ImageHead" @change="ImgChange" />
        </van-cell>
        <van-cell is-link title="昵称" @click="Modification">
            {{this.obj.nickname}}
        </van-cell>
        <van-cell is-link title="手机号">
            {{this.obj.mobile}}
        </van-cell>
        <van-cell is-link title="性别" @click="sex">
            {{this.obj.sex | Sex}}
        </van-cell>
        <van-cell is-link title="出生日期" @click="rq = true">
            {{this.obj.birthday}}
        </van-cell>
        <van-action-sheet v-model="rq">
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="rqQr"
                @cancel="rqQx"
            />
        </van-action-sheet>

        <van-cell is-link title="所在城市" @click="city('city')">
            {{this.obj.province_name}}   {{this.obj.city_name}} {{this.obj.district_name}}  
        </van-cell>


        <!-- 弹层 -->
        <van-popup v-model="cityshow" position="bottom" :style="{ height: '30%' }">
            <div v-if="this.tag == 'Image'">
                <button @click="Img">上传头像</button>
            </div>
            <div v-else-if="this.tag == 'city'">
                <van-area title="标题" @change="citychange" :area-list="areaList" @confirm="cityconfirm" :value="this.obj.district_id+''" />
            </div>
        </van-popup>



        <van-cell is-link title="学科" @click="Subject" />

        <van-cell is-link title="年级"  @click="nj = true">
            请选择
        </van-cell>
        <van-action-sheet v-model="nj">
            <van-picker
                show-toolbar
                :columns="columns"
                @confirm="onConfirm"
                @cancel="onCancel"
            />
        </van-action-sheet>
    </div>
</template>

<script>
export default {
    mounted(){
        this.ajaxInfo()
        this.SubjectMatter()
    },
    data(){
        return{
            tag:'',
            actions: [{ name: '拍照' }, { name: '从本地相册选择' }],
            obj:{},
            rq:false,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(),
            columns: ['小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级','小学六年级','初一','初二','初三','高一','高二','高三'],
            nj:false,
            cityshow:false,
            areaList:{
                province_list: {
                    
                },
                city_list: {
                    
                },
                county_list: {
     
                }         
            }
        }
    },
    methods:{
        ImgChange(e){
            this.cityshow = false
            window.console.log(e.target.files[0])
            var file = e.target.files[0]
            let fromdata = new FormData()
            fromdata.append('file',file)
            this.http.post('/api/app/public/img',fromdata).then((resp)=>{
                window.console.log(resp)
                if(resp.data.code == 200){
                    return this.http.put('/api/app/user',{avatar:resp.data.data.path})
                }
            }).then((resp)=>{
                window.console.log(resp)
                if(resp.data.code == 200){
                    this.ajaxInfo() // 刷新页面   重新对接 接口 获取最新数据
                }else{
                    alert('修改头像错误')
                }
            })
        },
        Img(){
            this.$refs.ImageHead.click()
        },
        ImageHead(Image){
            this.tag = Image;
            this.cityshow = true 
        },
        async ajaxInfo(){
            let { data:res } = await this.http.get('/api/app/userInfo')
            window.console.log(res)
            this.obj = res.data
        },
        async SubjectMatter(){
            let { data:res } = await this.http.get('/api/app/module/attribute/1')
            window.console.log(res)
        },
        Modification(){
            this.$router.push({
                path:'/modification',
                query:{
                    name:'名称',
                    nickname:this.obj.nickname
                }
            })
        },
        sex(){
            this.$router.push({
                path:'/modification',
                query:{
                    name:'性别'
                }
            })
        },
        Subject(){
            this.$router.push({
                path:'/modification',
                query:{
                    name:'学科'
                }
            })
        },
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            console.log(file);
        },
        back(){
            window.history.back()
        },
        rqQr(){
            var temp = new Date(this.currentDate).toLocaleDateString()
            this.http.put('/api/app/user',{birthday: temp}).then((resp)=>{
                window.console.log(resp)
                if(resp.data.code == 200){
                    window.location.reload();
                }else{
                    alert(resp.data.msg)
                }
            })
            
        },
        rqQx(){
            this.rq = false
        },
        onConfirm(){

        },
        onCancel(){
            this.nj =false
        },
        city(city){
            // 所在城市  事件
            this.cityshow = true

            this.tag = city

            // 获取省的数据并同步data
            this.http.get('/api/app/sonArea/0').then((resp)=>{
                // window.console.log(resp.data.data)
                let obj = {}
                resp.data.data.forEach((ele)=>{
                    obj[ele.id] = ele.area_name
                })
                this.areaList.province_list = obj
                window.console.log(this.areaList.province_list)
                

                // 获取市 的数据
                this.http.get(`/api/app/sonArea/${this.obj.province_id ? this.obj.province_id : resp.data.data[0].id}`).then((re)=>{
                // window.console.log(resp.data.data)
                    let data = {}
                    re.data.data.forEach((ele)=>{
                        data[ele.id] = ele.area_name
                    })
                    this.areaList.city_list = data
                    window.console.log(this.areaList.city_list)


                    // 获取区的数据
                    this.http.get(`/api/app/sonArea/${this.obj.city_id ? this.obj.city_id : re.data.data[0].id}`).then((el)=>{
                    // window.console.log(resp.data.data)
                        let temp = {}
                        el.data.data.forEach((ele)=>{
                            temp[ele.id] = ele.area_name
                        })
                        this.areaList.county_list = temp
                        window.console.log(this.areaList.county_list)
                    })


                })


            })


            
            
        },
        citychange(a,b,c){
            // window.console.log(a)
            // window.console.log(b)
            // window.console.log(c)
            if(c == 0){
                //  省选项发生变化 让  市  跟着变化
                this.http.get(`/api/app/sonArea/${b[0].code}`).then((resp)=>{
                    console.log(resp)
                    let data = {}
                    resp.data.data.forEach((ele)=>{
                        data[ele.id] = ele.area_name
                    })
                    this.areaList.city_list = data

                    //  省 选项发生变化  让他有默认的 区

                    return this.http.get(`/api/app/sonArea/${resp.data.data[0].id}`)
                }).then((resp)=>{
                    console.log(resp)
                    let temp = {}
                    resp.data.data.forEach((ele)=>{
                        temp[ele.id] = ele.area_name
                    })
                    this.areaList.county_list = temp
                })
            }else if(c == 1){
                //  市选项发生变化  区 跟着变化
                this.http.get(`/api/app/sonArea/${b[1].code}`).then((resp)=>{
                    let temp = {}
                    resp.data.data.forEach((ele)=>{
                        temp[ele.id] = ele.area_name
                    })
                    this.areaList.county_list = temp
                })
            }
        },
        cityconfirm(value){
            // 确定事件
            window.console.log(value)
            this.http.put('/api/app/user',{
                city_id: value[1].code,
                district_id: value[2].code,
                province_id: value[0].code,
            }).then((resp)=>{
                if(resp.data.code == 200){
                    window.location.reload();
                }
            })
        }
    },
    filters:{
        Sex(value){
            if(value == 0){
                return '男'
            }else{
                return '女'
            }
        }
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
.van-cell--clickable{
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    font-size: 0.39rem;
}
.van-cell__value img{
    width: 15%;
    border-radius: 50%;
}
.van-action-sheet__item,.van-action-sheet__cancel{
    height: 1rem;
    font-size: 0.4rem;
}
</style>