import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import middlewiare_auth from '../middleware/auth'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{layout:'layout-guest',auth:false}
  },
  {
    path: '/login',
    name: 'login',
    component: Home,
    meta:{layout:'layout-guest',auth:false}
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/dashboard/index.vue'),
    meta:{layout:'layout-auth',auth:true}
  }
  ,
  {
    path: '/profil',
    name: 'profil',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/dashboard/profil.vue'),
    meta:{layout:'layout-auth',auth:true}
  },
  {
    path: '/settings',
    name: 'settings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/dashboard/settings.vue'),
    meta:{layout:'layout-auth',auth:true}
  },
  {
    path: '/roles',
    name: 'roles',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/roles/index.vue'),
    meta:{layout:'layout-auth',auth:true}
  },
  {
    path: '/users',
    name: 'users',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( '../views/users/index.vue'),
    meta:{layout:'layout-auth',auth:true}
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  middlewiare_auth(to,from,next)
})
window.router = router;
export default router
