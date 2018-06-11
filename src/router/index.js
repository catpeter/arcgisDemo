import Vue from 'vue'
import Router from 'vue-router'
import Basemap from '@/components/Basemap'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: '/basemap',
        name: 'Basemap',
        component: Basemap
      }]
    }
  ]
})
