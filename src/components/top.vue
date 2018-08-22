<template>
  <div class='top'>
      <el-row>
          <el-col :md="12" class='logoBox'>
              <a href="https://github.com/lc5910/lc5910.github.io" class='logo'>
                <svg width="0.8rem" height="0.8rem" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
              <a href="javscript:;" @click='triggerClick' class='common-topbar-title'>{{title}}</a>
          </el-col>
          <el-col  :md="12">
              
          </el-col>
      </el-row>
  </div>
</template>

<!--头部组件-->
<script>
    export default {
    data(){
        return{
            userName:'',
            title:'么么哒',
            github:'https://github.com/lc5910/lc5910.github.io'
        }
    },
    created(){
        if(gage.deviceType()!=='PC'){
            this.title='请用电脑浏览本站';
        }
    },
    mounted(){

    },
    methods:{
        triggerClick(){
            location.href=this.github;
        }
    },
    computed:{

    },
    components:{

    }

    }
</script>

<style lang="less" scoped>
    .top{
        min-height: 1.5rem;
        background-color: #373d41;
        .logoBox{
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 0.5rem;
            a{
                display: inline-block;
                float: left;
                position: relative;
            }
            .logo{
                width: 33%;
                line-height: 1.5rem;
                text-align: center;
            }
            .common-topbar-title {
                min-width: 96px;
                border: 1px solid #2a3033;
                border-width: 0px 1px;
                font-size: 12px;
                color: #606266;
                height: 100%;
                margin: 0;
                text-align: center;
                line-height: 1.5rem;
                padding:0 0.5rem;
            }
        }
        .octicon {
            display: inline-block;
            vertical-align: middle;
            fill: currentColor;
            color: #fff;
        }
    }
</style>