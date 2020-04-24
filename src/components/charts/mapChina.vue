<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<!--中国地图组件-->
<script>
import echarts from "@/assets/js/echarts/echarts.min.js";
import chinaJSON from "@/assets/js/echarts/china_geo.js";
import { debounce } from '@/util/index.js'
export default {
  props: {
    className: {
      type: String,
      default: "chart"
    },
    width: {
      type: String,
      default: "100%"
    },
    height: {
      type: String,
      default: "500px"
    },
    datalist: {
      type: Array,
      default: null
    },
  },
  data() {
    return {
      mapData: [
        { name: "北京", value: 10, num: 200 },
        { name: "天津", value: 10, num: 200 },
        { name: "上海", value: 20, num: 200 },
        { name: "重庆", value: 30, num: 200 },
        { name: "河北", value: 40, num: 200 },
        { name: "河南", value: 50, num: 200 },
        { name: "云南", value: 60, num: 200 },
        { name: "辽宁", value: 10, num: 200 },
        { name: "黑龙江", value: 10, num: 200 },
        { name: "湖南", value: 10, num: 200 },
        { name: "安徽", value: 10, num: 200 },
        { name: "山东", value: 10, num: 200 },
        { name: "新疆", value: 10, num: 200 },
        { name: "江苏", value: 10, num: 200 },
        { name: "浙江", value: 10, num: 200 },
        { name: "江西", value: 10, num: 200 },
        { name: "湖北", value: 10, num: 200 },
        { name: "广西", value: 10, num: 200 },
        { name: "甘肃", value: 10, num: 200 },
        { name: "山西", value: 10, num: 200 },
        { name: "内蒙古", value: 10, num: 200 },
        { name: "陕西", value: 10, num: 200 },
        { name: "吉林", value: 10, num: 200 },
        { name: "福建", value: 10, num: 200 },
        { name: "贵州", value: 10, num: 200 },
        { name: "广东", value: 10, num: 200 },
        { name: "青海", value: 10, num: 200 },
        { name: "西藏", value: 10, num: 200 },
        { name: "四川", value: 10, num: 200 },
        { name: "宁夏", value: 10, num: 200 },
        { name: "海南", value: 10, num: 200 },
        { name: "台湾", value: 10, num: 200 },
        { name: "香港", value: 10, num: 200 },
        { name: "澳门", value: 10, num: 200 }
      ]
    };
  },
  watch: {
    datalist: function(news) {
      this.dataLists = news;
      this.initChart();
    }
  },
  created() {
    this.dataLists = this.dataLists ? this.dataLists : this.datalist;
    echarts.registerMap("china", chinaJSON);
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize();
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      var option = {
        title: {
          // text: '客户地域分布',
          x: "center"
        },
        tooltip: {
          trigger: "item",
          color: "#f0f",
          formatter: function(params) {
            var res = params.name + "</br>分布比例：" + params.value + "%</br>销售金额：" + params.data && params.data.num || 0;
            return res;
          }
        },
        visualMap: {
          show: false,
          x: "left",
          y: "center",
          splitList: [
            { start: 49, color: "#0ff" },
            { start: 40, end: 49 },
            { start: 30, end: 39 },
            { start: 20, end: 29 },
            { start: 10, end: 19 },
            { start: 0, end: 9, color: "#ccc" }
          ]
          // show: false,
          // calculable : true,   //颜色呈条状
          // text:['高','低'],    // 文本，默认为数值文本
        },
        series: [
          {
            name: "分布比例",
            type: "map",
            mapType: "china",
            roam: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    color: "#000"
                  },
                  position: "inside"
                }
              },
              emphasis: {
                label: { show: true }
              }
            },
            top: "5%",
            data: this.mapData,
            markLine: {
              itemStyle: {
                normal: {
                  lineStyle: { type: "solid", color: "#f00" },
                  label: { show: true, position: "left" }
                }
              }
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  },
};
</script>

<style lang="less" scoped>
</style>
