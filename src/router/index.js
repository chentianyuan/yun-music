import Vue from 'vue'
import Router from 'vue-router'
import findMusic from '@/components/findMusic'
import mineMusic from '@/components/mainPage/mineMusic'
import Friends from '@/components/mainPage/Friends'
import Mine from '@/components/mainPage/Mine'
import musicList from '@/components/findList/music-list'
import station from '@/components/findList/station'
import range from '@/components/findList/range'
import list from '@/components/listPage/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'findMusic',
      component: findMusic
    },{
    	path:'/mineMusic',
    	name:'mineMusic',
    	component:mineMusic
    },{
    	path:'/Friends',
    	name:'Friends',
    	component:Friends
    },{
    	path:'/Mine',
    	name:'Mine',
    	component:Mine
    },{
    	path:'/findList/musicList',
    	name:'musicList',
    	component:musicList
    },{
    	path:'/findList/station',
    	name:'station',
    	component:station
    },{
    	path:'/findList/range',
    	name:'range',
    	component:range
    },{
    	path:'/list',
    	name:'list',
    	component:list
    }  
  ]
})
