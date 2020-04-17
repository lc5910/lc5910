<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="tabHandleClick">
      <el-tab-pane :label="tabLabel[0].label" :name="tabLabel[0].name">
        <pieChart></pieChart>
        <barChart></barChart>
        <barChart2></barChart2>
        <lineChart></lineChart>
        <chinaMap></chinaMap>
      </el-tab-pane>
      <el-tab-pane :label="tabLabel[1].label" :name="tabLabel[1].name"></el-tab-pane>
      <!-- <el-tab-pane :label="tabLabel[2].label" :name="tabLabel[2].name"></el-tab-pane> -->
      <!-- <el-tab-pane :label="tabLabel[3].label" :name="tabLabel[3].name"></el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import chinaMap from "@/components/charts/chinaMap.vue";
import lineChart from "@/components/charts/lineChart_1.vue";
import pieChart from "@/components/charts/pieChart_1.vue";
import barChart from "@/components/charts/barChart_1.vue";
import barChart2 from "@/components/charts/barChart_2.vue";
export default {
  components: {
    chinaMap, lineChart, pieChart, barChart, barChart2
  },
  data() {
    return {
      activeName: "first",
      tabLabel: [
        { label: "map", name: "first" },
        { label: "gage", name: "second" },
        { label: "gage", name: "third" },
        { label: "gage", name: "fourth" }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    tabHandleClick() {}
  }
};
</script>

<style lang="less">
.chart{
  max-width: 1000px;
}
</style>
