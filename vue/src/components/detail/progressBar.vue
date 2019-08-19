<template>
  <div class="progress_box">
    <div class="progress_bar">
      <div class="bar">1/9</div>
    </div>
    <div class="mername">iPhone7</div>
  </div>
</template>
<script>
export default {
  name: 'progressBar',
  data: () => {
    return {}
  }
}
</script>
<style scoped>
.progress_box {
  width: 100%;
  height: 1rem;
  position: fixed;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
}
.progress_bar {
  background: #f5f5f5;
}
.bar {
  height: 0.2rem;
  line-height: 0.2rem;
  width: 20%;
  transition: width 0.5s;
  background: #d85a57;
  text-align: right;
  color: #fff;
  font-size: 0.14rem;
}
.mername {
  font-size: 0.4rem;
  padding: 0.15rem 0.2rem;
  height: 0.7rem;
}
</style>

