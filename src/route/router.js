import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Constructing = () => import('../views/Contructing/index.vue')

const routes = [
  { path: '/', redirect: "/home" },
  { path: '/home', name: 'Home', component: Home },
  { path: '/404', name: 'Constructing', component: Constructing },
  { path: '/:pathMatch(.*)*', name: 'Constructing', component: Constructing },
]


const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export {
  router
}