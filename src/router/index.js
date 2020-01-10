import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import Internet from '../components/Internet/Internet'
import homestea from '../components/homestea/homestea'
import ISOC from '../components/ISOC/ISOC'
import AboutUs from '../components/AboutUs/AboutUs'
import NetworkGovernance from '../components/NetworkGovernance/NetworkGovernance'
import arthury from '../components/arthury/arthury'
import welfare from '../components/welfare/welfare'
import Cultural from '../components/Cultural/Cultural'
import moer from '../components/moer/moer'
import InternetBanner from '../components/Internet/InternetBanner'
import InternetText from '../components/Internet/InternetText'
import textImg from '../components/headerCopm/textImg'
import videosHtml from '../components/headerCopm/videosHtml'
import htmlText from '../components/headerCopm/htmlText'

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
    {//企业介绍
      path: '/AboutUs',
      name: 'AboutUs',
      component: AboutUs
    },
    {//网络治理
      path: '/NetworkGovernance',
      name: 'NetworkGovernance',
      component: NetworkGovernance
    },
    {//网络正能量
      path: '/arthury',
      name: 'arthury',
      component: arthury
    },
    {//网络公益
      path: '/welfare',
      name: 'welfare',
      component: welfare
    },
    {//网络公益
      path: '/Cultural',
      name: 'Cultural',
      component: Cultural
    },
    {//更多
      path: '/moer',
      name: 'moer',
      component: moer
    },
    {//更多
      path: '/InternetBanner',
      name: 'InternetBanner',
      component: InternetBanner
    },
    {//更多
      path: '/InternetText',
      name: 'InternetText',
      component: InternetText
    },
    {//图文详情
      path: '/textImg',
      name: 'textImg',
      component: textImg
    },
    {//视频详情
      path: '/videosHtml',
      name: 'videosHtml',
      component: videosHtml
    },
    {//视频详情
      path: '/htmlText',
      name: 'htmlText',
      component: htmlText
    },
  ]
})
