require('assets/font-awesome/css/font-awesome.min.css');
require('assets/sass/common.scss');

import Vue from 'vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';
import { configRouter } from './routeConfig';
import AppVue from "./App.vue";

Vue.use(VueRouter);
Vue.use(VueResource);

Vue.config.devtools = true;

function preventDefault(e) { e.preventDefault(); }; 
const banTouchmove = function(){
  document.addEventListener('touchmove', preventDefault, false); 
}
const restoreTouchmove = function(){
  document.removeEventListener('touchmove', preventDefault, false);
} 

//过渡代码放到最下面的时候，有时候并不会执行钩子函数的方法，放到这里就可以了。
Vue.transition('next', {
  beforeEnter: function (el) {
    router.app.changePage = true;
    // router.app.loadshow = true;
    banTouchmove();
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
    // router.app.loadshow = false;
    restoreTouchmove();
  }
});
Vue.transition('prev', {
  beforeEnter: function (el) {
    router.app.changePage = true;
    // router.app.loadshow = true;
    banTouchmove();
  },
  enter:function(){
  },
  afterEnter: function (el) {
    router.app.changePage = false;
    // router.app.loadshow = false;
    restoreTouchmove();
  }
});

//create router
let router = new VueRouter({
	hashbang: true, 
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true,
    linkActiveClass: 'custom-active',
});

configRouter(router);

const App = Vue.extend(AppVue);

// boostrap the app
router.start(App, "#app");