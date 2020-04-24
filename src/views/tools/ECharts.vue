<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="tabHandleClick">
      <el-tab-pane :label="tabLabel[0].label" :name="tabLabel[0].name">
        <barChart></barChart>
        <barChart2></barChart2>
        <lineChart0></lineChart0>
        <lineChart></lineChart>
        <lineChart2></lineChart2>
        <pieChart></pieChart>
        <mapChina></mapChina>
      </el-tab-pane>
      <el-tab-pane :label="tabLabel[1].label" :name="tabLabel[1].name"></el-tab-pane>
      <!-- <el-tab-pane :label="tabLabel[2].label" :name="tabLabel[2].name"></el-tab-pane> -->
      <!-- <el-tab-pane :label="tabLabel[3].label" :name="tabLabel[3].name"></el-tab-pane> -->
    </el-tabs>
  </div>
</template>

<script>
import barChart from "@/components/charts/barChart_1.vue";
import barChart2 from "@/components/charts/barChart_2.vue";
import lineChart0 from "@/components/charts/lineChart_0.vue";
import lineChart from "@/components/charts/lineChart_1.vue";
import lineChart2 from "@/components/charts/lineChart_2.vue";
import mapChina from "@/components/charts/mapChina.vue";
import pieChart from "@/components/charts/pieChart_1.vue";
export default {
  components: {
    barChart, barChart2, lineChart0, lineChart, lineChart2, pieChart, mapChina
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
.el-tabs__content{
  overflow: auto;
}
.chart{
  max-width: 1000px;
  min-width: 500px;
}
</style>
