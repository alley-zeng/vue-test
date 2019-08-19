<template>
  <div class="brandlist">
    <search></search>
    <brand-left></brand-left>
    <brand-right></brand-right>
  </div>
</template>
<script>
import search from '../components/brandlist/search.vue'
import brandLeft from '../components/brandlist/brandLeft.vue'
import brandRight from '../components/brandlist/brandRight.vue'
export default {
  name: 'brandlist',
  components: {
    search,
    brandLeft,
    brandRight
  },
  data: () => {
    return {}
  },
  mounted: function() {
    this.$http({
      methods: 'post'
      // url: 'http://m.ydm.com/androidapp283/product/typelist',
      // url: 'https://m.youdemai.com/androidapp283/product/typelist'
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(function(err) {
        console.log(err)
      })
  }
}
</script>
<style scoped>
</style>