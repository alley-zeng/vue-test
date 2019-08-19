<template>
    <div class="loginbox">
        <div class="tel_box clearfix">
            <div class="phone left">+86</div>
            <div class="left input_phone"><input type="number" name="contactway" id="contactway" v-model="message" placeholder="请输入手机号码" value="" /></div>
        </div>
        <div class="code_box clearfix">
            <div class="code_input left"><input type="number" name="semcode" id="semcode" v-model="codemassage" v-on:input="checkSimCode"  placeholder="短信验证码" value="" /></div>
            <div class="right" @click="getcode">{{code_tips}}</div>
        </div>
        
        <!--二维码弹窗页面-->
        <mt-popup v-model="popupVisible1" popup-transition="popup-fade" position="right" class="mint-popup-1 mint-popup-right" closeOnClickModal="modelsss">
            <div class="code_conta">
                <div class="code_tips">输入下方数字</div>
                <div class="codse_img_box">
                    <img id="verifyCode" :src="code_img"/>
                </div>
                <div class="code_input_box">
                    <input type="number" name="imgcode" id="imgcode" value="" v-model="img_code" v-on:input="addEventCodeInput" autofocus="autofocus" />
                    <div class="btm_line line1 linebg"></div>
                    <div class="btm_line line2"></div>
                    <div class="btm_line line3"></div>
                    <div class="btm_line line4"></div>
                </div>
            </div>
        </mt-popup>
        
    </div>
</template>

<script>
    import Vue from 'vue'
    import popbox from '../../assets/script/popup.js';
    import {Popup} from 'mint-ui';

    Vue.component(Popup.name, Popup);
    let totleTime = 60;
    
    let timeFlag = true;
    export default{
        name:'loginbox',
        data:()=>{
            return{
                message: '',
                codemassage:'',
                img_code:'',
                code_tips:'获取验证码',
                popupVisible1: false,
                modelsss:false,
                getCodeFlag:false,
                code_img:''
            }
        },
        methods: {
            getcode:function(){
                if(timeFlag){
                    timeFlag = false;
                    const loginTime = localStorage.getItem('loginTime');
                    if(this.message == ''){
                        this.$commonjs.toast('手机号不能为空');
                        timeFlag = true;
                    }else{
                        if(this.$commonjs.checkMobile(this.message)){
                            if(loginTime >= 5){
                                timeFlag = true;
                                this.popupVisible1 = true;
                                const img=document.getElementById("verifyCode");  
                                img.src = this.$commonjs.urlPath()+'/login/create?w=120&h=60';
                            }else{
                                this.getSimCode();
                            }
                        }else{
                            timeFlag = true;
                            this.$commonjs.toast('手机号错误');
                        }
                    }
                }else{
                    this.$commonjs.toast('稍后再试');
                }
            },
            getSimCode(){
                this.getCodeFlag=true;//设置已经获取到验证的标记
                const loginTime = localStorage.getItem('loginTime');
                console.log(loginTime);
                const url = this.$commonjs.urlPath()+'/login/sendverifycode';
                //你要传给后台的参数值 key/value
                const params = new URLSearchParams();
                params.append('mobile', this.message);
                params.append('flag', 'atlg');
                this.$axios({method: 'post',url:url,data:params}).then((res)=>{
                    timeFlag = true;
                    if(res.data.flag == 'Y'){
                        if(loginTime != undefined && loginTime != null && loginTime != ''){
                            localStorage.setItem('loginTime', localStorage.getItem('loginTime')*1+1);
                        }else{
                            localStorage.setItem('loginTime',1);
                        }
                        timeFlag = false;
                        this.timeCount();
                    }else{
                        this.$commonjs.toast(res.data['flag']);
                    }
                }).catch(function (err) {
                    console.log(err);
                })
            },
            addEventCodeInput(){
                //设置光标位置
                for(let k=0;k<4;k++){
                    if(k==this.img_code.length){
                        document.getElementsByClassName('btm_line')[k].classList.add('linebg');
                    }else{
                        document.getElementsByClassName('btm_line')[k].classList.remove('linebg');
                    }
                }
                
                if(this.img_code.length > 4){
                    this.img_code = this.img_code.slice(0,4);
                }else if(this.img_code.length == 0){
                    document.getElementsByClassName('btm_line')[0].innerHTML='';
                }else{
                    for(let y in this.img_code){
                        document.getElementsByClassName('btm_line')[y].innerHTML=this.img_code[y];
                        const coes_leng = 4-this.img_code.length;
                        for(let s=0;s<coes_leng;s++){
                            document.getElementsByClassName('btm_line')[3-s].innerHTML='';
                        }
                    }
                    
                }
                
                if(this.img_code.length == 4){
                    const url = this.$commonjs.urlPath()+'/login/verify';
                    //你要传给后台的参数值 key/value
                    const params = new URLSearchParams();
                    params.append('code', this.img_code);
                    params.append('flag', 'ATMLG');
                    this.$axios({method: 'post',url:url,data:params}).then((res)=>{
                        console.log(res);
                        if(res.data.flag == 'Y'){
                            this.getSimCode();
                            this.popupVisible1=false;
                        }else{
                            this.$commonjs.toast(res.data['flag']);
                        }
                    }).catch(function (err) {
                        console.log(err);
                    })
                }
                
            },
            checkSimCode(){
                if(this.message){
                    if(this.$commonjs.checkMobile(this.message)){
                        if(this.getCodeFlag){
                            if(this.codemassage.length == 6){
                                const url = this.$commonjs.urlPath()+'/login/userlogin';
                                //你要传给后台的参数值 key/value
                                const params = new URLSearchParams();
                                params.append('mobile', this.message);
                                params.append('smsCode', this.codemassage);
                                this.$axios({method: 'post',url:url,data:params}).then((res)=>{
                                    if(res.data.flag == 'Y'){
                                        console.log('登录成功');
                                    }else{
                                        this.$commonjs.toast(res.data['flag']);
                                    }
                                }).catch(function (err) {
                                    console.log(err);
                                })
                            }
                        }else{
                            this.message = '';
                            document.getElementById('semcode').value='';
                            this.$commonjs.toast('要先获取验证码哦');
                        }
                    }else{
                        this.$commonjs.toast('填写正确的手机号');
                    }
                }else{
                    this.message = '';
                    document.getElementById('semcode').value='';
                    this.$commonjs.toast('手机号不能为空');
                }
            },
            errPopTips(val){
                popbox.$emit("popFun",val);   //$emit这个方法会触发一个事件
            },
            timeCount(){
                if(totleTime <= 0){
                    totleTime = 60;
                    this.code_tips = '重新获取';
                    timeFlag = true;//回复标记
                    this.getCodeFlag=false;
                }else{
                    --totleTime;
                    this.code_tips = totleTime+'s';
                    setTimeout(()=>{
                        this.timeCount();
                    },1000);
                }
            }
        }
    }
