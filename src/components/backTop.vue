<template>
    <div>
        <a href="javascript:;" id="backTop"></a>
    </div>
</template>

<!--页面-->
<script>
    export default {
        data() {
            return {

            }
        },
        created() {

        },
        mounted() {
            gege.$backTop("#backTop");

        },
        methods: {

        },
        computed: {
    
        },
        components: {
            
        }
    
    }
</script>

<style lang="less" scoped>
    #backTop {
        position: fixed;
        z-index: 99;
        right: 8px;
        bottom: 15px;
        width: 1rem;
        height: 1rem;
        box-sizing: border-box;
        white-space: nowrap;
        text-indent: 100%;
        overflow: hidden;
        border-radius: 50%;
        border: 1px solid #e1e8f0;
        background-color: #fff;
        box-shadow: 0 0 0 1px rgba(227, 229, 233, 0.25);
        display: inline-block;
        display: none;
        &::before {
            content: "";
            position: absolute;
            left: 50%;
            margin-left: -7/20rem;
            top: 50%;
            margin-top: -4/20rem;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 7/20rem 8/20rem;
            border-color: transparent transparent #666;
        }
        &::after {
            content: "";
            position: absolute;
            left: 50%;
            margin-left: -7/20rem;
            top: 50%;
            margin-top: -1px;
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 7/20rem 8/20rem;
            border-color: transparent transparent #fff;
        }
    }
</style>