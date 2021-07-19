<template>
    <div id="userInfo" class="userInfo text-center">
        <div class="container">
            <div class="section-title center">
                <h2 style="font-size: 40px">基本 <strong>资料</strong></h2>
                <hr>
            </div>
            <div class="space"></div>
            <div class="row">
                <div class="col-md-3 col-sm-6 service"><i class="fa fa-newspaper-o"></i>
                    <h4><strong>个人信息</strong></h4>
                    <p>
                        年龄：24 <br/>
                        性别：男 <br/>
                        籍贯：贵州
                    </p>
                </div>
                <div class="col-md-3 col-sm-6 service"><i class="fa fa-code"></i>
                    <h4><strong>工作经验</strong></h4>
                    <p>
                        （无）应届毕业生
                    </p>
                </div>
                <div class="col-md-3 col-sm-6 service"><i class="fa fa-rocket"></i>
                    <h4><strong>职位意向</strong></h4>
                    <p>
                        地点：杭州、贵阳<br/>
                        行业：IT服务、互联网<br/>
                        性质：实习、全职
                    </p>
                </div>
                <div class="col-md-3 col-sm-6 service"><i class="fa fa-bullseye"></i>
                    <h4><strong>联系方式</strong></h4>
                    <p>
                        手机：18786410021<br/>
                        邮箱：pscmingyang@gmail.com
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "userInfo"
    }
</script>

<style lang="less" scoped>
    .userInfo {
        padding: 80px 0;
        color: #aaa;
        background: #6f7275;
        background: linear-gradient(to bottom, #6f7275 0%, #31353a 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6f7275', endColorstr='#31353a', GradientType=0); /* IE6-9 */

        .section-title.center hr {
            background: #c1a533;
        }

        H2 {
            color: #ddd;
        }

        H4 {
            color: #F4D03F;
            transition: all 0.5s;
        }

        .space {
            margin-top: 40px;
        }

        i.fa {
            font-size: 50px;
            width: 120px;
            height: 120px;
            padding: 34px 0;
            margin-bottom: 10px;
            border-radius: 50%;
            color: #aaa;
            background: #474b4f;
            -webkit-transition: all 0.5s ease-out;
            -moz-transition: all 0.5s ease-out;
            -ms-transition: all 0.5s ease-out;
            -o-transition: all 0.5s ease-out;
            transition: all 0.5s ease-out;
        }

        .service {
            &:hover > i.fa {
                color: #F4D03F;
                -webkit-transform: scale(1.3);
                -moz-transform: scale(1.3);
                -ms-transform: scale(1.3);
                -o-transform: scale(1.3);
                transform: scale(1.3);
            }
        }
    }
</style>