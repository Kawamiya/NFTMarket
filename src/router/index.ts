import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import NftMarketHome from '../views/NftMarketHome.vue'
import CreateNft from '../views/CreateNft.vue'
import UserInformation from '../views/UserInformation.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'NftMarketHome',
    component: NftMarketHome
  },
  {
    path: '/user/:userId',
    name: 'UserInformation',
    component: UserInformation
  },
  {
    path: '/create',
    name: 'CreateNft',
    component: CreateNft
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
