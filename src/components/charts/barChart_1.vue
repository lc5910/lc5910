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
      default: "340px"
    },
    datalist: {
      type: Array,
      default: null
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
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el);
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: this.dataLists.map(item => { return item.name; }),
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: this.dataLists.map(item => { return item.name; }) || ["测试1", "测试2", "测试3"],
            axisLine: {
              lineStyle: {
                color: '#666'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitArea: {show: false}, // 网格区域
            splitLine: {
              lineStyle: {
                color: '#eee',
                type: 'dashed'
              }
            }, // 网格线
            axisLine: {
              lineStyle: {
                color: '#666'
              }
            }
          }
        ],
        series: [
          {
            type: 'bar',
            barMaxWidth: 90,
            data: this.dataLists.map(item => { return item.value; }),
            label: {
              show: true,
              position: 'inside',
              formatter: (params) => {
                return params.value > 0 ? this.formatRoundInt(params.value) : '';
              }
            },
            itemStyle: {
              normal: {
                color: function(params) {
                  const colorList = ["#60a0f8", "#74cacb", "#7ac87d"];
                  return colorList[params.dataIndex];
                }
              }
            }
          }
        ]
      };

      this.chart.setOption(option);
    },
    // 四舍五入-取整-千分位表示
    formatRoundInt(value) {
      if (value === undefined) {
        return 0;
      }
      return Math.round(value).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
  }
};
</script>
