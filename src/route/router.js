import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const About = () => import('../views/About/index.vue')
const Music = () => import('../views/Music/index.vue')
const Blog = () => import('../views/Blog/index.vue')
const Photo = () => import('../views/Photo/index.vue')
const Constructing = () => import('../views/Contructing/index.vue')


const routes = [
  {
    path: '/', redirect: "/home", meta: {
      title: '小破站'
    }
  },
  {
    path: '/home', name: 'Home', component: Home, meta: {
      title: '小破站'
    }
  },
  {
    path: '/about', name: 'About', component: About,
    meta: {
      title: '关于Ninsen'
    }
  },
  {
    path: '/404', name: 'Constructing', component: Constructing, meta: {
      title: '还在搭，不会鸽'
    }
  },
  {
    path: '/music', name: 'Music', component: Music, meta: {
      title: '到点网抑云'
    }
  },
  {
    path: '/photo', name: 'Photo', component: Photo, meta: {
      title: '生活剪影'
    }
  },
  {
    path: '/blog', name: 'Blog', component: Blog, meta: {
      title: '全是水'
    }
  },
  {
    path: '/:pathMatch(.*)*', name: 'Constructing', component: Constructing, meta: {
      title: '还在搭，不会鸽'
    }
  },
]

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

router.afterEach((to, from) => {
  window.document.title = to.meta.title
})

export {
  router
}