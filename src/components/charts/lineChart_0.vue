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
    },
    radius: {
      type: String,
      default: "48%"
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
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "0",
            "0-0.1",
            "0.1-0.2",
            "0.2-0.3",
            "0.3-0.4",
            "0.4-0.5",
            "0.5-0.6",
            "0.6-0.7",
            "0.7-0.8",
            "0.8-0.9",
            "0.9-1",
            "1"
          ]
        },
        yAxis: {
          type: "value",
          splitLine: { show: false }
        },
        series: [
          {
            data: [
              0,
              0.02,
              0.04,
              0.06,
              0.11,
              0.21,
              0.22,
              0.16,
              0.1,
              0.07,
              0.03,
              0
            ],
            type: "line",
            smooth: true,
            hoverAnimation: false,
            cursor: "default",
            symbol: "none",
            markLine: {
              data: [
                [
                  { coord: ["0.2-0.3", 0] },
                  { coord: ["0.2-0.3", 0.22], value: "指数:0.22" }
                ]
              ]
            }
          }
        ]
      };
      this.chart.setOption(option);
    }
  }
};
</script>
