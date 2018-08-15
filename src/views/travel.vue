<template>
    <div>
        <header>
            <div class="container"></div>
        </header>
        <div class='box1'><img src="../assets/images/1526012999.png"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data:'welcome to my app',
            }
        },
        created() {
            this.custom();
        },
        mounted() {
            this.$http.get('/static/json/data.json',{}).then((res)=>{
                console.log(res);
            }).catch((res)=> { });
            gege.$collisionMotion('.box1'); 
            // console.log(gage.getUrlParam());
        },
        methods: {
            custom:function(){
                
            },
        },
        computed: {
    
        },
        components: {
           
        }
    
    }
</script>

<style lang="less" scoped>
    @import '../assets/css/global.less';
    header{
        width: 100px;
        height: 100px;
    }
    .box1{
        width: 100px;
        height: 100px;
        display: inline-block;
        border-radius: 50%;
        line-height: 100px;
        position: absolute;
        img{
            width: 100%;
        }
    }
</style>