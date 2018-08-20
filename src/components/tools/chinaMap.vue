<template>
    <div>
        <div id="chinaMap"></div>
    </div>
</template>

<!--中国地图组件-->
<script>
    import echarts from '@/assets/js/echarts/echarts.min.js';
    import chinaJSON from '@/assets/js/echarts/china_geo.js'
    export default {
        data() {
            return {
                data:[
                        {name: '北京',  value:0 , num:200 },
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
            this.init();
        },
        methods: {
            init(){
                var myChart = echarts.init(document.getElementById('chinaMap'));
                var option = {
                    title : {
                        text: '客户地域分布',
                        x:'center'
                    },
                    tooltip : {//鼠标悬浮提示框组件。
                        trigger: 'item',//数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
                        color: '#f0f',
                        formatter: function (params) {
                            var res=params.name+'</br>分布比例：'+params.value+'%</br>销售金额：'+ params.data.num;
                            return res;
                        },
                    },
                    visualMap: {//颜色的设置  dataRange
                        x: 'left',
                        y: 'center',
                        splitList: [
                            {start: 50,  color:'#0ff' },
                            {start: 50, end: 49 },
                            {start: 30, end: 39},
                            {start: 20, end: 29 },
                            {start: 10, end: 19},
                            {start: 0, end: 9, color:'#eee'},
                        ],
                        // calculable : true,//颜色呈条状
                        // text:['高','低'],// 文本，默认为数值文本
                    },
                    roamController: {//控制地图的上下左右放大缩小 图上没有显示
                        show: true,
                        x: 'right',
                        mapTypeControl: {
                            'china': true
                        }
                    },
                    series : [
                        {
                            name: '分布比例',
                            type: 'map',
                            mapType: 'china',
                            roam: false,     //是否开启鼠标缩放和平移漫游
                            itemStyle:{     //地图区域的多边形 图形样式
                                normal:{    //是图形在默认状态下的样式
                                    label:{
                                        show:true,//是否显示标签
                                        textStyle: {
                                            color: "#000"
                                        }
                                    }
                                },
                                emphasis:{  //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                                    label:{show:true}
                                }
                            },
                            top:"1%",//组件距离容器的距离
                            data: this.data,
                        }
                    ]
                };
                myChart.setOption(option);
                myChart.on('mouseover', function (params) {
                    var dataIndex = params.dataIndex;
                });
            },
        },
        computed: {
           
        },
        components: {
            
        }
    
    }
</script>

<style lang="less" scoped>
    #chinaMap{
        width:  '2%'; 
        min-width: 900px;
        height: 1000px;
        margin: auto;
    }
</style>