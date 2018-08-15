import Vue from 'vue'
import { Toast } from 'mint-ui';
let instance;
let IsNext = true;
let isError = false;
let Valiete = function(el, opt) {
    this.element = el;
    this.options = {
        renderTo: opt.renderTo || "", //ajax容器
        success: opt.success || function() {}, //ajax成功后的回调函数
        errorTips: opt.errorTips || function(msg) {
            instance = Toast(msg);
        }
    };
};

function Validatecheck(element, type, value) {
    let $validateStr = value.replace(/(^\s*)|(\s*$)/g, "");
    switch (type) {
        case "required":
            return /[^(^\s*)|(\s*$)]/.test($validateStr);
        case "chinese":
            return /^[\u0391-\uFFE5]+$/.test($validateStr);
        case "number":
            return /^([+-]?)\d*\.?\d+$/.test($validateStr);
        case "integer":
            return /^-?[1-9]\d*$/.test($validateStr);
        case "plusinteger":
            return /^[1-9]\d*$/.test($validateStr);
        case "unplusinteger":
            return /^-[1-9]\d*$/.test($validateStr);
        case "znumber":
            return /^[1-9]\d*|0$/.test($validateStr);
        case "fnumber":
            return /^-[1-9]\d*|0$/.test($validateStr);
        case "double":
            return /^[-\+]?\d+(\.\d+)?$/.test($validateStr);
        case "plusdouble":
            return /^[+]?\d+(\.\d+)?$/.test($validateStr);
        case "unplusdouble":
            return /^-[1-9]\d*\.\d*|-0\.\d*[1-9]\d*$/.test($validateStr);
        case "english":
            return /^[A-Za-z]+$/.test($validateStr);
        case "username":
            return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/.test($validateStr);
        case "mobile":
            return /^\s*(15\d{9}|13\d{9}|14\d{9}|17\d{9}|18\d{9}|19\d{9})\s*$/.test($validateStr);
        case "phone":
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/.test($validateStr);
        case "tel":
            return /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}?$|15[89]\d{8}?$|170\d{8}?$|147\d{8}?$/.test($validateStr) || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/.test($validateStr);
        case "email":
            return /^[^@]+@[^@]+\.[^@]+$/.test($validateStr);
        case "url":
            return /^(http|https):\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test($validateStr);
        case "ip":
            return /^[\d\.]{7,15}$/.test($validateStr);
        case "qq":
            return /^[1-9]\d{4,10}$/.test($validateStr);
        case "currency":
            return /^\d+(\.\d+)?$/.test($validateStr);
        case "zipcode":
            return /^[1-9]\d{5}$/.test($validateStr);
        case "chinesename":
            return /^[\u4e00-\u9fa5]{2,30}$/.test($validateStr);
        case "englishname":
            return /^[A-Za-z]{1,161}$/.test($validateStr);
        case "age":
            return /^[1-99]?\d*$/.test($validateStr);
        case "date":
            return /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-))$/.test($validateStr);
        case "datetime":
            return /^((((1[6-9]|[2-9]\d)\d{2})-(0?[13578]|1[02])-(0?[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})-(0?[13456789]|1[012])-(0?[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})-0?2-(0?[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))-0?2-29-)) (20|21|22|23|[0-1]?\d):[0-5]?\d:[0-5]?\d$/.test($validateStr);
        case "idcard":
            return /^(\d{17})([0-9]|X)$/.test($validateStr);
        case "bigenglish":
            return /^[A-Z]+$/.test($validateStr);
        case "smallenglish":
            return /^[a-z]+$/.test($validateStr);
        case "color":
            return /^#[0-9a-fA-F]{6}$/.test($validateStr);
        case "ascii":
            return /^[\x00-\xFF]+$/.test($validateStr);
        case "md5":
            return /^([a-fA-F0-9]{32})$/.test($validateStr);
        case "zip":
            return /(.*)\.(rar|zip|7zip|tgz)$/.test($validateStr);
        case "img":
            return /(.*)\.(jpg|gif|ico|jpeg|png)$/.test($validateStr);
        case "doc":
            return /(.*)\.(doc|xls|docx|xlsx|pdf)$/.test($validateStr);
        case "mp3":
            return /(.*)\.(mp3)$/.test($validateStr);
        case "video":
            return /(.*)\.(rm|rmvb|wmv|avi|mp4|3gp|mkv)$/.test($validateStr);
        case "flash":
            return /(.*)\.(swf|fla|flv)$/.test($validateStr);
        default:
            var $test = type.split('#');
            if ($test.length > 1) {
                switch ($test[0]) {
                    case "compare":
                        return eval(Number($validateStr) + $test[1]);
                    case "regexp":
                        return new RegExp($test[1], "gi").test($validateStr);
                    case "length":
                        var $length;
                        $length = $validateStr.replace(/[\u4e00-\u9fa5]/g, "*").length;
                        return eval($length + $test[1]);
                    default:
                        return true;
                }
            } else {
                return true;
            }
    }
};

function validateCheck(el, renderTo, errorTips) {
    let e = el;
    let rongqi = renderTo;
    let $checkdata = e.dataset.validate.split(',');
    let $checkvalue = e.value;
    let $checkstate = true;
    let $checktext = "";
    if (e.getAttribute("placeholder") == $checkvalue) {
        $checkvalue = "";
    }
    if ($checkvalue != "" || e.getAttribute("data-validate").indexOf("required") >= 0) {
        for (let i = 0; i < $checkdata.length; i++) {
            let $checktype = $checkdata[i].split(':');
            if (!Validatecheck(e, $checktype[0], $checkvalue)) {
                $checkstate = false;
                $checktext += $checktype[1];
                break;
            }
        }
    };
    if ($checkstate) {
        IsNext = true;
        isError = false;
    } else {
        isError = true;
        e.focus();
        IsNext = false;
        errorTips($checktext);
    }

};
Valiete.prototype = {
    ajaxSubmit: function() {
        typeof instance != 'undefined' && instance.close();
        IsNext = true;
        let obj = this;
        let renderto = obj.options.renderTo;
        let errorTips = obj.options.errorTips;
        let rongqi = renderto;
        let el = obj.element.$refs.form.querySelectorAll('[data-validate]');
        for (let r = 0; r < el.length; r++) {
            if (IsNext) {
                validateCheck(el[r], renderto, errorTips)
            }
        }
        if (isError) {
            return false;
        }
        obj.options.success(obj.element.$refs.form);
        return false;
    }
}
let PP100AjaxSubmit = function(vm, options) {
    let valiete = new Valiete(vm, options);
    return valiete.ajaxSubmit();
};
export default PP100AjaxSubmit;