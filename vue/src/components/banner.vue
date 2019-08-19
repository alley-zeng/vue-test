<template>
  <div id="indexBanner" class="banner">
    <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(imgitems,index) in banner" :key="index">
        <img :src="imgitems.img" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  props: ['banner'],
  data() {
    return {
      swiperOption: {
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.swiper.el.onmouseover = function() {
      this.swiper.autoplay.stop()
    }
    this.swiper.el.onmouseout = function() {
      this.swiper.autoplay.start()
    }
  }
}
</script>
<style scoped>
.swiper {
  width: 100%;
}
swiper-slide {
  width: 100%;
}
img {
  width: 100%;
}
</style>


