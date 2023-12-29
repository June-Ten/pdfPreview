
import { createRouter, createWebHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'



const routes: RouteRecordRaw[] = [
  { 
    path: '/',
    name: 'Home',
    component: () => import('../App.vue')
  }
]

// RouterOptions是路由选项类型
const options: RouterOptions = {
 history: createWebHistory(),
 routes,
}

// Router是路由对象类型
const router: Router = createRouter(options)

export default router