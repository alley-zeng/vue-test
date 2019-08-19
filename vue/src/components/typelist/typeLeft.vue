<template>
  <div class="typeleft">
    <ul v-on:click.prevent>
      <li
        v-for="(items,index) in propMertype"
        :id="items.id"
        :key="index"
        :class="active === items ?'active':''"
        v-on:click="makeActive($event,items)"
      >{{items.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['propMertype'],
  data: () => {
    return {
      active: '热门回收'
    }
  },
  methods: {
    makeActive: function(e, items) {
      this.active = items
      this.$emit('give-advice', e.target.getAttribute('id')) //拿到当前选中的品类id传到父组件
    }
  }
}
</script>
<style scoped>
.typeleft {
  position: fixed;
  top: 0.8rem;
  width: 30%;
  height: 100%;
  background: #eee;
  padding-bottom: 1.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
  text-align: center;
}

ul li {
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.14rem;
}
.active {
  background: #fff;
  color: #d85a57;
}
</style>