<template>
	<div class="findMusic">
		<search></search>
		<!-- 向子组件传值 -->
		<headnav :account="0"></headnav>
		<slider></slider>
		<ul class="mid-list">
			<li>
				<p><i class="fa fa-audio-description"></i></p>
				<span>私人FM</span>
			</li>
			<li>
				<p><i class="fa fa-calendar-check-o"></i></p>
				<span>每日歌曲推荐</span>
			</li>
			<li>
				<p><i class="fa fa-signal"></i></p>
				<span>云音乐热歌榜</span>
			</li>
		</ul>
		<hr/>
		<!-- 面包屑导航 -->
		<p class="nav-bar">
			推荐歌单<i class="fa fa-chevron-right" style="padding-left:6px;"></i>
		</p>
		<!-- 推荐歌单 -->
		<ul class="intruduce">
			<li v-for="(music,index) in music_obj" v-on:click="go_list(music)" class="warp-list"><span class="number"><i class="fa fa-headphones"></i>{{music.playCount | mount}}</span><img class="pic" v-bind:src="music.picUrl" /><p>{{music.name}}</p></li>
		</ul>
		<list style="display:none;"></list>
	</div>
</template>

<script>
	//
import axios from 'axios'
import search from '@/components/tool/search'
import headnav from '@/components/tool/headnav'	
import slider from '@/components/tool/slider'
import list from '@/components/listPage/list'

	export default{
		name:'findMusic',	
		data(){
			return {
				music_obj:{},
				bus:{}
			}
		}, 
		computed: {
            messageList() {  //通过getters 获取store的数据
                return this.$store.getters.getMessages;
            } 
        },
		components:{
			search,headnav,slider,list
		},
		methods:{
			go_list(music){
				//不带查询参数，就是这样

				this.$store.dispatch('changeList',music)	
				this.$router.push({'path':'/list'})
			}
		},
		created(){
			//派遣getAsiox行为
			 this.$store.dispatch("getAsiox");
			 //this.music_obj = this.$store.state.msg
			 //console.log(this.$store.state.msg)
			 //this.$store.dispatch('getMineBaseApi')
		},
		mounted(){
			//此处的获取还是必须的
			axios.get('./static/data1.json').then(
				res=>{
					//res是整个数据对象，其中的data才是我们需要的数据
					this.music_obj = res.data.result
				}).catch(
				err=>{
					console.log(err)
				})		
		},	
		updated(){
				var pic = document.getElementsByClassName("pic")
		          var width = pic[0].offsetWidth
		            for(var i = 0 ; i < pic.length ; i++){
           	 			pic[i].style.height = width+"px"
           	 		}
		},
		beforeUpdata(){
			
		},
		//updated是在mounted后一环，mounted数据更新开始渲染，updated是在所有dom加载完毕之后
	
		filters:{
			mount:function(value){
				return Math.floor(value/10000) + '万'
			}
		}
	}
</script>

<style scoped="scoped">
	.findMusic{
		margin-bottom:50px;
	}
	.mid-list{
		list-style:none;
		width:100%;
		box-sizing:border-box;
		margin:0;
		padding:0;
	}
	.mid-list li{
		float:left;
		width:32%;
		text-align:center;
	}
	.mid-list li:not(:first-child){
		margin-left:2%;
	}
	.mid-list p{
		margin:10px auto;
		width:40px;
		height:40px;
		line-height:38px;
		text-align:center;
		color:rgba(232,0,18,.7);
		font-size:2rem;
		border:1px solid rgba(232,0,18,.8);
		border-radius:50%;
		box-sizing: border-box;
	}
	.mid-list:after{
		content:".";        
		display:block;        
		height:0;        
		clear:both;        
		visibility:hidden;        
	}
	.nav-bar{
		text-align:left;
		padding-left:8px;
		box-sizing: border-box;
		border-left:3px solid rgb(232,0,18);
		font-size:1.2rem;
	}
	.intruduce{
		width:100%;
		list-style:none;
		box-sizing: border-box;
		margin:0;
		padding:0;
	}
	.intruduce li{
		position:relative;
		float:left;
		width:32%;
		margin-bottom:10px;
		text-align:left;
		font-size:1rem;
		-webkit-font-smoothing: antialiased;
	}
	.intruduce li p{
		margin:2px auto;
		width:90%;
		height:28px;
		overflow:hidden;
		text-overflow: ellipsis;/*文字隐藏后添加省略号*/
		display:-webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
	}
	.intruduce li img{
		width:100%;
		display:block;
	}
	.intruduce li:not(:nth-child(3n+1)){
		margin-left:2%;
	}
	.intruduce:after{
		content:".";        
		display:block;        
		height:0;        
		clear:both;        
		visibility:hidden; 
	}
	::-webkit-scrollbar{
		width:15px;
		background-color:#AAAAAA;
	}
	::-webkit-scrollbar-thumb{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: #555;  
	}  
	.number{
		position:absolute;
		top:1px;
		right:2px;
		color:#fff;
	}
	.number i{
		margin-right:2px;
	}
</style>