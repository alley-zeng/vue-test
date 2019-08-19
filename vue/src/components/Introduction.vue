<template>
  <div class="introduction">
    <div class="header">
      <img src="../assets/images/icon/service_protect.png" alt>
    </div>
    <div class="service_list_container">
      <img src="../assets/images/icon/service_list.png">
    </div>
    <div class="service_text">
      <span>高价回收</span>
      <span>顺丰保价</span>
      <span>隐私保护</span>
    </div>
    <div class="show_contain">
      <ul class="clearfix">
        <li>
          <div id="user_number">520万</div>
          <div>名用户</div>
        </li>
        <li>
          <div>50+</div>
          <div>合作品牌</div>
        </li>
        <li>
          <div>40个</div>
          <div>城市服务</div>
        </li>
        <li>
          <div id="order_quantity">650万</div>
          <div>个成交订单</div>
        </li>
      </ul>
    </div>
    <div class="invstment">
      <div class="header">
        <img src="../assets/images/icon/propaganda.png">
      </div>
      <div class="img">
        <img src="../assets/images/icon/propaganda_img.png">
      </div>
    </div>
    <div class="header paddbottom">
      <img src="../assets/images/icon/swiper_partner.png">
    </div>
    <banner></banner>
  </div>
</template>
<script>
import banner from '../components/banner.vue'
export default {
  name: 'Introduction',
  components: {
    banner
  },
  data: () => {
    return {}
  }
}
</script>
<style scoped>
.header {
  padding: 0.2rem 0;
  text-align: center;
}
.header img {
  width: 21%;
}
.header.paddbottom {
  padding-bottom: 0;
}
.service_list_container img {
  width: 100%;
}
.service_text span {
  display: inline-block;
  width: 33.3%;
  text-align: center;
  color: #636363;
  font-size: 0.12rem;
}
.show_contain {
  margin-top: 0.1rem;
  border-top: 1px solid #eee;
}
.show_contain ul li {
  float: left;
  width: 25%;
  line-height: 0.4rem;
  box-sizing: border-box;
  text-align: center;
  padding: 0.1rem 0 0.18rem;
}
.show_contain ul li div:first-child {
  position: relative;
  color: #da3b26;
  font-size: 0.2rem;
  font-weight: bold;
}
.show_contain li div:last-child {
  color: #666;
  font-size: 0.14rem;
}
.invstment .img {
  background: #f2f2f2;
}
.invstment .img img {
  width: 100%;
}
</style>