</script>

<style scoped>
    .loginbox{width: 90%;margin: 0 auto;}
    .loginbox .tel_box{border-bottom: 1px solid #F5F5F5;padding: 0.1rem 0.2rem;}
    .loginbox .tel_box .phone{width: 13%;line-height: 40px;font-size: 0.15rem;opacity: 0.8;background: url(https://img01.youdemai.com/images/ydmapp/common/icon/icon_right.png)no-repeat right center;background-size: 0.07rem;}
    .loginbox .tel_box .input_phone{width: 80%;}
    .loginbox .code_box{border-bottom: 1px solid #F5F5F5;padding: 0.1rem 0.2rem;}
    .loginbox .code_box .right{line-height: 0.4rem;font-size: 0.14rem;}
    .loginbox .code_box  .code_input{width: 60%;}
    
    .code_conta{width: 80%;margin: 1.0rem auto 0;text-align: center;}
    .code_conta .code_tips{font-size: 0.3rem;}
    .code_conta .code_input_box{position: relative;}
    .code_conta .code_input_box .btm_line{position: absolute;top: 0;border: 0;width: 19%;height: 40px;line-height: 40px;border-bottom: 1px solid #F5F5F5;}
    .code_conta .code_input_box .btm_line.linebg{background: url(https://t.alipayobjects.com/images/rmsweb/T1nYJhXalXXXXXXXXX.gif)no-repeat 70% 0.1rem;background-size: 0.025rem;}
    .code_conta .code_input_box .btm_line.line1{left: 0;}
    .code_conta .code_input_box .btm_line.line2{left: 27%;}
    .code_conta .code_input_box .btm_line.line3{left: 54%;}
    .code_conta .code_input_box .btm_line.line4{left: 81%;}
    .code_conta .code_input_box input{opacity: 0;}
    
    .mint-popup-1{width: 100%;left: 0%;top: 0%;height: 100%;-webkit-transform: translate3d(0, 0, 0);transform: translate3d(0, 0, 0);}
</style>