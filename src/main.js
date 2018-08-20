// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import directive from '../src/directive/directive.js'
import App from '@/App'
import axios from '@/assets/js/axios'
import store from '@/store/store'

import ElementUI from 'element-ui'; 
Vue.use(ElementUI); 
import 'element-ui/lib/theme-chalk/index.css';

import '@/assets/css/base.css'

Vue.prototype.$http = axios

Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    directive,
    template: '<App/>',
    components: { App }
})