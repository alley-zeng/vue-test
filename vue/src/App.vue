<template>
    <router-view></router-view>
</template>

<script>
import TopSearch from './components/topSearch.vue'
import banner from './components/banner.vue'
import typeList from './components/typeList.vue'
import StepList from './components/steplist.vue'
import HotRecyle from './components/hotrecycleparent.vue'
import BottomNav from './components/bottomnav.vue'
import IntroDucition from './components/Introduction.vue'
import  './assets/css/common.min.css'
export default {
    components: {
        TopSearch, 
        banner,
        typeList,
        StepList,
        HotRecyle,
        IntroDucition,
        BottomNav
    }
}
</script>

<style>
.index {
    font-family: PingFangSC-Regular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    padding-bottom: .6rem;
}
</style>
