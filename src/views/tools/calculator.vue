<template>
    <div>
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
    import fundsCalculator from '@/components/fundsCalculator.vue'
    export default {
        data() {
            return {
                activeName:'second',
                tabLabel:[
                    {label:'gage',name:'first'},
                    {label:'基金计算',name:'second'},
                    {label:'gage',name:'third'},
                    {label:'gage',name:'fourth'},
                ],
            }
        },
        created() {
            
        },
        mounted() {

        },
        methods: {
            // tab栏切换
            tabHandleClick(){
                
            },
        },
        computed: {
    
        },
        components: {
           fundsCalculator
        }
    
    }
</script>

<style lang="less" scoped>

</style>