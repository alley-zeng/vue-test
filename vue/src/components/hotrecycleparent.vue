<template>
  <div class="hotRecyle clearfix">
    <div class="hot_header">
      <img src="../assets/images/icon/hot_recycle.png" alt>
    </div>
    <div class="hot_nav">
      <ul>
        <li
          v-for="(hotNavItem,index) in hotNavList"
          @click="chooseClick(index)"
          :key="hotNavItem.id"
          :class="{active:hotNavItem.isActive}"
        >{{hotNavItem.name}}</li>
      </ul>
    </div>
    <div class="hot_box">
      <div
        class="hot_content"
        :style="index==0?'display:block':''"
        v-for="(items,index) in hotRecyle"
        :key="index"
        :spid="items.spid"
      >
        <ul>
          <li>
            <div class="content_box">
              <div class="cp_img">
                <img :src="items.imgPath">
              </div>
              <div class="name">{{items.name}}</div>
              <div class="give_price">
                <span>¥ 1510</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hotRecyle',
  props: ['hotRecyle'],
  data: () => {
    return {
      hotNavList: [
        {
          name: '手机',
          isActive: true
        },
        {
          name: '平板',
          isActive: false
        },
        {
          name: '相机',
          isActive: false
        },
        {
          name: '电脑配件',
          isActive: false
        },
        {
          name: '大家电',
          isActive: false
        },
        {
          name: '智能设备',
          isActive: false
        }
      ],
      active: false
    }
  },
  methods: {
    chooseClick: function(listIndex) {
      const listCardCollection = document.querySelectorAll('.hot_content')
      const len = listCardCollection.length
      for (let i = 0; i < len; i++) {
        listCardCollection[i].style.display = 'none'
        this.hotNavList[i].isActive = false
      }
      this.hotNavList[listIndex].isActive = true
      listCardCollection[listIndex].style.display = 'block'
    }
  },
  mounted() {}
}
</script>
<style scoped>
/*热门回收菜单*/
.hotRecyle {
  padding-bottom: 0.2rem;
}
.hot_header {
  padding: 0.2rem 0;
  text-align: center;
}
.hot_header img {
  width: 21%;
}
.hot_nav ul {
  background: #f2f2f2;
  padding: 0.15rem 0.1rem;
  background-size: 0.3rem;
  display: -webkit-box;
  -webkit-align-items: center;
  align-items: center;
  overflow-y: hidden;
  -webkit-box-align: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  overflow-x: auto;
  z-index: 997;
}
.hot_nav ul li {
  height: 0.3rem;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.14rem;
  padding: 0 0.2rem;
}
.active {
  border: 1px solid #999;
  border-radius: 0.3rem;
}

/*热门回收商品*/
.hot_box {
  width: 90%;
  margin: 0.2rem;
}
.hot_content {
  display: none;
}
.hot_content ul li {
  width: 30%;
  text-align: center;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  -webkit-align-items: center;
  justify-content: space-around;
  -webkit-justify-content: space-around;
}

.content_box {
  text-align: center;
}
.cp_img {
  width: 70%;
  margin: 0 auto;
  text-align: center;
}
.cp_img img {
  width: 100%;
}
.give_price span {
  color: #fff;

  font-size: 0.12rem;
}
.name {
  font-size: 0.12rem;
}
.give_price {
  margin-top: 0.1rem;
  background: url('../assets/images/index/price_bg.png') no-repeat center;
  background-size: 70%;
  text-align: center;
  line-height: 0.2rem;
}
</style>