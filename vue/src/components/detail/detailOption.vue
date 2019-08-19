<template>
  <div class="detailOption">
    <div class="detail_content">
      <div class="detail_outside">
        <div class="header_name">商品渠道</div>
        <div class="text ellipsis">大陆国行（有“进网许可”标签）</div>
        <div class="modify">修改</div>
      </div>
      <div class="detail_inside">
        <div>大陆国行（有“进网许可”标签）</div>
        <div>香港行货（全球联保）</div>
        <div>水货无锁（其他地区，无需解锁）</div>
        <div>水货有锁（其他地区，需卡贴解锁）</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detailOption',
  data: () => {
    return {}
  }
}
</script>
<style scoped>
.detailOption {
  padding-top: 1.2rem;
  background: #fff;
}
.detail_content {
  border-bottom: 1px solid #f5f5f5;
}
.detail_outside {
  padding: 0.1rem 0;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-around;
  -webkit-justify-content: space-around;
}
.modify {
  color: #d85a57;
  font-size: 0.14rem;
}
.header_name {
  font-size: 0.2 rem;
  font-weight: bold;
}
.text {
  text-align: right;
  color: #666;
  font-size: 0.14rem;
}
</style>