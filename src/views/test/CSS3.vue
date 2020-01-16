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

        <div class="test_2">
            <button class="btn btn-primary btn-ghost btn-shine">hover me</button>
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
        .test_2{
            width: 455px;
            .btn {
                --hue: 190;
                position: relative;
                padding: 1rem 3rem;
                font-size: 1rem;
                line-height: 1.5;
                color: white;
                text-decoration: none;
                text-transform: uppercase;
                background-color: rgb(0, 185, 209);
                border: 1px solid rgb(0, 185, 209);
                outline: transparent;
                overflow: hidden;
                cursor: pointer;
                user-select: none;
                white-space: nowrap;
                transition: 0.25s;
                &:hover {
                    background: rgb(0, 185, 209);
                }

                &-primary {
                    --hue: 187;
                }

                &-ghost {
                    color: rgb(0, 185, 209);
                    background-color: transparent;
                    border-color: rgb(0, 185, 209);

                    &:hover {
                        color: white;
                    }
                }

                &-shine {
                    color: white;

                    &::before {
                        position: absolute;
                        content: "";
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(
                            120deg,
                            transparent,
                            rgb(0, 185, 209),
                            transparent
                        );
                        transform: translateX(-100%);
                        transition: 0.6s;
                    }

                    &:hover {
                        background: transparent;
                        box-shadow: 0 0 20px 10px rgb(0, 185, 209);
                    }

                    &:hover::before {
                        transform: translateX(100%);
                    }
                }
            }
        }
    }
    
</style>