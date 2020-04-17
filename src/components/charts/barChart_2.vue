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
    },
    title: {
      type: String,
      default: ""
    },
    legendshow: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      chart: null,
      xName: ['　　　　图1　　　　　　　　　　　图2　　　　']
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
    this.dataLists = [{name: '测试1', value: [10]}, {name: '测试2', value: [20]}, {name: '测试3', value: [30]}]
  },
  mounted() {
    this.initChart();
    this.__resizeHandler = debounce(() => {
      this.chart.resize();
      this.initChart();
    }, 100)
    window.addEventListener('resize', this.__resizeHandler)
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    window.removeEventListener('resize', this.__resizeHandler)
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, "macarons");
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: (params) => {
            var htmlStr = '';
            htmlStr += '<span style="width:50px;color:#fff">' + params[0].seriesName + '</span>' + '：' + this.formatRoundInt(params[0].value);
            htmlStr += '</br>'
            htmlStr += '<span style="width:50px;color:#fff">' + params[1].seriesName + '</span>' + '：' + this.formatRoundInt(params[1].value);
            htmlStr += '</br>'
            htmlStr += '<span style="width:50px;color:#fff">' + params[2].seriesName + '</span>' + '：' + this.formatRoundInt(params[2].value);
            return htmlStr;
          }
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
            data: this.xName,
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
          },
        ],
        series: [
          {
            name: this.dataLists[0] && this.dataLists[0].name || '',
            type: 'bar',
            barMaxWidth: 90,
            barGap: 0.7,
            label: {
              show: true,
              position: 'inside',
              formatter: (params) => {
                return this.dataLists[0].percent >= 0.05 ? params.seriesName + '：' + this.formatRoundInt(params.value) : '';
              }
            },
            data: this.dataLists[0] && this.dataLists[0].value || '',
            itemStyle: {
              normal: {
                color: function(params) {
                  const colorList = ["#60a0f8"];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: this.dataLists[1] && this.dataLists[1].name || '',
            type: 'bar',
            barMaxWidth: 90,
            barGap: 0.7,
            stack: '总量',
            label: {
              show: true,
              position: 'inside',
              formatter: (params) => {
                return this.dataLists[1].percent >= 0.05 ? params.seriesName + '：' + this.formatRoundInt(params.value) : '';
              }
            },
            data: this.dataLists[1] && this.dataLists[1].value || '',
            itemStyle: {
              normal: {
                color: function(params) {
                  const colorList = ["#74cacb"];
                  return colorList[params.dataIndex];
                }
              }
            }
          },
          {
            name: this.dataLists[2] && this.dataLists[2].name || '',
            type: 'bar',
            barMaxWidth: 90,
            stack: '总量',
            label: {
              show: true,
              position: 'inside',
              formatter: (params) => {
                return this.dataLists[2].percent >= 0.05 ? params.seriesName + '：' + this.formatRoundInt(params.value) : '';
              }
            },
            data: this.dataLists[2] && this.dataLists[2].value || '',
            itemStyle: {
              normal: {
                color: function(params) {
                  const colorList = ["#7ac87d"];
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
