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
import Collection from '@/components/Collection'
// 二级路由
import Search from "@/components/Search.vue"
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
    redirect:"/my"
  },
  {
    path:'/kd',
    component:Kd,
    meta:{
      isshow:false
    },
    children:[
      {
        path:'qd',
        component:Qd,
        meta:{
          isshow:false
        }
      },
      {
        path:'hx',
        component:Hx,
        meta:{
          isshow:false
        }
      },
      {
        path:'sw',
        component:Sw,
        meta:{
          isshow:false
        }
      },
      {
        path:'jx',
        component:Jx,
        meta:{
          isshow:false
        }
      },
      {
        path:'sx',
        component:Sx,
        meta:{
          isshow:false
        }
      },
      {
        path:'wl',
        component:Wl,
        meta:{
          isshow:false
        }
      },
      {
        path:'english',
        component:English,
        meta:{
          isshow:false
        }
      }
    ]
  },
  {
    path:'/one',
    component:One,
    meta:{
      isshow:false
    }
  },
  // {
  //   path:'/leave',
  //   component:Leave
  // },
  {
    path:'/detail',
    component:Detail,
    meta:{
      isshow:false
    }
  },
  {
    path:'/gz',
    component:Gz,
    meta:{
      isshow:false
    }
  },
  {
    path:"/courses",
    component:Course,
    meta:{
      isshow:false
    }
  },
  {
    path:"/my",
    component:My,
    meta:{
      isshow:true
    }
  },
  {
   path:"/kc",
   component:Kc,
   meta:{
     isshow:true
   }
  },
  {
    path:"/yk",
    component:Yk,
    meta:{
      isshow:true
    }
  },
  {
    path:"/lx",
    component:Lx,
    meta:{
      isshow:true
    }
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
    },
    meta:{
      isshow:true
    }
  },
  {
    path:'/loding',
    component:Loiding,
    meta:{
      isshow:false
    }
  },
  {
    path:'/reg',
    component:Reg,
    meta:{
      isshow:false
    }
  },
  {
    path:'/password',
    component:Password,
    meta:{
      isshow:false
    }
  },
  {
    path:'/szpassword',
    component:Szpassword,
    meta:{
      isshow:false
    }
  },
  {
    path:'/simulation',
    component:Simulation,
    meta:{
      isshow:false
    }
  },
  {
    path:'/concerns',
    component:Concerns,
    meta:{
      isshow:false
    }
  },
  {
    path:'/collection',
    component:Collection,
    meta:{
      isshow:false
    }
  },
  {
    path:"/search",
    component:Search,
    meta:{
      isshow:false
    }
  },
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
