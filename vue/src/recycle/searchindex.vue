<template>
  <div class="container">
    <div class="top_box set">
      <div class="searchbox">
        <!-- <form action="/product/product/merslist"   name="searchForm" method="get"> -->
        <input
          type="text"
          name="keywords"
          class="search_bar autocomplete"
          placeholder="请输入您的旧机型号"
          autocomplete="off"
        >
        <!-- </form> -->
      </div>
      <div>
        <div class="suggestions"></div>
      </div>
      <div onclick="doSearch()" class="set_list J_search_go"></div>
    </div>
    <div class="header_img">
      <img src="../assets/images/icon/hot_search.png">
    </div>
    <div class="hot_mer_box">
      <ul class="clearfix">
        <li>
          <a href="#">iphone5</a>
        </li>
        <li>
          <a href="#">iphone6</a>
        </li>
        <li>
          <a href="#">乐1</a>
        </li>
        <li>
          <a href="#">iphone6plus</a>
        </li>
        <li>
          <a href="#">佳能 600D</a>
        </li>
        <li>
          <a href="#">戴尔 XPS 13</a>
        </li>
      </ul>
    </div>
    <div class="header_img">
      <img src="../assets/images/icon/history_search.png">
    </div>
    <div class="history">
      <div class="rmssts">暂无搜索记录...</div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {}
  }
}
</script>
<style scoped>
.searchbox {
  display: flex;
  border-radius: 0.05rem;
  padding: 0.1rem 0;
  width: 85%;
}
.searchbox input {
  font-size: 0.14rem;
}
.set {
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -ms-flex-pack: center;
}
.top_box {
  position: relative;
  background: #fff;
  border-bottom: #eee solid 1px;
  padding: 0 0 0.1rem 0.5rem;
}
.search_bar {
  color: #333;
  font-size: 0.26rem;
  width: 90%;
  height: 0.3rem;
  line-height: 0.3rem;
  display: inline-block;
  border-radius: 0.1rem;
  padding: 0.2rem 0;
  border: 1px solid #eee;
  background-color: #f5f5f5;
  text-align: left;
  padding-left: 0.15rem;
}
.header_img {
  padding: 0.2rem 0 0.2rem 0;
}
.header_img img {
  width: 100%;
}
.suggestions {
  background: #fff;
  position: absolute;
  width: 100%;
  top: 0.9rem;
  left: 0px;
  display: block;
}
.set_list {
  width: 15%;
  text-align: center;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.28rem;
  background: url('../assets/images/icon/search-icon.png') no-repeat left center;
  background-size: 0.4rem;
}
.hot_mer_box {
  padding: 0 0.2rem 0.2rem 0.2rem;
}
.hot_mer_box li {
  float: left;
  padding: 0.02rem 0.2rem;
  background: #f5f5f5;
  margin: 0.2rem 0.2rem 0 0;
  border-radius: 0.08rem;
}
.hot_mer_box li a {
  font-size: 0.14rem;
  display: inline-block;
  line-height: 0.3rem;
}
.history .rmssts {
  text-align: center;
  color: #999;
  font-size: 0.14rem;
}
</style>