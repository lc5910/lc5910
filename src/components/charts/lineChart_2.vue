<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
// 堆叠折线图
import echarts from "@/assets/js/echarts/echarts.min.js";
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
      default: "400px"
    },
    datalist: {
      type: Array,
      default: null
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      chart: null,
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
    this.dataLists = [
      {name: "测试1", data: [10, 20, 30], x: ["第一", "第二", "第三"], type: 'line', symbol: 'circle', symbolSize: 4, hoverAnimation: false, smooth: false },
      {name: "测试2", data: [20, 30, 40], x: ["第一", "第二", "第三"], type: 'line', symbol: 'circle', symbolSize: 4, hoverAnimation: false, smooth: false },
      {name: "测试3", data: [40, 10, 50], x: ["第一", "第二", "第三"], type: 'line', symbol: 'circle', symbolSize: 4, hoverAnimation: false, smooth: false }
    ];
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
    window.addEventListener('resize', this.__resizeHandler);
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler);
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: 'rgb(24, 144, 255)',
              width: 1,
              type: 'dashed'
            }
          }
        },
        legend: {
          left: "center",
          icon: "circle",
          data: this.dataLists.map(item => {
            return item.name;
          })
        },
        color: ["#1890ff", "#2fc25b", "#FF9900"],
        grid: {
          left: '5%',
          right: '5%',
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: this.dataLists[0] && this.dataLists[0].x || [],
          axisLabel: { textStyle: {color: "#999"}},
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: "#999",
              width: '1'
            }
          },
        },
        yAxis: {
          type: 'value',
          splitArea: {show: false}, // 网格区域
          splitLine: {
            lineStyle: {
              color: '#eee',
              type: 'dashed'
            }
          }, // 网格线
          axisLabel: { textStyle: {color: "#999"}},
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: "#999",
              width: '1'
            }
          },
        },
        series: this.dataLists
      };

      this.chart.setOption(option);
    }
  }
};
</script>
