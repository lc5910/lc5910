<template>
  <div>
    <el-menu :default-active="account"  router >
      <el-submenu index="1">
          <template slot="title">计算器</template>
          <el-menu-item index="/tools/calculator">算一算</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
          <template slot="title">图表</template>
          <el-menu-item index="/tools/ECharts">ECharts</el-menu-item>
          <el-menu-item index="/drawLottery">抽个奖</el-menu-item>
      </el-submenu>
       <el-submenu index="3">
          <template slot="title">学习</template>
          <el-menu-item index="/test/ES6">ES6</el-menu-item>
          <el-menu-item index="/test/CSS3">CSS3</el-menu-item>
      </el-submenu>

    </el-menu>
  </div>
</template>

<!--左侧菜单组件-->
<script>
  export default {
    props:{

    },
    data(){
      return{
		    account:'/',
      }
    },
    created(){
      this.init();
    },
    mounted(){
      window.onhashchange=()=>{
        this.init();
      }
    },
    methods:{
        init:function (){
          this.account=window.location.hash.replace(/#(\/[\w]+\/[\w]+).*/,'$1') || '/';
          // console.log(this.account);
        }
    },
    computed:{

    },
    components:{

    }

  }
</script>

<style lang="less">
    .leftMeau {
      background-color: #3d414f;
      margin-bottom: -10000px;
      padding-bottom: 10000px;
      ul.el-menu{
        background-color: #324157;
        border:none;
          .el-menu-item {
            color: #fff;
            &:focus,&:hover{
            background-color: #1f2d3d;
          }
        }
        .el-submenu__title{
          color: #fff;
          &:focus,&:hover{
            background-color: #324157;
          }
        }
      }
      .el-submenu .el-menu{
        background-color: #1f2d3d;
        .is-active{
          background-color: #00c4e2;
          &:hover{
            background-color: #00c4e2;
          }
        }
        .el-menu-item{
          min-width: unset;
        }
      }
    }
</style>