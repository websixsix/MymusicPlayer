import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mymusic from '@/components/Mymusic'
import Users from '@/components/Users'
import Musiclist from '@/components/Musiclist'
import Play from '@/components/play'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/mymusic',
      name:'Mymusic',
      component:Mymusic
    },
    {
      path:'/user',
      name:'Users',
      component:Users
    },
    {
      path:'/musiclist',
      name:'Musiclist',
      component:Musiclist
    },
    {
      path:'/musiclist/:id',
      name:'play',
      component:Play
    },
    // 把其余都重定向到主页面
    {
      path: '*',
      redirect: '/'
    }
  ]
})


