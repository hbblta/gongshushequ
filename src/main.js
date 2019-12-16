// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ajax from '../config/ajax'
import router from './router'
import vHeader from './components/headerCopm/headers'
import vfooter from './components/headerCopm/foots'
import videos from './components/headerCopm/videos'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '../config/rem'
Vue.config.productionTip = false
Vue.prototype.ajax = ajax;
Vue.use(VueAwesomeSwiper)
Vue.component('v-head',vHeader)
Vue.component('v-footer',vfooter)
Vue.component('v-videos',videos)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
