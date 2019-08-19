<template>
<div class="topSearch">
    <div class="them_color"></div>
    <router-link to="./searchindex">
        <div class="search">
            <div class="log_img"><a href="#"><img  src="../assets/images/icon/header_logo.png" alt=""></a></div>
            <div class="search_box">输入您卖的机型</div>
        </div>
    </router-link>
    <router-view>输入您卖的机型</router-view>
</div>
</template>
<script>
export default {
  name: 'topSearch',
 data:()=>{
     return{

     }
 }
}
</script>

<style scoped>
.topSearch{
    width: 100%;
    height: 1rem;
}
.them_color{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0.96rem;
    background: #E5646C;
    /* opacity: 0; */
    z-index: 998;
}
.search{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0.16rem 0.26rem 0.16rem 0;
    line-height: 0.6rem;
    z-index: 999;
    background: #fff;
    padding-top: .2rem;
    display: flex;
    display: -webkit-flex;
}
.log_img{
    width: 26%;
    text-align: center;
}
.log_img img{
    width: 60%;
}
.search_box{
   width: 73%;
    background:#f0f0f0 url("../assets/images/icon/search-icon.png") no-repeat 97% center;
    background-size: 0.4rem;
    padding: .06rem 0;
    border-radius: .1rem;
    line-height: .5rem;
    font-size: .25rem;
}
</style>