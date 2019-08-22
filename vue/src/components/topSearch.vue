<template>
  <div class="topSearch">
    <div class="them_color"></div>
    <router-link to="./searchindex">
      <div class="search">
        <div class="log_img">
            <img src="https://alicdn01.youdemai.com/images/ydmapp/common/logo/logo.png" alt="有得卖">
        </div>
        <div class="search_box">搜索您想要售卖的机器</div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'topSearch',
  data: () => {
    return {}
  }
}
</script>

<style scoped>
.topSearch {
  width: 100%;
  height: 1rem;
  position:fixed;
  z-index: 998;
}
.them_color {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0.96rem;
  background: #e5646c;
  opacity: 0;

}
.search {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0.16rem 0.26rem 0.16rem 0;
  line-height: 0.6rem;
  z-index: 999;
  padding-top: 0.2rem;
  display: flex;
  display: -webkit-flex;
}
.log_img {
  width: 26%;
  text-align: center;
}
.log_img img {
  width: 60%;
  margin-top: 0.1rem;
}
.search_box {
  width: 73%;
    background: rgba(255,255,255,0.2) url(https://alicdn01.youdemai.com/images/ydmapp/common/icon/new_search.png)no-repeat 0.9rem center;
    background-size: 0.3rem;
  padding: 0.06rem 0;
  border-radius: 0.1rem;
  line-height: 0.3rem;
  font-size: 0.14rem;
}
</style>