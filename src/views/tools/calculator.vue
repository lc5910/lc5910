<template>
    <div class='calculator'>
        <el-tabs v-model="activeName" @tab-click="tabHandleClick">
            <el-tab-pane :label="tabLabel[0].label" :name="tabLabel[0].name">
                
            </el-tab-pane>
            <el-tab-pane :label="tabLabel[1].label" :name="tabLabel[1].name">
                <fundsCalculator></fundsCalculator>
            </el-tab-pane>
            <el-tab-pane :label="tabLabel[2].label" :name="tabLabel[2].name">
                
            </el-tab-pane>
            <el-tab-pane :label="tabLabel[3].label" :name="tabLabel[3].name">
                
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import fundsCalculator from '@/components/tools/fundsCalculator.vue'
    export default {
        data() {
            return {
                activeName:'first',
                tabLabel:[
                    {label:'one', name:'first'},
                    {label:'基金计算', name:'second'},
                    {label:'three', name:'third'},
                    {label:'four', name:'fourth'},
                ],
            }
        },
        created() {
            
        },
        mounted() {

        },
        methods: {
            // tab栏切换
            tabHandleClick(){ },
        },
        computed: {
    
        },
        components: {
           fundsCalculator
        }
    
    }
</script>

<style lang="less">
    .calculator{
        .el-tabs__content{
            display: flex;
            #pane-second{
                flex-shrink: 1;
            }
        }
    }
</style>