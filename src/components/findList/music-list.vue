<template>
	<div class="music-list">
		<search></search>
		<headnav :account="1"></headnav>
		<div class="list-head clearfix">
			<div class="head-left">
				<img src="../../../static/img/1200px-Keep_Calm_and_Carry_On_Poster.svg.png"/>
			</div>
			<div class="head-title">
				<p><span class="fa fa-signal"></span>&nbsp;&nbsp;&nbsp;精品歌单&nbsp;<span class="fa fa-chevron-right"></span></p>
				<p>
					<span class="head-remark">摇滚编年史|起源</span>
					<br>
					<span class="head-more">值得了解的摇滚乐起源</span>
				</p>
			</div>
		</div>
		<div class="nav">
			<p>{{listMsg}}     <span class="fa fa-chevron-right"></span></p>
			<div class="type">
				<span class="childType" @click="changeType()" value="欧美">欧美</span> |
				<span class="childType" @click="changeType()" value="民谣">民谣</span> |
				<span class="childType" @click="changeType()" value="轻音乐">轻音乐 </span>
			</div>
		</div>
		<div class="musics">
			<li v-for="(music,index) in lists" v-on:click="go_list(music)" class="warp-list">
				<span class="number">
					<i class="fa fa-headphones"></i>
					{{music.playCount | mount}}
				</span>
				<img class="pic" v-bind:src="music.picUrl" />
				<p>{{music.name}}</p>
			</li>
		</div>
	</div>
</template>

<script>
	import search from '@/components/tool/search'
	import headnav from '@/components/tool/headnav'	
	import axios from 'axios'
	export default{
		name:'musicList',
		data(){
			return {
				listMsg:'全部歌单',
				lists:{}
			}
		},
		mounted(){
			axios.get('./static/data1.json').then((res)=>{
				//console.log(res.data.result)
				this.lists = res.data.result
			}).catch((err)=>{
				console.log(err)
			})
		},
		components:{
			search,headnav
		},
		methods:{
			changeType(value){
				var type = document.getElementsByClassName('type')

				if(window.addEventListener){
					removeEventListener(type[0],'click',this.change)
				}
				
				type[0].addEventListener('click',this.change)
			},
			change(){
				var spans = document.querySelectorAll(".childType")
				var ev = ev || window.event
				var target = ev.target || ev.srcElement
				
				for(var i = 0 ; i < spans.length ; i++){
					if(spans[i] == target){
						//获取元素属性
						var value = spans[i].getAttribute('value')
						this.listMsg = value
					}
				}
			}
		},	
		filters:{
			mount:function(value){
				return Math.floor(value/10000) + '万'
			}
		}	
	}
</script>

<style scoped="scoped">
	.musics{
		list-style:none;	
		display:flex;
		flex-wrap:wrap;
		justify-content:space-between;
		margin-bottom:50px;
	}
	.warp-list{
		width:49%;
		position:relative;
	}
	.warp-list p{
		text-align:left;
		margin: 2px auto;
	    width: 90%;
	    height: 28px;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 2;
	    -webkit-box-orient: vertical;
	}
	.warp-list img{
		width:100%;
		height:156px;
	}
	.type{
		float:right;
		height:50px;
		line-height:50px;
		margin-right:5px;
	}
	.type span{
		font-size:1rem;
		margin:0 5px;
	}
	.nav p{
		float:left;
		border:1px solid #E0E0E0;
		border-radius:12px;
		padding:4px 12px;
		font-size:1.2rem;
		letter-spacing:1px;
		margin-left:8px;
	}
	.nav p span{
		color:#E0E0E0;
		font-weight:normal !important;
	}
	.nav{
		height:50px;
	}
	.head-more{
		color:#E2E2E2;
		font-size:1rem;
	}
	.head-title p{
		text-align:left;
	}
	.head-title{
		height:120px;
		background:transparent;
		color:#fff;
		float:left;
		font-size:1.4rem;
		font-weight:normal !important;
		font-family: "微软雅黑";
		margin-top:40px;
	}
	.head-title .fa-signal{
		color:#E38D13;
	}
	.list-head{
		height:160px;
		width:100%;
		background:#C12E2A;
		color:#fff;
	}
	.head-left{
		float:left;
		box-sizing:border-box;
		padding:18px 15px 15px 15px;	
	}
	.head-left img{
		width:125px;
		height:125px;
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