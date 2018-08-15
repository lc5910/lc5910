// Created by gage on 2017/8/1.
import Vue from 'vue';
import router from 'vue-router';
Vue.use(router);

//去除两端空白
Vue.directive('trim', {
	inserted: function(el) {
		el.addEventListener('input', function() {
			el.value=el.value.trim();
		}, false)
	}
})

//自动获取焦点
Vue.directive('focus', {
	inserted: function (el) {
		el.focus()
	}
});

//点击关闭-默认关闭父元素
Vue.directive('close', {
  inserted: function (el,binding) {
    var box=document.querySelector("."+binding.value) || el.parentNode;
    el.addEventListener('click',function (){
      box.style.display='none';
    })
  }
});