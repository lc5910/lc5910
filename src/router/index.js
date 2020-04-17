import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import { Message } from 'element-ui'
import gage from "@/assets/js/gage_tools";
const router = new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      redirect: { name: 'calculator' },
    },
    {
      path: '/drawLottery',
      name: 'drawLottery',
      component: function(resolve) {
        require(['@/views/drawLottery.vue'], resolve)
      }
    },
    {
      path: '/tools',
      name: 'tools',
      component: function(resolve) {
        require(['@/views/tools/tools.vue'], resolve)
      },
      children: [
        {
          path: '/tools/calculator',
          name: 'calculator',
          component: function(resolve) {
            require(['@/views/tools/calculator.vue'], resolve)
          }
        },
        {
          path: '/tools/ECharts',
          name: 'ECharts',
          component: function(resolve) {
            require(['@/views/tools/ECharts.vue'], resolve)
          }
        },
        {
          path: '/test/ES6',
          name: 'test',
          component: function(resolve) {
            require(['@/views/test/ES6.vue'], resolve)
          },
        },
        {
          path: '/test/CSS3',
          name: 'test',
          component: function(resolve) {
            require(['@/views/test/CSS3.vue'], resolve)
          },
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!gage.getCookie('token')) {
      Message({ type: 'warning', message: '你还没有登录，请登录后再操作', duration: 1000 });
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next();
  }

  // 百度统计
  var key;
  if (~location.hostname.indexOf('lc5910.github.io')) {
    key = '31e4415e5b8e192b52c3df234ce1624a';
  } else {
    return;
  }
  const _hmt = _hmt || null;
  _hmt.push(['_trackPageview', '/#' + to.path]);
  document.getElementById('baidu_tj') && document.getElementById('baidu_tj').remove();
  var hm = document.createElement("script");
  hm.id = "baidu_tj";
  hm.src = "https://hm.baidu.com/hm.js?" + key;
  var s = document.getElementsByTagName("meta")[0];
  s.parentNode.insertBefore(hm, s);
});

export default router;
