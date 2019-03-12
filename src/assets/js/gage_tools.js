/*
 * gage_tools.js v0.2.6
 * (c) gage(591033791@qq.com)
 * update 2017/7/22 - 2019/3/12
 * Native JavaScript Tool Library
 */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.gage = factory());
})(this, function() {
    'use strict';
    var gage = function() {}
    var document = window.document;

    gage.extend = function() {
        var arg = arguments,
            argLen = arg.length;
        var i = 1,
            key;
        var target = arg[0];
        target === null ? target = {} : 0;
        if (argLen === 1) {
            target = this;
            i = 0;
        }
        for (; i < argLen; i++) {
            for (key in arg[i]) {
                if (arg[i].hasOwnProperty(key)) {
                    target[key] = arg[i][key];
                }
            }
        }
        return target;
    }

    gage.isObj = function(obj) {
        return (typeof obj === 'object' && obj !== null) || typeof obj === 'function';
    }

    gage.getObjType = function(obj) {
        if (!gage.isObj(obj)) {
            return obj === null ? null : typeof obj;
        }
        return {}.toString.call(obj).slice(8, -1);
    }

    /* 本地数据存储 */
    gage.extend({
        /**
         * set localStorage or sessionStorage
         * name(必填): string类型
         * data(必填): string或object类型
         * session(选填): string类型,传入"session"设置sessionStorage
         * cacheHours(选填): number类型,以小时为单位
         */
        setStorage: function(name, data, session, cacheHours) {
            if (gage.getObjType(data) === 'Object') {
                if (cacheHours) {
                    data.expires = (new Date()).getTime() + 3600000 * cacheHours;
                }
            } else {
                if (cacheHours) {
                    var obj = {};
                    obj[name] = data;
                    obj.cacheHours = cacheHours;
                    obj.expires = (new Date()).getTime() + 3600000 * cacheHours;
                    data = obj;
                }
            }
            data = JSON.stringify(data);
            session !== 'session' ? localStorage.setItem(name, data) : sessionStorage.setItem(name, data);
        },
        getStorage: function(name, session) {
            var obj = null;
            if (session !== 'session') {
                obj = localStorage.getItem(name);
            } else {
                obj = sessionStorage.getItem(name);
            }
            if (obj !== null && ~obj.indexOf('"')) {
                obj = JSON.parse(obj);
            }
            if (gage.getObjType(obj) === 'Object') {
                if (obj.cacheHours && obj.expires) {
                    obj = obj.expires > (new Date()).getTime() ? obj[name] : null;
                } else if (obj.expires) {
                    obj = obj.expires > (new Date()).getTime() ? obj : null;
                    delete obj.expires;
                }
                return obj;
            }
            return obj;
        },
        removeStorage: function(name, session) {
            session !== 'session' ? localStorage.removeItem(name) : sessionStorage.removeItem(name);
        },
        /* set cookie */
        setCookie: function(name, data, iday, domain) {
            var odate = new Date();
            domain = domain || '';
            typeof data === 'object' && data !== null ? data = JSON.stringify(data) : 0;
            odate.setDate(odate.getDate() + (iday ? iday : undefined));
            document.cookie = name + "=" + encodeURIComponent(data) + ";expires=" + odate + ';domain=' + domain;
        },
        /* get cookie */
        getCookie: function(name) {
            var cookies = document.cookie;
            var arr1 = cookies.split("; ");
            for (i = 0; i < arr1.length; i++) {
                var arr2 = arr1[i].split("=");
                if (name === arr2[0]) {
                    try {
                        return JSON.parse(decodeURIComponent(arr2[1]));
                    } catch (e) {
                        return decodeURIComponent(arr2[1]);
                    }
                }
            }
            return null;
        },
        /* remove cookie */
        removeCookie: function(name) {
            gage.setCookie(name, "", "-1");
        },
    });

    /* 地址栏参数转换为对象 */
    gage.getUrlParam = function(url) {
        var obj = {};
        url = url || location.href;
        var params = url.replace(/.*\?+([^#]+).*/, '$1');
        params.replace(/([^&=]+)=([^&]*)/g, function(rs, $1, $2) {
            obj[$1] = decodeURIComponent($2);
        });
        return obj;
    }

    /* 校验表单 */
    gage.checkForm = function(sel) {
        var sel = document.querySelector(sel);
        var children = sel.querySelectorAll('input');
        for (var i = 0; i < children.length; i++) {
            var val = children[i];
            var type = val.getAttribute('type');
            if (val.getAttribute('required') != 'false') {
                if (type == 'text' || type == 'password') {
                    if (val.value == '' || val.length == 0) {
                        return [false, children[i]];
                    }
                }
            }
        }
        return [true];
    }

    /* 获取表单 */
    gage.getForm = function(sel, attribute) {
        var sel = document.querySelector(sel);
        var res = {};
        var children = sel.querySelectorAll('input');
        children.forEach(function(val) {
            var type = val.getAttribute('type');
            if (((type == 'radio' || type == 'checkbox') && val.checked) || type == 'text' || type == 'password') {
                if (val.getAttribute(attribute || 'data-val')) {
                    res[val.getAttribute('name')] = val.getAttribute('data-val');
                } else {
                    res[val.getAttribute('name')] = val.value;
                }
            }
        });
        return res;
    }

    /* 获取设备类型 */
    gage.deviceType = function() {
        var obj = {};
        if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
            obj.type = 'IOS';
        } else if (/(Android)/i.test(navigator.userAgent)) {
            obj.type = 'Android';
        } else {
            obj.type = 'PC';
        }
        if (/MicroMessenger/.test(navigator.userAgent)) {
            obj.isWeixin = true;
        }
        return obj;
    }

    /* 获取浏览器类型和版本 */
    gage.getExplore = function() {
        var sys = {},
            ua = navigator.userAgent.toLowerCase(),
            s;
        (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
            (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
        if (sys.ie) return ('ie:' + sys.ie)
        if (sys.edge) return ('edge:' + sys.edge)
        if (sys.firefox) return ('firefox:' + sys.firefox)
        if (sys.chrome) return ('chrome:' + sys.chrome)
        if (sys.opera) return ('opera:' + sys.opera)
        if (sys.safari) return ('safari:' + sys.safari)
        return 'unknown';
    }

    /* 图片上传返回base64图片或blob对象 */
    gage.imgUpLoad = function(file, callback, maxSize, returnType) {
        var ratio = 0.9;
        returnType = returnType ? returnType : 'base64';
        maxSize = maxSize ? maxSize : 200;
        if (!file || !window.FileReader) { return; }
        var Orientation = null;
        //若处理IOS的BUG需提前引入exif.js
        window.EXIF && EXIF.getData(file, function() {
            Orientation = EXIF.getTag(this, 'Orientation');
        });
        var reader = new FileReader();
        var image = new Image();
        reader.readAsDataURL(file);
        reader.onloadend = function() {
            image.src = this.result;
        }
        image.onload = function() {
            var canvas = document.createElement('canvas');
            if (this.width > 1000) {
                this.height *= 1000 / this.width;
                this.width = 1000;
            } else if (this.height > 750) {
                this.width *= 750 / this.height;
                this.height = 750;
            }
            canvas.width = this.width;
            canvas.height = this.height;
            var ctx = canvas.getContext('2d');
            var newImageData;
            while (ratio) {
                ctx.drawImage(this, 0, 0, canvas.width, canvas.height);
                switch (Orientation) {
                    case 6:
                        gage._rotateImg(this, 'left', canvas);
                        break;
                    case 8:
                        gage._rotateImg(this, 'right', canvas);
                        break;
                    case 3:
                        gage._rotateImg(this, 'right', canvas);
                        gage._rotateImg(this, 'right', canvas);
                        break;
                }
                newImageData = canvas.toDataURL('image/jpeg', ratio);
                if (gage.getBase64Size(newImageData) > maxSize && ratio > 0.1) {
                    ratio -= 0.05;
                } else {
                    ratio = 0;
                }
            }
            if (returnType !== 'base64') {
                callback && callback(gage._base64Toblob(newImageData));
            } else {
                callback && callback(newImageData);
            }
        }
    }

    /* 获取base64图片大小,kb为单位 */
    gage.getBase64Size = function(str) {
        if (str.indexOf("=") > 0) {
            str = str.substring(0, str.indexOf('='));
        }
        return parseInt((str.length - (str.length / 8) * 2) / 1024);
    }

    /* base64图片转blob对象 */
    gage._base64Toblob = function(base64) {
        var arr = base64.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    }

    /* base64图片旋转处理 */
    gage._rotateImg = function(img, direction, canvas) {
        var min_step = 0;
        var max_step = 3;
        if (img === null) return;
        var height = img.height;
        var width = img.width;
        var step = 2;
        if (step === null) {
            step = min_step;
        }
        if (direction === 'right') {
            step++;
            step > max_step && (step = min_step);
        } else {
            step--;
            step < min_step && (step = max_step);
        }
        var degree = step * 90 * Math.PI / 180;
        var ctx = canvas.getContext('2d');
        switch (step) {
            case 0:
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0);
                break;
            case 1:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, 0, -height);
                break;
            case 2:
                canvas.width = width;
                canvas.height = height;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, -height);
                break;
            case 3:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, 0);
                break;
        }
    }

    /* 传入年月日,生成时间戳 */
    gage.getTimestamp = function(dateStr, separator) {
        dateStr = dateStr || gage.getTime();
        separator && (dateStr = dateStr.replace(eval('/' + separator + '/g'), ''));
        return new Date(dateStr.slice(0, 4), dateStr.slice(4, 6) - 1, dateStr.slice(6, 8)).getTime();
    }

    /* 传入时间戳,返回年月日 */
    gage.getDate = function(timestamp, separator) {
        var date = timestamp ? new Date(timestamp) : new Date();
        var mouth = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
        var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        return date.getFullYear() + (separator || '') + mouth + (separator || '') + day;
    }

    /* 传入时间戳,返回年月日时分秒 */
    gage.getFormTime = function(timestamp) {
        var date = timestamp ? new Date(timestamp) : new Date();
        var mouth = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1);
        var day = date.getDate() > 9 ? date.getDate() : '0' + date.getDate();
        var hour = date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
        var minute = date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
        var second = date.getSeconds() > 9 ? date.getSeconds() : '0' + date.getSeconds();
        return date.getFullYear() + '-' + mouth + '-' + day + ' ' + hour + ':' + minute + ':' + second;
    }

    /* 数组去除重复元素 */
    gage.removeRepeat = function(array) {
        var arr = [];
        array.forEach(function(val) {
            ~arr.indexOf(val) ? 0 : arr.push(val);
        });
        return arr;
    }

    /* 数组的随机排序 */
    gage.randomSort = function(arr) {
        var rand, temp;
        for (var i = 0; i < arr.length; i++) {
            rand = parseInt(Math.random() * arr.length);
            temp = arr[rand];
            arr[rand] = arr[i];
            arr[i] = temp;
        }
        return arr;
    }

    /* 生成m到n范围的随机数 */
    gage.rangeNum = function(m, n) {
        return parseInt(Math.random() * (n - m + 1) + m);
    }

    /* 保留2位小数(向下取值) */
    gage.toFixed2 = function(val) {
        if (val === '' || isNaN(val)) { return ''; }
        var value = (parseInt(val * 100) / 100).toString();
        if (~val.toString().indexOf('.99999999999')) {
            value -= -0.01;
            value += '';
        }
        if (value.indexOf('.') < 0) { return value; }
        while (value.length <= value.indexOf('.') + 2) {
            value += '0';
        }
        return value;
    }

    /* Android端body宽高改变的回调 */
    gage.windowResize = function(upCb, downCb) {
        var client_h = document.documentElement.clientHeight;
        var client_w = document.documentElement.clientWidth;
        window.addEventListener("resize", function() {
            if (client_w !== document.documentElement.clientWidth) {
                client_w = document.documentElement.clientWidth;
                client_h = document.documentElement.clientHeight;
            }
            if (client_h > document.documentElement.clientHeight) {
                upCb && upCb();
            } else {
                downCb && downCb();
            }
        });
    }

    /* Android端focus的BUG和IOS微信端blur的BUG */
    gage.androidResize = function() {
        if (/Android/.test(navigator.appVersion)) {
            window.addEventListener("resize", function() {
                if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
                    setTimeout(function() { document.activeElement.scrollIntoViewIfNeeded(); }, 0);
                }
            })
        } else {
            $('body').on('blur', 'input', function() {
                setTimeout(function() { document.activeElement.scrollIntoViewIfNeeded(); }, 0);
            })
        }
    }

    /* base64加密解密 */
    gage.base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            if (!e) { return ''; }
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = this._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a);
            }
            return t;
        },
        decode: function(e) {
            if (!e) { return ''; }
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) { t = t + String.fromCharCode(r) }
                if (a != 64) { t = t + String.fromCharCode(i) }
            }
            t = this._utf8_decode(t);
            return t;
        },
        _utf8_encode: function(e) {
            e = e.replace(/rn/g, "n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128);
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128);
                }
            }
            return t;
        },
        _utf8_decode: function(e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c2 = 0;
            var c3 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++;
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2;
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3;
                }
            }
            return t;
        }
    }

    /* 数字千分位表示法 */
    gage.thousands = function(val) {
        if (!val) { return val; }
        val = val.toString();
        if (~val.indexOf('.')) {
            val = val.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        } else {
            val = val.replace(/(?=(?!(\b))(\d{3})+$)/g, ",");
        }
        return val;
    }

    return gage;
});