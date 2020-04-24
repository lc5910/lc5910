/*
 * gage_plugin.js v0.0.13
 * (c) gage(591033791@qq.com)
 * Update 2017-12-26 ~ 2018-11-28
 * Tools Library Of jQuery Plugin
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.gage = factory());
})(this, function () {
  'use strict';
  var gage = window.gage || function () { };
  var document = window.document;

  /* 随机生成16进制颜色 */
  gage.getRandomColor = function () {
    var str, color = "#";
    for (var i = 0; i < 3; i++) {
      str = (Math.floor(Math.random() * 256)).toString(16);
      color += str.length < 2 ? "0" + str : str;
    }
    return color;
  }

  /* 防止选择文字 */
  gage.preventSelection = function () {
    window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
  }

  /* 获取滚动条相对于顶部的偏移 */
  gage.getScrollTop = function () {
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  }

  /* 获取窗口可视宽度和高度 */
  gage.getWindow = function (param) {
    var obj = {};
    obj.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    obj.height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    return obj
  }

  /* 获取页面元素的位置，需在DOM更新后获取 */
  gage.getEleLocation = function (selector) {
    var selector = document.querySelector(selector);
    var DOMRect = selector.getBoundingClientRect();
    var obj = [];
    obj[0] = DOMRect.left;
    obj[1] = DOMRect.top;
    obj[2] = DOMRect.left + DOMRect.width;
    obj[3] = DOMRect.top + DOMRect.height;
    return obj;
  }

  /* 页面滚动到指定元素的位置 */
  gage.$scrollTo = function (selector, time) {
    $("html,body").stop().animate({ scrollTop: $(selector).offset().top }, time ? time : 500);
  }

  /* 点击按钮页面滚动到顶部 */
  gage.$backTop = function (selector, pixel, time) {
    pixel = pixel >= 0 ? pixel : 10;
    time = time >= 0 ? time : 500;
    var selector = $(selector);
    window.addEventListener('scroll', function () {
      var scrollTop = $(window).scrollTop();
      scrollTop <= pixel ? selector.hide() : selector.show();
    })
    selector.on("click", function () {
      $("html,body").animate({ scrollTop: 0 }, time);
    });
  }

  /* 屏幕滚动将要超过元素高度 - 在onload事件后使用 */
  gage.$scrollOverEle = function (selector, callback) {
    var selector = $(selector);
    if (selector && selector.length === 0) { return; }
    var flag = true;
    var temp2 = selector.offset().top + selector.height() / 3;
    selector.hide();
    scrollOverEle(selector, callback, flag, temp2);
    window.addEventListener('scroll', function () {
      scrollOverEle(selector, callback, flag, temp2);
    });
    window.addEventListener('resize', function () {
      temp2 = selector.offset().top + selector.height() / 3;
      scrollOverEle(selector, callback, flag, temp2);
    });

    function scrollOverEle(selector, callback, flag, temp2) {
      var temp = window.innerHeight + $(window).scrollTop();
      if (temp > temp2 && flag) {
        flag = false;
        selector.show();
        callback && callback();
      } else if (temp < temp2) {
        flag = true;
        if (temp < selector.offset().top - 10) {
          selector.hide();
        }
      }
    }
  }

  /* 获取transform属性内的值 */
  gage.$getTransform = function (selector) {
    return $(selector).css('transform').replace(/[^0-9\-,]/g, '').split(',');
  }

  /* 图片跟随鼠标移动 */
  gage.$followMove = function (selector, num) {
    var selector = $(selector);
    num = !num ? 10 : num;
    var oldX = (document.documentElement.clientWidth || document.body.clientWidth) / 2;
    var oldY = (document.documentElement.clientHeight || document.body.clientHeight) / 2;
    window.addEventListener('mousemove', function (event) {
      selector.css('transform', 'translate(' + (oldX - event.clientX) / num + 'px,' + (oldY - event.clientY) / num + 'px)');
    });
  }

  /*
   * 在页面拖拽单个div
   * select(必填): 选择器
   * self(选填): 传入'self' 时拖拽自身有效，子元素无效
   * save(选填): 传入'save' 时保存到localStorage
   */
  gage.$dragBox = function (selector, save, self) {
    var box = $(selector).css({ 'zIndex': 666 });
    box.css('position') === 'static' ? box.css('position', 'absolute') : 0;
    box.hover(function () {
      box.css({ 'cursor': 'move' });
    });
    if (save === 'save') {
      var pos = gage.getStorage('drag' + selector);
      if (pos) {
        box.offset({ 'left': pos.x, 'top': pos.y });
      }
    } else {
      gage.removeStorage('drag' + selector);
    }
    box[0].onmousedown = function (e) {
      box.css({ 'cursor': 'move' });
      var oldX = e.pageX;
      var oldY = e.pageY;
      var offsetX = box.offset().left;
      var offsetY = box.offset().top;
      document.onmousemove = function (e) {
        var x = e.pageX - oldX + offsetX;
        var y = e.pageY - oldY + offsetY;
        var bodyW = $('body').innerWidth();
        var bodyH = $('body').innerHeight();
        var thatW = box.innerWidth();
        var thatH = box.innerHeight();
        x = x < 0 + 10 ? 0 : x;
        y = y < 0 + 10 ? 0 : y;
        x > bodyW - thatW - 10 ? x = bodyW - thatW : x;
        y > bodyH - thatH - 10 ? y = bodyH - thatH : y;
        if (self === 'self') {
          if (e.target.class == cls) {
            box.offset({ 'left': x, 'top': y });
          }
        } else {
          box.offset({ 'left': x, 'top': y });
        }
        save === 'save' ? gage.setStorage('drag' + selector, { 'x': x, "y": y }) : 0;
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        e.preventDefault();
      }
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        box.css({ 'cursor': 'default' });
      }
    }
  }

  /*
   * 单个div弹性碰撞运动
   * select(必填): 选择器
   * auto(选填): 传入true时页面一开始就监听滚动事件
   */
  gage.$collisionMotion = function (selector, auto) {
    var box = $(selector).css({ 'zIndex': 666 });
    !box.css('posation') ? box.css('posation', 'relative') : 0;
    box.hover(function () {
      box.css({ 'cursor': 'move' });
    });
    var lastX = 0;
    var lastY = 0;
    var timer = null;
    var iSpeedX = 0;
    var iSpeedY = 0;
    var boxW = box.outerWidth();
    var boxH = box.outerHeight();
    var run = true;
    box[0].onmousedown = function (event) {
      var disX = event.clientX - box.offset().left;
      var disY = event.clientY - box.offset().top;
      document.onmousemove = function (event) {
        var x = event.clientX - disX;
        var y = event.clientY - disY;
        iSpeedX = x - lastX;
        iSpeedY = y - lastY;
        lastX = x;
        lastY = y;
        x = x < 0 ? 0 : x;
        y = y < 0 ? 0 : y;
        x > $('body').innerWidth() - boxW ? x = $(window).innerWidth() - boxW : x;
        y > $('body').innerHeight() - boxH ? y = $(window).innerHeight() - boxH : y;
        box.offset({ 'left': x, 'top': y });
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        event.preventDefault();
      };
      document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        startMove();
        box.css({ 'cursor': 'default' });
      };
      clearInterval(timer);
    };
    if (auto === true || auto === 'auto') {
      run = false;
      window.addEventListener('scroll', function () {
        startMove();
      });
    }

    function startMove() {
      clearInterval(timer);
      timer = setInterval(function () {
        iSpeedY += 3;
        var x = box.offset().left + iSpeedX;
        var y = box.offset().top + iSpeedY;
        if (y >= $(window).innerHeight() - boxH + $(window).scrollTop()) {
          iSpeedY *= -0.8;
          iSpeedX *= 0.94;
          y = $(window).innerHeight() - boxH + $(window).scrollTop();
        } else if (y <= 0) {
          iSpeedY *= -1;
          iSpeedX *= 0.8;
          y = 0;
        }
        if (x >= $('body').innerWidth() - boxW) {
          iSpeedX *= -0.8;
          iSpeedX === 0 ? iSpeedX = -10 : 0;
          x = $('body').innerWidth() - boxW;
        } else if (x <= 0) {
          iSpeedX *= -0.8;
          iSpeedX === 0 ? iSpeedX = 10 : 0;
          x = 0;
        }
        Math.abs(iSpeedX) < 1 ? iSpeedX = 0 : 0;
        Math.abs(iSpeedY) < 1 ? iSpeedY = 0 : 0;
        if (iSpeedX == 0 && iSpeedY == 0 && y == $(window).innerHeight() - boxH + $(window).scrollTop()) {
          clearInterval(timer);
        } else {
          box.offset({ 'left': x, 'top': y });
        }
      }, 30);
      if (run) {
        run = false;
        window.addEventListener('scroll', function () {
          startMove();
        });
      }
    }
  }

  /*
   * 判断鼠标进出div的方向
   * select(必填): 选择器
   * callback(必填): 传入回调返回方向码
   * direction: 0-上方 1-下方 2-左边 3-右边
   */
  gage.$getMouseDir = function (select, callback) {
    var box = $(select);
    var w = box.width();
    var h = box.height();
    $(select).on("mouseenter mouseleave", function (e) {
      var x = (e.pageX - box.offset().left - (w / 2)) * (w > h ? (h / w) : 1);
      var y = (e.pageY - box.offset().top - (h / 2)) * (h > w ? (w / h) : 1);
      var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
      callback && callback(e.type, direction);
    });
  }

  return gage;
});