<template>
    <div class="list_box">
        <div class="list order">
            <div class="li_inner" @click="userinner($event)" data-type="order">订单</div>
        </div>
        <div class="list coupon" @click="userinner">
            <div class="li_inner">优惠券</div>
        </div>
        <div class="list help" @click="userinner">
            <div class="li_inner">帮助中心</div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'list_box',
        data:()=>{
            return{
                
            }
        },
        methods: {
            userinner:function(event){
                var user_info = localStorage.getItem('userInfo');
                if(user_info){
                    console.log(event.target.getAttribute("data-type"))
                }else{
                    let vue_url = 'login';
                    let parms = {id:1,name:'ssss'};
                    this.$commonjs.routers(vue_url,parms,this);
//                  this.$router.push({name: vue_url,params:parms});
                }
            }
        }
    }
</script>

<style>
    .list_box .list{line-height: 1.0rem;border-bottom: 1px solid #F5F5F5;padding: 0 0.2rem 0 0.7rem;}
    .list_box .list .li_inner{font-size: 0.2rem;background: url(https://img01.youdemai.com/images/ydmapp/common/icon/icon_right.png)no-repeat right center;background-size: 0.15rem;}
    
    .list_box .list.order{background: url(https://img01.youdemai.com/images/ydmapp/user/icon_order.png)no-repeat 0.2rem center;background-size: 0.2rem;}
    .list_box .list.coupon{background: url(https://img01.youdemai.com/images/ydmapp/user/icon_coupon.png)no-repeat 0.2rem center;background-size: 0.3rem;}
    .list_box .list.kefu{padding-right: 2.0rem;background: url(https://img01.youdemai.com/images/ydmapp/user/icon_kefu.png)no-repeat 0.2rem center;background-size: 0.3rem;}
    .list_box .list.help{background: url(https://img01.youdemai.com/images/ydmapp/user/icon_help.png)no-repeat 0.2rem center;background-size: 0.35rem;}
    .list_box .list.seting{background: url(https://img01.youdemai.com/images/ydmapp/user/icon_sent.png)no-repeat 0.2rem center;background-size: 1.4rem;}
    .list_box .list.recommend{background: url(https://img01.youdemai.com/images/ydmapp/user/icon_recommend.png)no-repeat 0.2rem center;background-size: 1.6rem;}
</style>