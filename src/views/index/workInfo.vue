<template>
    <div id="workInfo" class="workInfo text-center">
        <div class="container">
            <div class="section-title center">
                <h2 style="font-size: 40px">人生 <strong> 经历</strong></h2>
                <hr>
                <p style="font-size: 15px">热爱互联网，热爱技术，对前端技术有浓厚的兴趣</p>
            </div>
            <div class="workInfo-row">
                <div class="workInfo-row-item col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../../assets/img/school.jpg" alt="丽水学院" class="img-circle team-img">
                        <div class="caption">
                            <h3>丽水学院</h3>
                            <p>2017.09-2021.06</p>
                            <p>大四下自主学习前端技术</p>
                            <p>在校期间，学过C语言编程</p>
                            <p>计算机二级</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "workInfo"
    }
</script>

<style lang="less" scoped>
    .workInfo {
        padding: 80px 0;
        background: #ffffff;
        background: linear-gradient(to bottom, #ffffff 0%, #cccccc 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#cccccc', GradientType=0);

        &-row {
            display: block;
            text-align: center;

            img.img-circle.team-img {
                width: 120px;
                height: 120px;
                border: 4px solid transparent;
                transition: all 0.5s;
            }

            &-item {
                height: 360px;
                float: none;
                display: inline-flex;
                margin: 10px 0;

                .thumbnail {
                    width: 100%;
                    height: 100%;
                    border: 0;

                    &:hover {
                        z-index: 2;
                        box-shadow: 0 15px 30px rgba(0, 0, 0, .7);
                        transform: translate3d(0, -2px, 0);
                        transition: all 0.8s;
                    }

                    .caption {
                        padding: 9px;
                        color: #5a5a5a;
                    }
                }
            }
        }
    }


</style>