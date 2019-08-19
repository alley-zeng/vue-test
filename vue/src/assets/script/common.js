import {Toast} from 'mint-ui';
const commonjs = {}
var phone = /^1[3456789]\d{9}$/;//手机号码正则表达式
commonjs.routers = function (rout_name,parms,_this) {
    _this.$router.push({name: rout_name,params:parms});
}
commonjs.imgPath = function(){
    return 'https://img01.youdemai.com'
}
commonjs.urlPath = function(){
    return 'http://172.16.5.82:8083/androidapp283'
}
commonjs.log = function (data){
    console.log(data);
}
commonjs.toast = function (val){
    Toast({
        message: val,
        position: 'bottom',
        duration: 2000,
    });
}

//检查手机号码是否符合规则
commonjs.checkMobile = function(mobile){
    var resultFlag = false;
    if(phone.test(mobile)){
        resultFlag = true;  
    }
    return resultFlag;
}

export default commonjs;