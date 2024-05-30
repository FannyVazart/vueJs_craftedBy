import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductPreview from '@/components/ProductPreviewOrder.vue'
import ProductView from '@/views/ProductView.vue'
import CartView from '@/views/CartView.vue'
import IdentificationView from '@/views/IdentificationView.vue'
import ShipAndPayView from '@/views/ShipAndPayView.vue'
import OrderOKView from '@/views/OrderOKView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/test',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/ProductPre')
      component: ProductPreview
    },
    {
      path: '/products/:id',
      name: 'product',
      component: ProductView
    },
    {
      path: '/identification',
      name: 'identification',
      component: IdentificationView
    },
    {
      path: '/shippay',
      name: 'shipandpay',
      component: ShipAndPayView
    },
    {
      path: '/orderok',
      name: 'orderok',
      component: OrderOKView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    }
  ],
})

export default router
