<template>
    <div>
        <div class='chart' id="lineChart"></div>
        <div class='chart' id="chinaMap"></div>
        <div class='chart' id="pieChart"></div>
    </div>
</template>

<!--中国地图组件-->
<script>
    import echarts from '@/assets/js/echarts/echarts.min.js';
    import chinaJSON from '@/assets/js/echarts/china_geo.js'
    export default {
        data() {
            return {
                mapData:[
                        {name: '北京',  value:10 , num:200 },
                        {name: '天津',  value:10, num:200 },
                        {name: '上海',  value:20, num:200 },
                        {name: '重庆',  value:30, num:200 },
                        {name: '河北',  value:40, num:200 },
                        {name: '河南',  value:50, num:200 },
                        {name: '云南',  value:60, num:200 },
                        {name: '辽宁',  value:10, num:200 },
                        {name: '黑龙江',value:10, num:200 },
                        {name: '湖南',  value:10, num:200 },
                        {name: '安徽',  value:10, num:200 },
                        {name: '山东',  value:10, num:200 },
                        {name: '新疆',  value:10, num:200 },
                        {name: '江苏',  value:10, num:200 },
                        {name: '浙江',  value:10, num:200 },
                        {name: '江西',  value:10, num:200 },
                        {name: '湖北',  value:10, num:200 },
                        {name: '广西',  value:10, num:200 },
                        {name: '甘肃',  value:10, num:200 },
                        {name: '山西',  value:10, num:200 },
                        {name: '内蒙古',value:10, num:200 },
                        {name: '陕西',  value:10, num:200 },
                        {name: '吉林',  value:10, num:200 },
                        {name: '福建',  value:10, num:200 },
                        {name: '贵州',  value:10, num:200 },
                        {name: '广东',  value:10, num:200 },
                        {name: '青海',  value:10, num:200 },
                        {name: '西藏',  value:10, num:200 },
                        {name: '四川',  value:10, num:200 },
                        {name: '宁夏',  value:10, num:200 },
                        {name: '海南',  value:10, num:200 },
                        {name: '台湾',  value:10, num:200 },
                        {name: '香港',  value:10, num:200 },
                        {name: '澳门',  value:10, num:200 }
                ],
            }
        },
        created() {
            echarts.registerMap('china',chinaJSON);
        },
        mounted() {
            this.chinaMap();
            this.lineChart();
            this.pieChart();
        },
        methods: {
            chinaMap(){
                var myChart = echarts.init(document.querySelector('#chinaMap'));
                var option = {
                    title : {
                        // text: '客户地域分布',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        color: '#f0f',
                        formatter: function (params) {
                            var res=params.name+'</br>分布比例：'+params.value+'%</br>销售金额：'+ params.data.num;
                            return res;
                        },
                    },
                    visualMap: {
                        show:false,
                        x: 'left',
                        y: 'center',
                        splitList: [
                            {start: 49,  color:'#0ff' },
                            {start: 40, end: 49 },
                            {start: 30, end: 39},
                            {start: 20, end: 29 },
                            {start: 10, end: 19},
                            {start: 0, end: 9, color:'#ccc'},
                        ],
                        // show: false,
                        // calculable : true,   //颜色呈条状
                        // text:['高','低'],    // 文本，默认为数值文本
                    },
                    series : [
                        {
                            name: '分布比例',
                            type: 'map',
                            mapType: 'china',
                            roam: false,
                            itemStyle:{
                                normal:{
                                    label:{
                                        // show:true,
                                        textStyle: {
                                            color: "#000"
                                        },
                                        position: 'inside',
                                    }
                                },
                                emphasis:{
                                    label:{show:true}
                                }
                            },
                            top:"5%",
                            data: this.mapData,
                            markLine:{
                                itemStyle:{
                                    normal:{lineStyle:{type:'solid',color:'#f00'},label:{show:true,position:'left'}}
                                },
                            }
                        }
                    ]
                };
                myChart.setOption(option);
            },
            lineChart(){
                var myChart = echarts.init(document.querySelector('#lineChart'));
                var option = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['0', '0-0.1', '0.1-0.2', '0.2-0.3', '0.3-0.4', '0.4-0.5', '0.5-0.6', '0.6-0.7', '0.7-0.8', '0.8-0.9', '0.9-1', '1']
                    },
                    yAxis: {
                        type: 'value',
                        splitLine: {show: false}
                    },
                    series: [{
                        data: [0, 0.02, 0.04, 0.06, 0.11, 0.21, 0.22, 0.16, 0.1, 0.07, 0.03, 0],
                        type: 'line',
                        smooth: true,
                        hoverAnimation:false,
                        cursor:'default',
                        symbol: 'none',
                        markLine: {
                            data: [[
                                {coord:['0.2-0.3', 0]},
                                {coord:['0.2-0.3', 0.22],value:'客户稳定指数:0.22'}
                            ]]
                        }
                    }]
                };
                myChart.setOption(option);
            },
            pieChart(){
                var myChart = echarts.init(document.querySelector('#pieChart'));
                var option = {
                    title : {
                        // text: '客户行业分布',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}"
                    },
                    series : [
                        {
                            name: '行业分布',
                            type: 'pie',
                            radius: ['50%', '70%'],
                            data:[
                                {value:0, name:'未知行业 0%'},
                                {value:0, name:'保险业 0%'},
                                {value:72, name:'批发零售业 72%'},
                                {value:19, name:'商业服务业 19%'},
                                {value:9, name:'软件服务业 9%'},
                            ],
                            hoverAnimation: false,
                        }
                    ]
                };
                myChart.setOption(option);

            },
        },
        computed: {
           
        },
        components: {
            
        }
    }
</script>

<style lang="less" scoped>
    .chart{
        width: 900px;
        height: 300px;
        margin: 0 ;
        &#lineChart{
            width: 800px;
        }
        &#chinaMap{
            width: 470px;
        }
        &#pieChart{
            width: 470px;
        }
    }
    
</style>