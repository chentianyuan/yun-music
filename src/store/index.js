import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

//直接导出一个实例化好的vuex实例
export default new Vuex.Store({
	//包含所有的共享的数据，可以在任何组件改变
	state:{
		count:0,
		msg:{},
		//list用于确认所进入歌单
		//当触发跳转至歌单后，在组件中commit一个action，传入所选参数
		list:{}
	},
	//暴露获取vuex数据的其他方法
	getters:{
		getMessages: state => {
			return state.count || []
		}
	},
	//提交变化，在组件中所可以使用的方法
	actions:{
		increment(context){
			//context是store的一个实例，自动获得
			context.commit("increment")
		},
		decrement(context){
			context.commit("decrement")
		},
		getAsiox(context){
			axios.get('./../static/data1.json').then(
				res=>{
					//res是整个数据对象，其中的data才是我们需要的数据
					context.commit('getjson',res)
				}).catch(
				err=>{
					console.log(err)
				})		
		},
		changeList(context,music){
			context.commit('changeList',music)	
		}
	},
	//变化函数，改变原始全局数据的方法
	mutations:{
		increment(state){
			state.count++
		},
		decrement(state){
			state.count--
		},
	    getjson(state, res) {
	    	state.msg = res.data.result
	    },
	    changeList(state, music){
	    	state.list = music
	    	console.log(music.name)
	    }
	}
})
