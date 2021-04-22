(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.UniConfig = factory());
}(this, (function () { 'use strict';

  var _global = typeof window !== 'undefined' ? window : global || {};


  var UniConfig = {
    name: '重庆大学教务管理系统',
    code: 'cqu_edu',
    logo: '',
    subName: '',
    subCode: '',
    subLogo: ''
  };

  _global.UniConfig = UniConfig;

  return UniConfig;

})));
