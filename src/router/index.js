import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Hm'
import Jiuguan from '@/views/Jiuguan/Jg'
import Gonglue from '@/views/Gonglue/Gl'
import Guanceshu from '@/views/Guanceshu/Gcs'
import Guanfang from '@/views/Guanfang/Gf'
import Tongrentu from '@/views/Tongrentu/Trt'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/hm",
      name: "Home",
      component: Home,
      meta: {
        title: '首页-原神社区-米游社'
      }
    },
    {
      path: '/jg',
      name: 'Jiuguan',
      component: Jiuguan,
      meta: {
        title: '酒馆-原神社区-米游社'
      }
    },
    {
      path: '/gl',
      name: 'Gonglue',
      component: Gonglue,
      meta: {
        title: '攻略-原神社区-米游社'
      }
    },
    {
      path: '/gf',
      name: 'Guanfang',
      component: Guanfang,
      meta: {
        title: '官方-原神社区-米游社'
      }
    },
    {
      path: '/trt',
      name: 'Tongrentu',
      component: Tongrentu,
      meta: {
        title: '同人图-原神社区-米游社'
      }
    },
    {
      path: '/gcs',
      name: 'Guanceshu',
      component: Guanceshu,
      meta: {
        title: '旅行者创作平台-观测枢-原神wiki'
      }
    },
  ],
});
