<template>
  <div class="steplist">
    <ul>
      <li>
        <div class="step_img">
          <img src="../assets/images/index/recycle_step01.png" alt>
        </div>
        <div class="step_text">搜索机型</div>
      </li>
      <li>
        <div class="step_img">
          <img src="../assets/images/index/recycle_step02.png" alt>
        </div>
        <div class="step_text">获得报价</div>
      </li>
      <li>
        <div class="step_img">
          <img src="../assets/images/index/recycle_step03.png" alt>
        </div>
        <div class="step_text">专业检测</div>
      </li>
      <li>
        <div class="step_img">
          <img src="../assets/images/index/recycle_step04.png" alt>
        </div>
        <div class="step_text">闪电收款</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'steplist',
  data: () => {
    return {}
  }
}
</script>
<style scoped>
.steplist {
  width: 100%;
  background: #f2f2f2;
  margin-top: 0.3rem;
  padding: 0.1rem 0;
}
.steplist ul {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-around;
  -webkit-justify-content: space-around;
}
.steplist ul li {
  width: 25%;
  text-align: center;
}
.steplist .step_img {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0 auto;
}
.steplist .step_img img {
  width: 100%;
}
.step_text {
  font-size: 0.12rem;
}
</style>
