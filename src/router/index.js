import Vue from 'vue'
import Router from 'vue-router'
import Basemap from '@/components/Basemap'
import TileLayer from '@/components/TileLayer'
import BaseTileLayer from '@/components/BaseTileLayer'
import DrawModel from '@/components/DrawModel'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index,
    children: [
      {
        path: '/basemap',
        name: 'Basemap',
        component: Basemap
      },
      {
        path: '/tileLayer',
        name: 'TileLayer',
        component: TileLayer
      },
      {
        path: '/drawModel',
        name: 'DrawModel',
        component: DrawModel
      },
      {
        path: '/baseTileLayer',
        name: 'BaseTileLayer',
        component: BaseTileLayer
      }
    ]
  }]
})
