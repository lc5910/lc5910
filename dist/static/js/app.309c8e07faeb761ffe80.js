webpackJsonp([6],{127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(192),r=n.n(o);t.default={name:"App",components:{backTop:r.a}}},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){t.default={data:function(){return{}},created:function(){},mounted:function(){e.$backTop("#backTop")},methods:{},computed:{},components:{}}}.call(t,n(85))},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n(79),i=(n(78),n(83)),a=n.n(i),c=n(77),s=n(80),u=n(47),d=n.n(u),l=n(81),f=(n.n(l),n(82));n.n(f);o.default.use(d.a),o.default.prototype.$http=c.a,o.default.config.productionTip=!1,new o.default({el:"#app",router:r.a,store:s.a,template:"<App/>",components:{App:a.a}})},181:function(e,t){},182:function(e,t){},192:function(e,t,n){n(181);var o=n(48)(n(128),n(193),"data-v-75c8dd54",null);e.exports=o.exports},193:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:"javascript:;",id:"backTop"}})])}]}},194:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),e._v(" "),n("backTop")],1)},staticRenderFns:[]}},77:function(e,t,n){"use strict";var o=n(108),r=n.n(o),i=r.a.create({timeout:1e4,headers:{"Content-Type":"application/json;charset=UTF-8"}});i.interceptors.response.use(function(e){return e.data},function(e){}),t.a=i},78:function(e,t,n){"use strict";var o=n(1),r=n(76);o.default.use(r.a),o.default.directive("trim",{inserted:function(e){e.addEventListener("input",function(){e.value=e.value.trim()},!1)}}),o.default.directive("focus",{inserted:function(e){e.focus()}}),o.default.directive("close",{inserted:function(e,t){var n=document.querySelector("."+t.value)||e.parentNode;e.addEventListener("click",function(){n.style.display="none"})}})},79:function(e,t,n){"use strict";(function(e){var o=n(1),r=n(76),i=n(47);n.n(i);o.default.use(r.a);var a=new r.a({routes:[{path:"/",name:"主页",redirect:{name:"calculator"}},{path:"/travel",name:"travel",component:function(e){n.e(4).then(function(){var t=[n(204)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/tools",name:"tools",component:function(e){n.e(0).then(function(){var t=[n(203)];e.apply(null,t)}.bind(this)).catch(n.oe)},children:[{path:"/tools/calculator",name:"calculator",component:function(e){n.e(1).then(function(){var t=[n(202)];e.apply(null,t)}.bind(this)).catch(n.oe)}},{path:"/tools/ECharts",name:"ECharts",component:function(e){n.e(2).then(function(){var t=[n(201)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]},{path:"/drawLottery",name:"drawLottery",component:function(e){n.e(3).then(function(){var t=[n(200)];e.apply(null,t)}.bind(this)).catch(n.oe)}}]});a.beforeEach(function(t,o,r){t.matched.some(function(e){return e.meta.requiresAuth})?e.getCookie("token")?r():(n.i(i.Message)({type:"warning",message:"你还没有登录，请登录后再操作",duration:1e3}),r({path:"/login",query:{redirect:t.fullPath}})):r();var a;if(~location.hostname.indexOf("lc5910.github.io")){a="31e4415e5b8e192b52c3df234ce1624a",_hmt.push(["_trackPageview","/#"+t.path]),document.getElementById("baidu_tj")&&document.getElementById("baidu_tj").remove();var c=document.createElement("script");c.id="baidu_tj",c.src="https://hm.baidu.com/hm.js?"+a;var s=document.getElementsByTagName("meta")[0];s.parentNode.insertBefore(c,s)}}),t.a=a}).call(t,n(84))},80:function(e,t,n){"use strict";var o=n(1),r=n(196),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};o.default.use(r.a);var a=new r.a.Store({});a.registerModule("app",{state:{isLoading:!0},mutations:{updateLoading:function(e,t){t?console.log("loading..."):console.log("loaded"),e.isLoading=t}},actions:{updateLoading:function(e,t){(0,e.commit)("updateLoading",t)}}}),o.default.mixin({methods:i({},n.i(r.b)(["updateLoading"])),computed:i({},n.i(r.c)({isLoading:function(e){return e.app.isLoading}}))}),t.a=a},81:function(e,t){},82:function(e,t){},83:function(e,t,n){n(182);var o=n(48)(n(127),n(194),null,null);e.exports=o.exports},84:function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__,_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===_typeof(exports)&&void 0!==module?module.exports=t():(__WEBPACK_AMD_DEFINE_FACTORY__=t,void 0!==(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof __WEBPACK_AMD_DEFINE_FACTORY__?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)&&(module.exports=__WEBPACK_AMD_DEFINE_RESULT__))}(0,function(){"use strict";var gage=function(){},document=window.document;return gage.extend=function(){var e,t=arguments,n=t.length,o=1,r=t[0];for(null===r&&(r={}),1===n&&(r=this,o=0);o<n;o++)for(e in t[o])t[o].hasOwnProperty(e)&&(r[e]=t[o][e]);return r},gage.isObj=function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&null!==e||"function"==typeof e},gage.getObjType=function(e){return gage.isObj(e)?{}.toString.call(e).slice(8,-1):null===e?null:void 0===e?"undefined":_typeof(e)},gage.extend({setStorage:function(e,t,n,o){if("Object"===gage.getObjType(t))o&&(t.expires=(new Date).getTime()+36e5*o);else if(o){var r={};r[e]=t,r.cacheHours=o,r.expires=(new Date).getTime()+36e5*o,t=r}t=JSON.stringify(t),"session"!==n?localStorage.setItem(e,t):sessionStorage.setItem(e,t)},getStorage:function(e,t){var n=null;return n="session"!==t?localStorage.getItem(e):sessionStorage.getItem(e),null!==n&&~n.indexOf('"')&&(n=JSON.parse(n)),"Object"===gage.getObjType(n)?(n.cacheHours&&n.expires?n=n.expires>(new Date).getTime()?n[e]:null:n.expires&&(n=n.expires>(new Date).getTime()?n:null,delete n.expires),n):n},removeStorage:function(e,t){"session"!==t?localStorage.removeItem(e):sessionStorage.removeItem(e)},setCookie:function(e,t,n,o){var r=new Date;o=o||"","object"===(void 0===t?"undefined":_typeof(t))&&null!==t&&(t=JSON.stringify(t)),r.setDate(r.getDate()+(n||void 0)),document.cookie=e+"="+encodeURIComponent(t)+";expires="+r+";domain="+o},getCookie:function(e){var t=document.cookie,n=t.split("; ");for(i=0;i<n.length;i++){var o=n[i].split("=");if(e===o[0])try{return JSON.parse(decodeURIComponent(o[1]))}catch(e){return decodeURIComponent(o[1])}}return null},removeCookie:function(e){gage.setCookie(e,"","-1")}}),gage.getUrlParam=function(e){var t={};return e=e||location.href,e.replace(/.*\?+([^#]+).*/,"$1").replace(/([^&=]+)=([^&]*)/g,function(e,n,o){t[n]=decodeURIComponent(o)}),t},gage.deviceType=function(){return/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)?"IOS":/(Android)/i.test(navigator.userAgent)?"Android":"PC"},gage.getExplore=function(){var e,t={},n=navigator.userAgent.toLowerCase();return(e=n.match(/rv:([\d.]+)\) like gecko/))?t.ie=e[1]:(e=n.match(/msie ([\d\.]+)/))?t.ie=e[1]:(e=n.match(/edge\/([\d\.]+)/))?t.edge=e[1]:(e=n.match(/firefox\/([\d\.]+)/))?t.firefox=e[1]:(e=n.match(/(?:opera|opr).([\d\.]+)/))?t.opera=e[1]:(e=n.match(/chrome\/([\d\.]+)/))?t.chrome=e[1]:(e=n.match(/version\/([\d\.]+).*safari/))&&(t.safari=e[1]),t.ie?"ie:"+t.ie:t.edge?"edge:"+t.edge:t.firefox?"firefox:"+t.firefox:t.chrome?"chrome:"+t.chrome:t.opera?"opera:"+t.opera:t.safari?"safari:"+t.safari:"unknown"},gage.imgUpLoad=function(e,t,n,o){var r=.9;if(o=o||"base64",n=n||200,e&&window.FileReader){var i=null;window.EXIF&&EXIF.getData(e,function(){i=EXIF.getTag(this,"Orientation")});var a=new FileReader,c=new Image;a.readAsDataURL(e),a.onloadend=function(){c.src=this.result},c.onload=function(){var e=document.createElement("canvas");this.width>1e3?(this.height*=1e3/this.width,this.width=1e3):this.height>750&&(this.width*=750/this.height,this.height=750),e.width=this.width,e.height=this.height;for(var a,c=e.getContext("2d");r;){switch(c.drawImage(this,0,0,e.width,e.height),i){case 6:gage._rotateImg(this,"left",e);break;case 8:gage._rotateImg(this,"right",e);break;case 3:gage._rotateImg(this,"right",e),gage._rotateImg(this,"right",e)}a=e.toDataURL("image/jpeg",r),gage.getBase64Size(a)>n&&r>.1?r-=.05:r=0}"base64"!==o?t&&t(gage._base64Toblob(a)):t&&t(a)}}},gage.getBase64Size=function(e){return e.indexOf("=")>0&&(e=e.substring(0,e.indexOf("="))),parseInt((e.length-e.length/8*2)/1024)},gage._base64Toblob=function(e){for(var t=e.split(","),n=t[0].match(/:(.*?);/)[1],o=atob(t[1]),r=o.length,i=new Uint8Array(r);r--;)i[r]=o.charCodeAt(r);return new Blob([i],{type:n})},gage._rotateImg=function(e,t,n){if(null!==e){var o=e.height,r=e.width,i=2;null===i&&(i=0),"right"===t?++i>3&&(i=0):--i<0&&(i=3);var a=90*i*Math.PI/180,c=n.getContext("2d");switch(i){case 0:n.width=r,n.height=o,c.drawImage(e,0,0);break;case 1:n.width=o,n.height=r,c.rotate(a),c.drawImage(e,0,-o);break;case 2:n.width=r,n.height=o,c.rotate(a),c.drawImage(e,-r,-o);break;case 3:n.width=o,n.height=r,c.rotate(a),c.drawImage(e,-r,0)}}},gage.getTimestamp=function(dateStr,separator){return dateStr=dateStr||gage.getTime(),separator&&(dateStr=dateStr.replace(eval("/"+separator+"/g"),"")),new Date(dateStr.slice(0,4),dateStr.slice(4,6)-1,dateStr.slice(6,8)).getTime()},gage.getTime=function(e,t){var n=e?new Date(e):new Date,o=n.getMonth()+1>9?n.getMonth()+1:"0"+(n.getMonth()+1),r=n.getDate()>9?n.getDate():"0"+n.getDate();return n.getFullYear()+(t||"")+o+(t||"")+r},gage.removeRepeat=function(e){var t=[];return e.forEach(function(e){~t.indexOf(e)||t.push(e)}),t},gage.randomSort=function(e){for(var t,n,o=0;o<e.length;o++)t=parseInt(Math.random()*e.length),n=e[t],e[t]=e[o],e[o]=n;return e},gage.rangeNum=function(e,t){return parseInt(Math.random()*(t-e+1)+e)},gage.toFixed2=function(e){if(""===e||isNaN(e))return"";var t=(parseInt(100*e)/100).toString();if(t.indexOf(".")<0)return t;for(;t.length<=t.indexOf(".")+2;)t+="0";return t},gage.getRandomColor=function(){for(var e,t="#",n=0;n<3;n++)e=Math.floor(256*Math.random()).toString(16),t+=e.length<2?"0"+e:e;return t},gage.preventSelection=function(){window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()},gage.getScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop},gage.getWindow=function(e){var t={};return t.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,t.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,t},gage.getEleLocation=function(e){var e=document.querySelector(e),t=e.getBoundingClientRect(),n=[];return n[0]=t.left,n[1]=t.top,n[2]=t.left+t.width,n[3]=t.top+t.height,n},gage.windowResize=function(e,t){var n=document.documentElement.clientHeight,o=document.documentElement.clientWidth;window.addEventListener("resize",function(){o!==document.documentElement.clientWidth&&(o=document.documentElement.clientWidth,n=document.documentElement.clientHeight),n>document.documentElement.clientHeight?e&&e():t&&t()})},gage.hasClass=function(e,t){return RegExp("\\s?"+t+"\\s?").test(e.className)},gage.addClass=function(e,t){if(gage.hasClass(e,t))return!1;var n=e.className.split(" ");n.push(t),e.className=n.join(" ")},gage.removeClass=function(e,t){if(!gage.hasClass(e,t))return!1;var n=e.className.split(" "),o=n.indexOf(t);~o&&n.splice(o,1),e.className=n.join(" ")},gage.base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){if(!e)return"";var t,n,o,r,i,a,c,s="",u=0;for(e=this._utf8_encode(e);u<e.length;)t=e.charCodeAt(u++),n=e.charCodeAt(u++),o=e.charCodeAt(u++),r=t>>2,i=(3&t)<<4|n>>4,a=(15&n)<<2|o>>6,c=63&o,isNaN(n)?a=c=64:isNaN(o)&&(c=64),s=s+this._keyStr.charAt(r)+this._keyStr.charAt(i)+this._keyStr.charAt(a)+this._keyStr.charAt(c);return s},decode:function(e){if(!e)return"";var t,n,o,r,i,a,c,s="",u=0;for(e=e.replace(/[^A-Za-z0-9+\/=]/g,"");u<e.length;)r=this._keyStr.indexOf(e.charAt(u++)),i=this._keyStr.indexOf(e.charAt(u++)),a=this._keyStr.indexOf(e.charAt(u++)),c=this._keyStr.indexOf(e.charAt(u++)),t=r<<2|i>>4,n=(15&i)<<4|a>>2,o=(3&a)<<6|c,s+=String.fromCharCode(t),64!=a&&(s+=String.fromCharCode(n)),64!=c&&(s+=String.fromCharCode(o));return s=this._utf8_decode(s)},_utf8_encode:function(e){e=e.replace(/rn/g,"n");for(var t="",n=0;n<e.length;n++){var o=e.charCodeAt(n);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){for(var t="",n=0,o=0,r=0,i=0;n<e.length;)o=e.charCodeAt(n),o<128?(t+=String.fromCharCode(o),n++):o>191&&o<224?(r=e.charCodeAt(n+1),t+=String.fromCharCode((31&o)<<6|63&r),n+=2):(r=e.charCodeAt(n+1),i=e.charCodeAt(n+2),t+=String.fromCharCode((15&o)<<12|(63&r)<<6|63&i),n+=3);return t}},gage.thousands=function(e){return e?(e=e.toString(),e=~e.indexOf(".")?e.replace(/(\d)(?=(\d{3})+\.)/g,"$1,"):e.replace(/(?=(?!(\b))(\d{3})+$)/g,",")):e},gage})},85:function(e,t,n){var o,r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(a,c){"object"===i(t)&&void 0!==e?e.exports=c():(o=c,void 0!==(r="function"==typeof o?o.call(t,n,t,e):o)&&(e.exports=r))}(0,function(){"use strict";var e=window.gage||function(){},t=window.document;return e.$scrollTo=function(e,t){$("html,body").stop().animate({scrollTop:$(e).offset().top},t||500)},e.$backTop=function(e,t,n){t=t>=0?t:10,n=n>=0?n:500;var e=$(e);window.addEventListener("scroll",function(){$(window).scrollTop()<=t?e.hide():e.show()}),e.on("click",function(){$("html,body").animate({scrollTop:0},n)})},e.$scrollOverEle=function(e,t){function n(e,t,n,o){var r=window.innerHeight+$(window).scrollTop();r>o&&n?(n=!1,e.show(),t&&t()):r<o&&(n=!0,r<e.offset().top-10&&e.hide())}var e=$(e);if(!e||0!==e.length){var o=e.offset().top+e.height()/3;e.hide(),n(e,t,!0,o),window.addEventListener("scroll",function(){n(e,t,!0,o)}),window.addEventListener("resize",function(){o=e.offset().top+e.height()/3,n(e,t,!0,o)})}},e.$getTransform=function(e){return $(e).css("transform").replace(/[^0-9\-,]/g,"").split(",")},e.$followMove=function(e,n){var e=$(e);n=n||10;var o=(t.documentElement.clientWidth||t.body.clientWidth)/2,r=(t.documentElement.clientHeight||t.body.clientHeight)/2;window.addEventListener("mousemove",function(t){e.css("transform","translate("+(o-t.clientX)/n+"px,"+(r-t.clientY)/n+"px)")})},e.$dragBox=function(n,o,r){var i=$(n).css({zIndex:666});if("static"===i.css("position")&&i.css("position","absolute"),i.hover(function(){i.css({cursor:"move"})}),"save"===o){var a=e.getStorage("drag"+n);a&&i.offset({left:a.x,top:a.y})}else e.removeStorage("drag"+n);i[0].onmousedown=function(a){i.css({cursor:"move"});var c=a.pageX,s=a.pageY,u=i.offset().left,d=i.offset().top;t.onmousemove=function(a){var l=a.pageX-c+u,f=a.pageY-s+d,g=$("body").innerWidth(),h=$("body").innerHeight(),m=i.innerWidth(),p=i.innerHeight();l=l<10?0:l,f=f<10?0:f,l>g-m-10&&(l=g-m),f>h-p-10&&(f=h-p),"self"===r?a.target.class==cls&&i.offset({left:l,top:f}):i.offset({left:l,top:f}),"save"===o&&e.setStorage("drag"+n,{x:l,y:f}),window.getSelection?window.getSelection().removeAllRanges():t.selection.empty(),a.preventDefault()},t.onmouseup=function(){t.onmousemove=null,t.onmouseup=null,i.css({cursor:"default"})}}},e.$collisionMotion=function(e,n){function o(){clearInterval(c),c=setInterval(function(){u+=3;var e=r.offset().left+s,t=r.offset().top+u;t>=$(window).innerHeight()-l+$(window).scrollTop()?(u*=-.8,s*=.94,t=$(window).innerHeight()-l+$(window).scrollTop()):t<=0&&(u*=-1,s*=.8,t=0),e>=$("body").innerWidth()-d?(s*=-.8,0===s&&(s=-10),e=$("body").innerWidth()-d):e<=0&&(s*=-.8,0===s&&(s=10),e=0),Math.abs(s)<1&&(s=0),Math.abs(u)<1&&(u=0),0==s&&0==u&&t==$(window).innerHeight()-l+$(window).scrollTop()?clearInterval(c):r.offset({left:e,top:t})},30),f&&(f=!1,window.addEventListener("scroll",function(){o()}))}var r=$(e).css({zIndex:666});r.css("posation")||r.css("posation","relative"),r.hover(function(){r.css({cursor:"move"})});var i=0,a=0,c=null,s=0,u=0,d=r.outerWidth(),l=r.outerHeight(),f=!0;r[0].onmousedown=function(e){var n=e.clientX-r.offset().left,f=e.clientY-r.offset().top;t.onmousemove=function(e){var o=e.clientX-n,c=e.clientY-f;s=o-i,u=c-a,i=o,a=c,o=o<0?0:o,c=c<0?0:c,o>$("body").innerWidth()-d&&(o=$(window).innerWidth()-d),c>$("body").innerHeight()-l&&(c=$(window).innerHeight()-l),r.offset({left:o,top:c}),window.getSelection?window.getSelection().removeAllRanges():t.selection.empty(),e.preventDefault()},t.onmouseup=function(){t.onmousemove=null,t.onmouseup=null,o(),r.css({cursor:"default"})},clearInterval(c)},!0!==n&&"auto"!==n||(f=!1,window.addEventListener("scroll",function(){o()}))},e.$getMouseDir=function(e,t){var n=$(e),o=n.width(),r=n.height();$(e).on("mouseenter mouseleave",function(e){var i=(e.pageX-n.offset().left-o/2)*(o>r?r/o:1),a=(e.pageY-n.offset().top-r/2)*(r>o?o/r:1),c=Math.round((Math.atan2(a,i)*(180/Math.PI)+180)/90+3)%4;t&&t(e.type,c)})},e})}},[129]);