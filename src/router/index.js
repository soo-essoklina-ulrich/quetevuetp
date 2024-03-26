import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/apiview',
    name: 'apiview',
    component: () => import(/* webpackChunkName: "apiview" */ '../views/APIViews.vue'),
    children: [
      {
        path: '/projet',
        name: 'projet',
        component: () => import(/* webpackChunkName: "projet" */ '../components/ApiProjet.vue'),
        children: [
          {
            path: '/listp',
            name: 'listp',
            component: () => import(/* webpackChunkName: "listp" */ '../components/CrudProjet/ListProjet.vue')
          },
          {
            path: '/addp',
            name: 'addp',
            component: () => import(/* webpackChunkName: "addp" */ '../components/CrudProjet/AddProjet.vue')
          }
        ]
      },
      {
        path: 'categorie',
        name: 'categorie',
        component: () => import(/* webpackChunkName: "categorie" */ '../components/ApiCategorie.vue'),
        children: [
          {
            path: '/listc',
            name: 'listc',
            component: () => import(/* webpackChunkName: "listc" */ '../components/CrudCategorie/ListCategorie.vue')
          },
          {
            path: '/addc',
            name: 'addc',
            component: () => import(/* webpackChunkName: "addc" */ '../components/CrudCategorie/AddCategorie.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
