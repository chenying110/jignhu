import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: ()=>import ("@/views/Main"),
    redirect: '/goods',
    children: [
      {
        path: '/cart',
        name: 'Cart',
        component: ()=>import ("@/views/Cart")
      },
      {
        path: '/goods',
        name: 'Goods',
        component: ()=>import ("@/views/Goods")
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
