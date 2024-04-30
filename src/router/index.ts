import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BeltsView from '../views/BeltsView.vue'
import WhiteBeltView from '../views/WhiteBeltView.vue'
import YellowBeltView from '../views/YellowBeltView.vue'
import OrangeBeltView from '../views/OrangeBeltView.vue'
import KarateOrigins from '../views/KarateOrigins.vue'
import KarateElements from '../views/KarateElements.vue'
import MyKarateQuestView from '../views/MyKarateQuestView.vue'
import BasicBlocksView from '../views/BasicBlocksView.vue'
import BasicPunchesView from '../views/BasicPunchesView.vue'
import BasicStancesView from '../views/BasicStancesView.vue'
import KarateFundamentalsView from '../views/KarateFundamentalsView.vue'

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
    }
  ]
})

export default router
