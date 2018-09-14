<template>
    <div class='bg' ref='bg'>
        <div class="content_1" v-show='avtiveCode==1'>
            <div class="turntable" ref='bg1'></div>
            <div class="turntable-prizeName" ref='prizeName'></div>
            <a href="javascript:;" class="start" @click="start"><span></span></a>
        </div>
        <div class="content_2"  v-show='avtiveCode==2'>
            <img class='hc' src="../assets/images/activity/congratulate.png" alt="">
            <p>恭喜你获得{{prizeName}}</p>
            <input v-trim type="text" maxlength="11" class='phone' v-model="mobile" placeholder="输入手机号领取">
            <a href="javascript:;" class='acquire btn-success' @click="submit">确定领取</a>
        </div>
        <div class="content_3"  v-show='avtiveCode==3'>
            <p>{{mobile}} 已领取奖品，完成免息分期后即有客服人员联系您</p>
             <a href="/queryuote" class='btn-success'>免息分期Go</a>
        </div>
    </div>
</template>

<!--抽奖活动 -->
<script>
    export default {
        data() {
            return {
                prizeArray: ['小米平衡车','车载吸尘器','车载充气床','行车记录仪','车载应急救援包','备箱折叠储物箱'],
                avtiveCode:1,
                prizeName:'****',
                mobile:'',
                timer:null, //定时器
                speed:6,   //每次角度
                angle:0,    //角度
                prizeIndex:0,     //奖品位置
                turns:0,     //圈数
                click:true,  //能否点击
            }
        },
        created() {
            /* if( gage.getStorage('prizeName')){
                this.avtiveCode=2;
                this.prizeName=gage.getStorage('prizeName');
                if(gage.getStorage('prizeMobile')){
                    this.avtiveCode=3;
                    this.mobile=gage.getStorage('prizeMobile');
                }
            } */
        },
        mounted() {
            this.bgResize();
            window.addEventListener('rize',this.bgResize);
        },
        methods: {
            //背景div的高度
            bgResize(){
                var deviceHeight=window.innerHeight || html.clientHeight || document.body.clientHeight;
                this.$refs.bg.style.minHeight=deviceHeight+'px';
            },
            //开始抽奖
            start(){
                /* if( this.click && gage.getStorage('prizeName')){
                    if(!gage.getStorage('prizeMobile')){
                        this.$message({ type:'success', message: '您已经抽过奖了，请领取奖品',duration:2000});
                        this.avtiveCode=2;
                        this.prizeName=gage.getStorage('prizeName');
                    }else{
                        this.alreadyGet();
                    }
                    this.click=true;
                    return;
                }else if(this.click){
                    this.click=false;
                    this.getLottery();
                }else{
                    return;
                } */
                this.run();
                this.getLottery();  //test
            },
            //抽奖中
            run(){
                this.angle-=this.speed;
                if( this.angle<=-360){
                    this.turns+=1;
                    this.angle=0;
                }
                this.$refs.prizeName.style.transform='rotate('+this.angle+'deg)';
                if(~this.prizeIndex && this.turns>3 && this.angle<=-this.prizeIndex*60){
                    this.stop();
                    setTimeout(()=>{ this.avtiveCode=2; },1000);
                }else{
                    if(~this.prizeIndex && this.turns>3){
                        this.speed=4;
                    }else{
                        this.speed=6;
                    }
                    this.timer=setTimeout(this.run,17);
                }
            },
            //结束抽奖
            stop(){
                clearTimeout(this.timer);
                this.speed=6;
                this.angle=0;
                this.prizeIndex=0;
                this.turns=0;
                this.click=true;
            },
            //抽奖接口
            getLottery(){
                this.prizeIndex=gage.rangeNum(0,5);
                this.prizeName= this.prizeArray[this.prizeIndex];
                gage.setStorage('prizeName',this.prizeName);
                return; //test
                this.$http.get('/pi/lottery',{}).then(( {data} ) => {
                    if (data && data.code == 0) {
                        this.prizeIndex=data.data.prizeIndex-1;
                        this.prizeName=data.data.prizeName;
                        gage.setStorage('prizeName',this.prizeName);
                    }else{
                        this.$message({ type:'info', message: data.msg,duration:2000});
                    }
                }).catch(({res})=>{
                    this.$message({ type:'warning', message: '网络连接失败，请重新操作',duration:2000});
                    this.stop();
                    this.$refs.prizeName.style.transform='rotate('+0+'deg)';
                });
            },
            //点击领取
            submit(){
                if(/^(13|14|15|18|19)\d{9}$/.test(this.mobile)){
                    this.updateLoading(true);
                    this.$http.post('/pi/lottery/userBind', { mobile: this.mobile,}).then(( {data} ) => {
                        this.updateLoading(false);
                        if (data && data.code == 0) {
                            setTimeout(()=>{ this.avtiveCode=3; },1000);
                            gage.setStorage('prizeMobile',this.mobile ,1);
                        }else{
                            if(data.data && typeof data.data.lotteryStatus !=='undefined' && data.data.lotteryStatus==='L0002'){
                                gage.setStorage('prizeMobile',this.mobile ,1);
                                this.alreadyGet();      //已经获奖
                            }else{
                                this.$message({ type:'info', message: data.msg,duration:2000});
                            }

                        }
                    }).catch(({res})=>{
                        this.$message({ type:'warning', message: '网络连接失败，请重新操作',duration:2000});
                    });
                }else{
                    this.$message({ type:'info', message: '输入正确的号码后可领取',duration:2000});
                }
            },
            //已经获奖对话框
            alreadyGet(){
                this.avtiveCode=3;
                 MessageBox({showCancelButton: true,message:'您的手机号已经抽过奖品，完成免息分期后即有客服人员联系您',confirmButtonText:'前往免息分期'}).then(action => { 
                    action ==='confirm' ? this.$router.push('/') : 0;
                });
            }
        },
        computed: {
    
        },
        components: {
    
        },
        watch:{'avtiveCode':function (val,old){
            window.scrollTo(0,0);
        }}
    
    }
