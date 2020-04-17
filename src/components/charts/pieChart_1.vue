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
    radius: {
      type: String,
      default: null
    },
    legendshow: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      chart: null,
      dataUnit: "元"
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
      this.dataUnit = this.dataLists && this.dataLists[0] && this.dataLists[0].dataUnit || "元";
      this.chart = echarts.init(this.$el);
      let legend = null;
      if (this.legendshow) {
        legend = {
          left: "center",
          bottom: "bottom",
          icon: "circle",
          data: this.dataLists.map(item => {
            return item.name;
          })
        }
      }
      const option = {
        tooltip: {
          trigger: "item",
          formatter: "{b} : {d}%"
        },
        legend: legend,
        color: ["#60a0f8", "#74cacb", "#7ac87d"],
        series: [
          {
            name: "",
            type: "pie",
            radius: this.radius || ["50%", "70%"],
            center: ["48%", "50%"],
            label: {
              normal: {
                // formatter: "{b} \n {d}% \n {c}" + this.dataUnit, // {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
                formatter: (params) => {
                  return params.name + '\n' + params.percent + '%\n' + this.formatRoundInt(params.value) + this.dataUnit;
                },
                textStyle: { color: "#666" },
                lineHeight: 15,
                rich: {} // 设置lineHeight时这个字段必须
              }
            },
            data: this.dataLists,
            hoverAnimation: false,
            avoidLabelOverlap: true, // 是否启用防止标签重叠策略
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
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
