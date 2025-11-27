import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path:"/", name:"home",component:()=>import('@/views/Home.vue')},
    {path:"/food", name:"food",component:()=>import('@/views/FoodList.vue')},
    {path:"/training", name:"training",component:()=>import('@/views/TrainingPanel.vue')}
  ],
})

export default router
