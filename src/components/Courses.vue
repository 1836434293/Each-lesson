<template>
    <div>
        123
    </div>
</template>

<script>
export default {
    mounted(){
        this.getCourses()
    },
    methods:{
        async getCourses(){
            let { data } = await this.http.get(`/api/app/courseInfo/basis_id=${this.$route.query.id}`)
            window.console.log(data)
        }
    }
}
</script>

<style scoped>

</style>