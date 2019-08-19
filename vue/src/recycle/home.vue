<template>
  <div class="index">
    <top-search></top-search>
    <banner :banner="bannerlist"></banner>
    <div class="main_list_category">
      <home-box :list="hotRecyle" :type="0"></home-box>
      <home-box :list="orthRecyle" :type="1"></home-box>
    </div>
    <step-list></step-list>
    <hot-recyle :hot-recyle="hotType"></hot-recyle>
    <intro-ducition></intro-ducition>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import TopSearch from '../components/topSearch.vue'
import banner from '../components/banner.vue'
import StepList from '../components/steplist.vue'
import HotRecyle from '../components/hotrecycleparent.vue'
import BottomNav from '../components/bottomnav.vue'
import IntroDucition from '../components/Introduction.vue'
import Box from '../components/home/hotrecycle'
export default {
  name: 'index',
  components: {
    HomeBox: Box,
    TopSearch,
    banner,
    StepList,
    HotRecyle,
    IntroDucition,
    BottomNav
  },
  data: () => {
    return {
      bannerlist: [
        { img: require('../assets/images/index/index_banner1.jpg') },
        { img: require('../assets/images/index/index_banner2.jpg') },
        { img: require('../assets/images/index/index_banner3.jpg') },
        { img: require('../assets/images/index/index_banner4.jpg') }
      ],
      hotType: [],
      hotRecyle: [
        {
          url: 'http://m.youdemai.com/images/index/category/category_01.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        },
        {
          url: 'http://m.youdemai.com/images/index/category/category_02.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        }
      ],
      orthRecyle: [
        {
          url: 'http://m.youdemai.com/images/index/category/category_03.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        },
        {
          url: 'http://m.youdemai.com/images/index/category/category_04.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        },
        {
          url: 'http://m.youdemai.com/images/index/category/category_05.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        },
        {
          url: 'http://m.youdemai.com/images/index/category/category_06.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        },
        {
          url: 'http://m.youdemai.com/images/index/category/category_07.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        },
        {
          url: 'http://m.youdemai.com/images/index/category/category_08.png',
          href: 'http://m.youdemai.com/product/product/typelist?mertype=A'
        }
      ]
    }
  },
  mounted: function() {
    this.$http({
      methods: 'post',
      url: 'https://m.youdemai.com/androidapp283/app/index'
    })
      .then(res => {
        console.log(res.data)
        this.hotType = res.data.hotType
        console.log(this.hotType)
        // this.hotRecyle = res.data.listType.top
        console.log(this.hotRecyle)
      })
      .catch(function(err) {
        console.log(err)
      })
  }
}
</script>

<style>
.index {
  font-family: PingFangSC-Regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-bottom: 0.6rem;
}
.main_list_category {
  width: 100%;
  padding: 0 0.2rem;
  margin-top: 0.2rem;
}
</style>