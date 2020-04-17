<template>
  <div :class="className" :style="{height:height,width:width}"></div>
</template>

<script>
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
    this.dataLists = [{name: "测试1", value: 10 }, {name: "测试2", value: 20 }, {name: "测试3", value: 30 }];
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
          trigger: "axis",
          // formatter: "{b} : {c}",
          axisPointer: {
            type: 'line',
            lineStyle: {
              color: 'rgb(24, 144, 255)',
              width: 1,
              type: 'dashed'
            }
          }
        },
        grid: {
          left: '5%',
          right: '5%',
        },
        xAxis: {
          type: 'category',
          data: this.dataLists.map(item => {
            return item.name;
          }),
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
          axisLabel: { textStyle: {color: "#999"}},
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: "#999",
              width: '1'
            }
          },
        },
        series: [{
          data: this.dataLists.map(item => {
            return item.value;
          }),
          type: 'line',
          symbol: 'circle',
          symbolSize: 8,
          hoverAnimation: false,
          smooth: false, // 是否平滑曲线显示
          itemStyle: {
            normal: {
              color: "rgba(24, 144, 255)",
              lineStyle: {color: 'rgba(24, 144, 255)'},
            }
          },
        }]
      };
      this.chart.setOption(option);
    }
  }
};
</script>
