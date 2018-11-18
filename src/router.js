import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: () => import(/* webpackChunkName: "about" */ './views/Hotel.vue')
    }
    ,
    {
      path: '/crawler',
      name: 'crawler',
      component: () => import(/* webpackChunkName: "about" */ './views/Crawler.vue')
    },
    {
      path: '/compare',
      name: 'compare',
      component: () => import(/* webpackChunkName: "about" */ './views/ComparePage.vue')
    }
  ]
})
