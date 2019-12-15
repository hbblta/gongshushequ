import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import Internet from '../components/Internet/Internet'
import homestea from '../components/homestea/homestea'
import ISOC from '../components/ISOC/ISOC'

Vue.use(Router)

export default new Router({
  routes: [
    {//首页
      path: '/',
      name: 'index',
      component: index
    },
    {//家园介绍
      path: '/homestea',
      name: 'homestea',
      component: homestea
    },
    {//互联网党建
      path: '/Internet',
      name: 'Internet',
      component: Internet
    },
    {//互联网协会
      path: '/ISOC',
      name: 'ISOC',
      component: ISOC
    },
  ]
})
