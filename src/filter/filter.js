// Created by gage on 2017/8/1.
import Vue from 'vue';

Vue.filter('toFixed2', (val) => {
  let value = (parseInt(val * 100) / 100).toString();
  value.indexOf('.') < 0 ? value += '.' : 0;
  while (value.length <= value.indexOf('.') + 2) {
    value += '0';
  }
  return value;
});