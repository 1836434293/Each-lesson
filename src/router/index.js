import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import My from '@/components/Home'
import One from "@/views/One.vue"
// import Leave from "@/views/Leave.vue"
import Detail from "@/components/Details.vue"
import Gz from "@/components/Concerns.vue"
import Course from "@/components/Courses.vue"
import Concerns from '@/components/Concerns'
// import Collection from '@/components/Collection'
// 二级路由
import Sho from "@/components/Shop.vue"
import Kc from "@/components/Kc.vue"
import Yk from "@/components/Yk.vue"
import Lx from "@/components/Lx.vue"
import User from "@/components/User.vue"
import Simulation from "@/components/SimulationModelTest.vue"
import Kd from "@/views/Kd.vue"
import Qd from "@/views/Kd/Qd.vue"
import Hx from "@/views/Kd/Hx.vue"
import Sw from "@/views/Kd/Sw.vue"
import Jx from "@/views/Kd/Jx.vue"
import Sx from "@/views/Kd/Sx.vue"
import Wl from "@/views/Kd/Wl.vue"
import English from "@/views/Kd/English.vue"
import Loiding from "@/components/Loding.vue"
import Password from "@/components/FindThePassword.vue"
import Reg from "@/components/RegistrationOfBoarding.vue"
import Szpassword from "@/components/Szpassword.vue"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:"/my",
    children:[
      {
        path:"sho",
        component:Sho
      }
    ]
  },
  {
    path:'/kd',
    component:Kd,
    children:[
      {
        path:'qd',
        component:Qd
      },
      {
        path:'hx',
        component:Hx
      },
      {
        path:'sw',
        component:Sw
      },
      {
        path:'jx',
        component:Jx
      },
      {
        path:'sx',
        component:Sx
      },
      {
        path:'wl',
        component:Wl
      },
      {
        path:'english',
        component:English
      }
    ]
  },
  {
    path:'/one',
    component:One
  },
  // {
  //   path:'/leave',
  //   component:Leave
  // },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/gz',
    component:Gz
  },
  {
    path:"/courses",
    component:Course
  },
  {
    path:"/my",
    component:My
  },
  {
   path:"/kc",
   component:Kc
  },
  {
    path:"/yk",
    component:Yk
  },
  {
    path:"/lx",
    component:Lx,
  },
  {
    path:"/user",
    component:User,
    beforeEnter: (to, from, next) => {
      var temp = JSON.parse(window.localStorage.getItem('token'))
      if(temp){
        next()
      }else{
        alert('需要先登录')
        next('/loding')
      }
    }
  },
  {
    path:'/loding',
    component:Loiding
  },
  {
    path:'/reg',
    component:Reg
  },
  {
    path:'/password',
    component:Password
  },
  {
    path:'/szpassword',
    component:Szpassword
  },
  {
    path:'/simulation',
    component:Simulation
  },
  {
    path:'/concerns',
    component:Concerns
  },
  // {
  //   path:'/collection',
  //   component:Collection
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
