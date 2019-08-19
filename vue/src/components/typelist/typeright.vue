<template>
  <div class="type_right">
    <div
      class="mer_list_box"
      v-for="(typeItems,index) in merItem"
      :key="index"
      :pcode="merItem.pcode"
    >
      <div class="mer_box clearfix">
        <div
          class="mer_list"
          v-for="(typeChild,childIndex) in typeItems.item"
          :key="childIndex.index"
        >
          <img :src="typeChild.img">
          <div class="li_name">{{typeChild.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['merItem'],
  name: 'type_right',
  data: () => {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>
<style scoped>
.type_right {
  padding-left: 30%;
  width: 100%;
  padding-top: 0.8rem;
}
.mer_header img {
  width: 80%;
}
.mer_list {
  float: left;
}
.mer_list img {
  width: 50%;
}
.li_name {
  text-align: center;
  font-size: 0.12rem;
}
</style> 