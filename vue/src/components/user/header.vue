<template>
    <div class="headerbox">
        <div class="top_header li_c logflag no_login">
            <div class="img"><img src="https://img01.youdemai.com/images/ydmapp/user/user_header.png"/></div>
            <div class="info_box clearfix">
                <div class="user_icon img left"><img src="https://img01.youdemai.com/images/ydmapp/user/clerk_default.png"/></div>
                <div class="name_box left">
                    <div class="name" id="name">你好！</div>
                    <div class="tips" id="nametips">您尚未登录</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'headerbox',
        data:()=>{
            return{
                
            }
        }
    }
</script>

<style>
    .top_header{position: relative;}
    .top_header .info_box{position: absolute;top: 0.8rem;left: 0.4rem;}
    .top_header .info_box .user_icon{width: 20%;border-radius: 100%;overflow: hidden;}
    .top_header .info_box .name_box{color: #fff;padding: 0.1rem 0 0 0.2rem;}
    .top_header .info_box .name_box .name{font-size: 0.4rem;}
    .top_header .info_box .name_box .tips{font-size: 0.24rem;padding-top: 0.1rem;}
</style>
