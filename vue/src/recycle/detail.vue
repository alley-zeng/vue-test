<template>
  <div class="detail">
    <progress-bar></progress-bar>
    <detail-option></detail-option>
  </div>
</template>
<script>
import progressBar from '../components/detail/progressBar.vue'
import detailOption from '../components/detail/detailOption.vue'
export default {
  name: 'detail',
  components: {
    progressBar,
    detailOption
  },
  data() {
    return {}
  },
  methods: {},
  mounted: function() {
    this.$http({
      url: 'https://m.youdemai.com/androidapp283/app/index',
      method: 'post' //请求方式
      //这里可以添加axios文档中的各种配置
    })
      .then(function(res) {
        console.log(res, '成功')
      })
      .catch(function(err) {
        console.log(err, '错误')
      })
  }
}
</script>
<style scoped>
.inquery_mername {
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.3rem;
  border-top: 1px solid #f5f5f5;
}
</style>
