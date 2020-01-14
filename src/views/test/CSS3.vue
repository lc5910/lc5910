<template>
    <div class='css3_test'>
        <div class="test_1">
            <div class="loading">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                testResult: '',
            }
        },
        mounted() {},
        methods: {

        },        

    }
</script>

<style  lang="less" scoped>
    .css3_test{
        background: #222;
        >div{
            padding : 20px 10px;
            margin: 10px 0;
            width: 50%;
            margin: 0 auto;
        }
        .test_1{
            width: 230px;
            .loading {
                @colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
                display: flex;
                animation-delay: 1s;
                .dot {
                    position: relative;
                    width: 2em;
                    height: 2em;
                    margin: 0.8em;
                    border-radius: 50%;
                    &::before {
                        position: absolute;
                        content: "";
                        width: 100%;
                        height: 100%;
                        background: inherit;
                        border-radius: inherit;
                        animation: wave 2s ease-out infinite;
                    }
                    @counter:1;
                    .loop(@i) when (@i <6) {
                        &:nth-child(@{i}) {
                            color: #f00;
                            background: extract(@colors,@i);
                            &::before {
                                animation-delay: @i * 0.2s;
                            }
                        }
                        .loop(@i + 1);                    
                    }
                    .loop(@counter);
                }
            }

            @keyframes wave {
                50%,
                75% {
                    transform: scale(2.5);
                }
                80%,
                100% {
                    opacity: 0;
                }
            }
        }
    }
    
</style>