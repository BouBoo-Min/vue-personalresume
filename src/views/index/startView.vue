<template>
    <header id="startView" class="startView">
        <div class="startView-body">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h1>杨明<span class="brand-heading">  -  Web前端开发工程师（实习）</span></h1>
                        <p class="startView-text">喜欢技术、热爱挑战</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "startView"
    }
</script>

<style lang="less" scoped>
    .startView {
        display: table;
        width: 100%;
        height: 100%;
        padding: 100px 0;
        text-align: center;
        color: #fff;
        background: url(../../assets/img/intro-bg2.jpg) no-repeat bottom center;
        background-color: #000;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        background-size: cover;
        -o-background-size: cover;

        &-body {
            display: table-cell;
            vertical-align: middle;

            .brand-heading {
                color: #F4D03F;
                text-transform: uppercase;
                letter-spacing: -2px;
            }

            .startView-text {
                font-size: 18px;
            }
        }
    }

    @media (min-width: 768px) {
        .startView {
            height: 100%;
            padding: 0;

            &-body {
                H1 {
                    font-size: 45px;
                    font-weight: 700;
                    letter-spacing: -2px;
                }

                .startView-text {
                    font-size: 20px;
                    text-transform: uppercase;
                    letter-spacing: 8px;
                    margin-bottom: 50px;
                }
            }
        }
    }


</style>