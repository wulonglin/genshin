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
      component: Home
    },
    {
      path: '/jg',
      name: 'Jiuguan',
      component: Jiuguan,
    },
    {
      path: '/gl',
      name: 'Gonglue',
      component: Gonglue,
    },
    {
      path: '/gf',
      name: 'Guanfang',
      component: Guanfang,
    },
    {
      path: '/gcs',
      name: 'Guanceshu',
      component: Guanceshu,
    },
    {
      path: '/trt',
      name: 'Tongrentu',
      component: Tongrentu,
    }
  ],
});
