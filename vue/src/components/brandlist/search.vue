<template>
    <div class="search">
      <router-link to="/typelist"><div class="black_icon"></div></router-link>
      <div class="search_box" @click="path">请输入您要搜索的产品型号</div>
    </div>
</template>
<script>
export default {
    name:'search',
    data:()=>{
        return{

        }
    },
    methods:{
        path:function(){
            this.$router.push({path:'/searchIndex'});
        }
    }
}
</script>
<style scoped>
.search{
    position: fixed;
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
   justify-content: space-between;
    -webkit-justify-content: space-between;
}
.black_icon{
    width: .23rem;
    height: .37rem;
    background: url("../../assets/images/icon/icon_header.png")no-repeat -0.3rem 0.05rem;
    background-size: 0.5rem;
    margin-left:.1rem;
    }
.search_box{
    width: 80%;
    height: 0.3rem;
    line-height: 0.3rem;
    margin: 0 auto;
    padding-left: 0.2rem;
    text-align: left;
    background: #eee url("../../assets/images/icon/ydm_search.png")no-repeat 95% center;
    color: #999;
    border-radius: 0.08rem;
    background-size: 0.2rem;
    font-size: .14rem;
}
</style>