<template>
  <div class="header clearfix">
    <div class="block"></div>
    <div class="header_title">回收商品列表</div>
  </div>
</template>
<script>
export default {
  name: 'header',
  components: {},
  data: () => {
    return {}
  }
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 0.4rem;
  border-bottom: 1px solid #eee;
}
.header div {
  float: left;
  font-size: 0.14rem;
  line-height: 0.4rem;
}
.header_title {
  width: 89%;
  text-align: center;
}
.block {
  width: 0.23rem;
  height: 0.37rem;
  background: url('../assets/images/icon/icon_header.png') no-repeat -0.2rem 0.07rem;
  background-size: 0.4rem;
  margin-left: 0.1rem;
}
</style>
