<template>
  <div id="typeList" class="type_list">
    <div class="hot_type_list">
      <div>
        <img src="../assets/images/index/category_01.png" alt>
        <img class="hot_icon" src="../assets/images/icon/icon_hot.png" alt>
      </div>
      <div>
        <img src="../assets/images/index/category_02.png" alt>
        <img class="hot_icon" src="../assets/images/icon/icon_hot.png" alt>
      </div>
    </div>
    <div class="hot_type_list other_type_list">
      <div>
        <img src="../assets/images/index/category_03.png" alt>
      </div>
      <div>
        <img src="../assets/images/index/category_04.png" alt>
      </div>
      <div>
        <img src="../assets/images/index/category_05.png" alt>
      </div>
    </div>
    <div class="hot_type_list other_type_list">
      <div>
        <img src="../assets/images/index/category_06.png" alt>
      </div>
      <div>
        <img src="../assets/images/index/category_07.png" alt>
      </div>
      <div>
        <img src="../assets/images/index/category_08.png" alt>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'typeList',
  data() {
    return {}
  },
  methods: {
    goBrandJ() {
    //   this.$router.push({ name: 'brandlist', params: { mertype: 'J' } })
    }
  },
  mounted: function() {
  }
}
</script>
<style scoped>
.type_list {
  width: 90%;
  margin: 0.2rem auto 0;
  border: 1px solid #eee;
  border-bottom: none;
}
.hot_type_list {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  border-bottom: 1px solid #eee;
}
.hot_type_list div {
  width: 50%;
  text-align: center;
  border-right: 1px solid #eee;
  position: relative;
}
.hot_type_list div:last-child {
  border-right: none;
}
.hot_type_list div img {
  width: 66%;
}
.hot_type_list div img.hot_icon {
  width: 0.5rem;
  position: absolute;
  top: 0.1rem;
  right: 0.1rem;
}
.other_type_list div {
  flex: 1;
  border-right: 1px solid #eee;
}
.other_type_list div img {
  width: 100%;
}
</style>