import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const Search =()=>import('@/components/Search')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',redirect: '/shop/home',
    name: 'Home',
    component: Home
    
  },
  {
    path:'/Search',
    name:'Search',
    component:Search
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/one',
    component: () => import('../views/One.vue')
  },
  {
    path: '/leave',
    component:() => import( '../views/Leave.vue')
  },
  {
    path:'/shop',
    component: () => import('../components/Shop.vue'),
    children:[
      {
       path:'kc',
       component:() => import('../components/Kc.vue')
     },
     {
       path:'yk',
       component:() => import('../components/Yk.vue')
     },
     {
       path:'lx',
       component:() => import('../components/Lx.vue'),
      
     },
     {
       path:'loding',
       component:() => import('../components/Loding.vue')
     },
     {
       path:'password',
       component:() => import('../components/FindThePassword.vue')
     },
     {
      path:'reg',
      component:() => import('../components/RegistrationOfBoarding.vue')
    },
    {
     path:'simulation',
     component:() => import('../components/SimulationModelTest.vue')
   },
     {
      path:'home',
      component:() => import('../components/Home.vue')
    },
    {
      path:'szpassword',
      component:() => import('../components/Szpassword.vue')
    },
    {
      path:'user',
      component:() => import('../components/User.vue'),
      beforeEnter: (to, from, next) => {
        var temp = JSON.parse(window.localStorage.getItem('token'))
        if(temp){
          next()
        }else{
          alert('需要先登录')
          next('loding')
        }
      }
    },
    {
      path:'details',
      component:() => import('../components/Details')
    }
    ]
  },{
    path:'/kd',
    component: () => import('../views/Kd.vue'),
    children:[
      {
        path:'qd',
        component:() => import('../views/Kd/Qd.vue')
      },
      {
        path:'hx',
        component:() => import('../views/Kd/Hx.vue')
      }, {
        path:'sw',
        component:() => import('../views/Kd/Sw.vue')
      }, {
        path:'jx',
        component:() => import('../views/Kd/Jx.vue')
      }, {
        path:'sx',
        component:() => import('../views/Kd/Sx.vue')
      }, {
        path:'wl',
        component:() => import('../views/Kd/Wl.vue')
      },
      {
        path:'english',
        component:() => import('../views/Kd/English.vue')
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
