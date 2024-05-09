import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeltsView from '../views/Belts/BeltsGeneral.vue'
import WhiteBeltView from '../views/Belts/WhiteBeltView.vue'
import YellowBeltView from '../views/Belts/YellowBeltView.vue'
import OrangeBeltView from '../views/Belts/OrangeBeltView.vue'
import KarateOrigins from '../views/KarateBasics/KarateOrigins.vue'
import KarateElements from '../views/KarateBasics/KarateElements.vue'
import MyKarateQuestView from '../views/MyKarateQuestView.vue'
import BasicBlocksView from '../views/KarateBasics/BasicBlocksView.vue'
import BasicPunchesView from '../views/KarateBasics/BasicPunchesView.vue'
import BasicStancesView from '../views/KarateBasics/BasicStancesView.vue'
import KarateFundamentalsView from '../views/KarateBasics/KarateFundamentalsView.vue'
import GreenBeltView from '@/views/Belts/GreenBeltView.vue'
import BlueBeltView from '@/views/Belts/BlueBeltView.vue'
import BrownBeltView from '@/views/Belts/BrownBeltView.vue'
import BlackBeltView from '@/views/Belts/BlackBeltView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/fundamentals',
      component: KarateFundamentalsView
    },
    {
      path: '/quest',
      component: MyKarateQuestView
    },
    {
      path: '/karate-origins-and-principles',
      component: KarateOrigins
    },
    {
      path: '/elements-of-karate',
      component: KarateElements
    },
    {
      path: '/karate-basic-stances',
      component: BasicStancesView
    },
    {
      path: '/karate-basic-blocks',

      component: BasicBlocksView
    },
    {
      path: '/karate-basic-punches',
      component: BasicPunchesView
    },
    {
      path: '/belts',
      component: BeltsView
    },
    {
      path: '/belts/white',
      component: WhiteBeltView
    },
    {
      path: '/belts/yellow',
      component: YellowBeltView
    },
    {
      path: '/belts/orange',
      component: OrangeBeltView
    },
    {
      path: '/belts/green',
      component: GreenBeltView
    },
    {
      path: '/belts/blue',
      component: BlueBeltView
    },
    {
      path: '/belts/brown',
      component: BrownBeltView
    },
    {
      path: '/belts/black',
      component: BlackBeltView
    },
    {
      path: '/:catchAll(.*)',
      redirect: '/'
    }
  ]
})

export default router
