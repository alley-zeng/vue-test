<template>
  <div class="bottomnav">
    <ul class="clearfix">
      <li class="index">
        <img src="http://m.youdemai.com/images/index/recycle_index_icon/index_on_01.png" alt>
      </li>

      <li class="zuzheyong">
        <img src="http://m.youdemai.com/images/index/recycle_index_icon/zu_02.png" alt>
      </li>

      <li class="user" @click="user()">
        <img src="http://m.youdemai.com/images/index/recycle_index_icon/user_03.png" alt>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'bottomnav',
  data: () => {
    return {}
  },
  methods: {
    user: function() {
      this.$router.push({ path: '../user' })
    }
  }
}
</script>
<style scoped>
.bottomnav {
  position: fixed;
  bottom: -1px;
  z-index: 1;
  height: 0.5rem;
}
.bottomnav ul {
  width: 100%;
  height: 0.5rem;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-between;
  -webkit-justify-content: space-between;
}
.bottomnav ul li {
  height: 0.5rem;
  text-align: center;
}
.bottomnav ul li.index {
  height: 0.4rem;
  text-align: center;
}
.bottomnav ul li img {
  width: 100%;
}
</style>


