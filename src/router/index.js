import Vue from 'vue'
import Router from 'vue-router'
import findMusic from '@/components/findMusic'
import musicList from '@/components/findList/music-list'
import station from '@/components/findList/station'
import range from '@/components/findList/range'
import list from '@/components/listPage/list'
import music from '@/components/main/music'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'findMusic',
      component: findMusic
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
    },{
    	path:'/music',
    	name:'music',
    	component:music
    }
  ]
})
