<template>
    <div class="login_center">
        <div id="img" class="ydm_logo img"><img :src="ssss"/></div>
        <login-box></login-box>
        <pop-box></pop-box>
    </div>
</template>

<script>
    import loginBox from '../components/login/index'
    import popBox from '../components/popup/pop'
    export default{
        name:'login_center',
        data:()=>{
            return {
                ssss:'https://img01.youdemai.com/images/ydmapp/common/logo/push.png'
            }
        },
        mounted:function(){
            this.this_url = this.$commonjs.imgPath()
        },
        methods: {
            
        },
        components:{
            loginBox,
            popBox
        }
    }
</script>

<style>
    .ydm_logo{width: 20%;margin: 0.5rem auto 0.5rem;border-radius: 100%;overflow: hidden;}
</style>