</script>

<style  lang="less" scoped>
    h1, h2, h3, h4, h5, h6,p{
        margin: 0;
        padding: 0;
    }
    .bg{
        background: url('../assets/images/activity/bg.png') no-repeat;
        background-size: cover;
        min-height: 667px;
        position: relative;
        z-index: 2;
    }
    .content_1 {
        width: 100%;
        height: 100%;
        .turntable{
            position: absolute;
            left: 50%;
            margin-left:-578/80rem;
            width: 578/40rem;
            height: 586/40rem;
            background: url(../assets/images/activity/turntable-bg.png) no-repeat;
            background-size: 100% ;
            top: 390/40rem;
        }
        .turntable-prizeName{               
            width: 490/40rem;
            height: 490/40rem;
            z-index: 6;
            background: url(../assets/images/activity/turntable-prize.png) no-repeat;
            background-size: 100%;
            position: absolute;
            left: 50%;
            top: 436/40rem;
            margin-left:-490/80rem;
        }
        .start{
            width: 158/40rem;
            height: 190/40rem;
            display: block;
            z-index: 8;
            background: url(../assets/images/activity/startBtn1.png) no-repeat;
            background-size: 100% 100%;
            top: 48%;
            color: #e46923;
            font-size: 36/40rem;
            text-align: center;
            position: absolute;
            left: 50%;
            margin-left: -158/80rem;
            top: 575/40rem;
            span{
                display: block;
                margin-top: 28/20rem;
            }
        }
    }
    .content_2{
        img{
            position: relative;
            width: 681/40rem;
            height: 262/40rem;
            top:1rem;
        }
        p{
            text-align: center;
            font-size: 36/40rem;
            color:#fff;
            position: relative;
            z-index: 2;
        }
        .phone{
            display: block;
            width: 400/40rem;
            height: 80/40rem;
            line-height: 80/40rem;
            font-size: 36/40rem;
            text-align: center;
            color:#d23d68;
            text-align: center;
            margin: 1rem auto;
            border: 1px solid #f8a624;
            border-radius: 80/80rem;
            box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.05);
        }
    }
    .content_3{
        p{
            font-size: 36/40rem;
            color:#fff;
            padding: 86/40rem 64/40rem 86/40rem 64/40rem;
        }
        .btn-success{
            margin-bottom: 115/40rem;
        }
    }
    .btn-success{
        display: block;
        width: 400/40rem;
        height: 80/40rem;
        line-height: 80/40rem;
        background: url(../assets/images/activity/btn-success.png) no-repeat;
        background-size: 100% ;
        color:#fff;
        font-size: 36/40rem;
        text-align: center;
        margin: 0 auto;
        border-radius:  80/40rem;
        box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.05);
    }
</style>