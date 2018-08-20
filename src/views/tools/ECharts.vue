<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="tabHandleClick">
            <el-tab-pane :label="tabLabel[0].label" :name="tabLabel[0].name">
                <chinaMap></chinaMap>
            </el-tab-pane>
            <el-tab-pane :label="tabLabel[1].label" :name="tabLabel[1].name">
                
            </el-tab-pane>
            <el-tab-pane :label="tabLabel[2].label" :name="tabLabel[2].name">
                
            </el-tab-pane>
            <el-tab-pane :label="tabLabel[3].label" :name="tabLabel[3].name">
                
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import chinaMap from '@/components/tools/chinaMap.vue'
    export default {
        data() {
            return {
                activeName:'first',
                tabLabel:[
                    {label:'map',name:'first'},
                    {label:'gage',name:'second'},
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
            tabHandleClick(){},
        },
        computed: {
    
        },
        components: {
           chinaMap
        }
    
    }
</script>

<style lang="less" scoped>

</style>