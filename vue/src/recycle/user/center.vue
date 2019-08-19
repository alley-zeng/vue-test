<template>
    <div class="center">
        <center-top></center-top>
        <list-box></list-box>
        <bottom-nav class="icon_user"></bottom-nav>
    </div>
</template>

<script>
//  alert(img_domain);
    import centerTop from '../../components/user/header.vue'
    import listBox from '../../components/user/userlist.vue'
    import BottomNav from '../../components/bottomnav.vue'
    export default {
        name:'center',
        data:()=>{
            return{
                
            }
        },
        components:{
            centerTop,
            listBox,
            BottomNav
        }
    }
</script>

<style>
</style>