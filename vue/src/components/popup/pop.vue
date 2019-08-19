<template>
    <div class="pop_conta">
        <div class="popbox" v-bind:class="popslide" @click="closePop">
            <div class="pop_box" v-bind:class="[scale,pop_tips]">   <!--message[0]==1-->
                <div class="silgle_text">{{btext}}</div>
            </div>
            <div class="pop_box" v-bind:class="[scale,pop_btm]">    <!--message[0]==2-->
                <div class="silgle_text">{{btext}}</div>
                <div class="cdd">222222</div>
            </div>
            <div class="pop_box" v-bind:class="[scale,pop_code]">
                <div class="box_tips">输入下方二维码</div>
                <div class="code_box clearfix">
                    <div class="in_box left"><input type="number" id="imgcode" name="imgcode" value="" /></div>
                    <div class="img right"><img :src="code_img"/></div>
                </div>
            </div>
        </div>
        <div class="toast" v-bind:class="toastbox">{{toast}}</div>
    </div>
</template>

<script>
    import popbox from '../../assets/script/popup.js'
    export default{
        name:'pop_conta',
        data:()=>{
            return{
                popslide:'hide',
                scale:'scale',
                btext:'',           //实体字
                pop_tips:'hide',    //控制第一个弹窗
                pop_btm:'hide',     //控制第二个弹窗
                pop_code:'hide',    //控制二维码弹窗
                popIndex:1,
                toast:'',           //toast显示的内容
                toastbox:'',        //控制toast显示
                code_img:''          //二维码图片地址
            }
        },
        created:function(){
           this.showpop();
        },
        methods:{
            //弹窗参数说明：--------------------------------------------------------------------
            // message[0]为弹窗的类型，按照pop_box的顺序。当message[0]为tshow时底部提示
            //message[1]为close时 为弹窗是否可以自动关闭
            //message[2]为弹窗主要提示的信息
            
            showpop:function(){
                popbox.$on("popFun",(message)=>{   //这里最好用箭头函数，不然this指向有问题
                    if(message.length){
                        this.popIndex = message[0];//设置弹窗的类型
                        if(message[0] == 'toast'){
                            this.toastbox='tshow';
                            this.toast=message[2];
                            setTimeout(()=>{
                                this.toastbox='';
                                this.toast=message[2];
                            },1500);
                        }else{
                            this.popslide=''; //显示popbox弹窗...
                            //对不同的参数进行分类，显示不同的弹窗
                            if(message[0] == 'imgcode'){
                                setTimeout(()=>{
                                    this.scale='';
                                },200);
                            }else{
                                if(message[0] == 1){
                                    this.pop_tips='';
                                }else if(message[0] == 2){
                                    this.pop_btm='';
                                }
                                setTimeout(()=>{
                                    this.scale='';
                                    this.btext = message[2]; //2设置消息主体
                                },200);
                                if(message[1] == 'close'){
                                    setTimeout(()=>{
                                        this.closePop();
                                    },2000);
                                }
                            }
                        }
                        
                    }
                })
            },
            closePop(){
                this.scale='scale';
                setTimeout(()=>{
                    this.popslide='hide';
                    this.pop_tips='hide';
                },200)
            }
        }
    }
</script>

<style scoped>
    .toast{position: fixed;bottom: 0rem;width: 40%;left: 30%;text-align: center;border-radius: 0.2rem;font-size: 0.16rem;padding: 0.05rem 0;color:#fff;background:#D85A57;-webkit-transition: all .2s;transition:all .2s;transform: translateY(100%);-webkit-transform: translateY(100%);opacity: 0.8;}
    .toast.tshow{transform: translateY(-200%);-webkit-transform: translateY(-200%);}
    
    .popbox{position: fixed;position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,0.4);}
    .pop_box{position: fixed;width: 80%;left: 10%;top: 30%;background: #fff;text-align: center;border-radius: 0.1rem;-webkit-transition: all .3s;transition:all .3s;}
    .pop_box.scale{transform: scale(0);}
    .pop_box .silgle_text{line-height: 0.8rem;}
</style>