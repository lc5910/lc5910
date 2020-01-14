<template>
    <div class='tools'>
        <!-- <top></top> -->
        <el-row>
            <el-col :sm="3" class='leftMeau'>
                <leftMeau></leftMeau>
            </el-col>
            <el-col :sm="21" class='rightContent'>
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import top from '@/components/top';
    import leftMeau from '@/components/leftMeau';
    export default {
        data() {
            return {
                
            }
        },
        created() {
            this.updateLoading(true);
            this.updateLoading(false);
        },
        mounted() {
           
        },
        methods: {
            init:function(){
                
            },
        },
        computed: {
    
        },
        components: {
            top,
            leftMeau
        }
    
    }
</script>

<style lang="less" >
    @import '../../assets/css/global.less';
    .tools{
        .rightContent{
            background-color: #fff;
            min-height: 100%;
            min-height: 700px;
            padding: 0.2rem 0.5rem 0 1rem;
        }
        .el-form{
            .el-form-item{
                .el-form-item__content>div{
                    width: 35%;
                    min-width: 10rem;
                    position: absolute;
                    left: 120px;
                }
                .el-form-item__error{
                    position: absolute;
                    left: 120px;
                    padding-top: 6px;
                }
                .el-input__inner{
                    padding: 0 10px;
                    &[disabled]{
                        border:none;
                        cursor: default;
                        color: #606266;
                        font-weight: 600;
                    }
                }
            }
        }
        .submitBox{
            padding-left:120px;
        }
        .el-button{
            margin-right: 0.25rem;
            &+.el-button {
                margin-left: 0px;
            }
        }
        .el-tab-pane{
            padding-top:0.8rem;
        }
        .el-tabs__header{
            margin: 0;
        }
        .el-menu-item, .el-submenu__title{
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 12px;
        }
    }
</style>