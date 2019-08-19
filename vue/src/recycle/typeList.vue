<template>
  <div class="typelist">
    <!-- <header-top></header-top> -->
    <type-left v-on:give-advice="showAdvice" :prop-mertype="merType"></type-left>
    <type-right :mer-item="merItem"></type-right>
  </div>
</template>
<script>
import typeLeft from '../components/typelist/typeLeft.vue'
import typeRight from '../components/typelist/typeright.vue'
// import headerTop from '../components/headerTop.vue'
export default {
  name: 'typelist',
  components: {
    typeLeft,
    typeRight
    // headerTop
  },
  data() {
    return {
      types: '',
      merItem: [],
      merType: []
    }
  },
  methods: {
    showAdvice: function(advice) {
      this.types = advice
    }
  },
  mounted: function() {
    this.$http({
      methods: 'post',
      url: 'http://m.ydm.com/androidapp283/product/typelist' //本地
      // url: 'https://m.youdemai.com/androidapp283/product/typelist'//线上
    })
      .then(res => {
        console.log(res.data)
        this.merItem = res.data.merItem
        this.merType = res.data.merType
      })
      .catch(function(err) {
        console.log(err)
      })
  }
}
</script>
<style scoped>
.typelist {
  width: 100%;
  height: 100%;
}
</style>