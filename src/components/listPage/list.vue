<template>
	<div class="warp">
		<header>
			<div class="list-head">
				<span class="fa fa-angle-left" v-on:click="back"></span>
				<h4>歌单</h4>
				<span class="fa fa-align-left"></span>
			</div>
			<div class="list-body">
				<img v-bind:src="data.picUrl"/>
				<h3>{{data.name}}</h3>
			</div>
			<div class="list-foot">
				<ul>
					<li><span class="fa fa-folder-o"></span><a href="javascript:">1213</a></li>
					<li><span class="fa fa-commenting-o"></span><a href="javascript:">12312</a></li>
					<li><span class="fa fa-external-link"></span><a href="javascript:">123</a></li>
					<li><span class="fa fa-download"></span><a href="javascript:">312</a></li>
				</ul>
			</div>
			<img class="cover" v-bind:src="data.picUrl"/>
		</header>
		<section>
			<aside><span><i class="fa fa-play"></i>播放全部<b> (共{{dataList.length}}首)</b></span><span><i></i>多选</span></aside>
				<ul class="all-music">
					<li v-for="(music,index) in dataList">
						<hr/>
						<span>{{index + 1}}</span>
						<h4>{{music.name}}</h4>
						<p>{{music.ar[0].name}} <i v-if="music.alia[0]">-</i> {{music.alia[0]}}</p>
					</li>
				</ul>
		</section>
	</div>
</template>

<script>
	import axios from 'axios'
//vuex已经在main.js中注入所有组件，不必再重复引入
	export default{
		name:'list',
		data(){
			return {
				data:{},
				dataList:[]
			}
		},
		mounted(){
			//获取vuex中的数据
			var that = this
			that.data = that.$store.state.list
			//console.log(this.$store.state.count);
			axios.get('./../static/music-list/list1-'+that.data.type+'.json').then(
				res => {
					that.dataList = res.data.playlist.tracks
			}).catch(
				ree => {
					console.log(err)
				}
			)
		},
		methods:{
			back(){
				history.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.warp{
		width:100%;
	}
	header{
		position:relative;
		width:100%;
		height:230px;
		color:#fff;
	}
	.list-head{
		width:100%;
		text-align:center;
		margin:5px auto;
		box-sizing: border-box;
	}
	.list-head h4{
		display:inline-block;
		font-size:15px;
		height:30px;
		line-height: 30px;
		margin:0;
		vertical-align:middle;
		
	}
	.list-head span{
		display:inline-block;
		width:30px;
		height:30px;
		font-size:20px;
		line-height:30px;
		text-align:center;
		vertical-align:top;
	}
	.list-head span:first-child{
		float:left;
		font-size:25px;
	}
	.list-head span:last-child{
		float:right;
	}
	.list-body img{
		float:left;
		box-sizing:border-box;
		margin:20px 4%;
		width:30%;
		height:100px;
	}
	.list-body h3{
		float:left;
		width:62%;
		font-size:16px;
		padding:0 20px;
		margin-top:20px;
		box-sizing: border-box;
		letter-spacing:0.5px;
		text-align:left;
		word-wrap: break-word; 
		word-break: normal; 
	}
	.list-body:after{
		content:".";
		display:block;	
		height:0;
		clear:both;
		visibility:hidden
	}
	.list-foot{
		box-sizing: border-box;
		width:100%;
	}
	.list-foot ul{
		padding:0;
		width:100%;
		list-style:none;
		height:50px;
		box-sizing: border-box;
	}
	.list-foot ul li{
		width:25%;
		float:left;
		height:50px;
		box-sizing: border-box;
	}
	.list-foot ul li span{
		display:block;
		font-size:15px;
		margin-top:14px;
	}
	.list-foot ul li a{
		color:#fff;
		display:inline-block;
		margin-top:6px;
		text-decoration:none;
	}
	.cover{
		position:absolute;
		width:100%;
		height:100%;
		left:0;
		top:0;
		z-index:-10;
		-webkit-filter: blur(50px)
	}
	.fa-align-left{
		transform: rotate(270deg);
	}
	section{
		background:#fff;
		margin:10px 0 50px;
		text-align:left;	
	}
	aside span:first-child{
		display:inline-block;
		width:80%;
		height:36px;
		font-size:1.2rem;
		vertical-align:middle;
		line-height:36px;
	}
	aside span:last-child{
		display:inline-block;
		width:20%;
		height:36px;
		line-height:36px;
		vertical-align:middle;
	}	
	aside i{
		display:inline-block;
		height:36px;
		width:36px;
		text-align:center;
		line-height:36px;
		font-size:1.2rem;
		vertical-align:top;
	}
	aside b{
		font-weight:normal;
		font-size:1rem;
		color:#AAAAAA;
	}
	.all-music{
		width:100%;
		list-style:none;
		margin:0;
		padding:0;
	}
	.all-music li{
		width:100%;
		height:4rem;
		line-height:4rem;
		box-sizing: border-box;
	}
	.all-music li span{
		width:10%;
		max-width:40px;
		height:4rem;
		display:inline-block;
		float:left;
		text-align:center;
		font-size:1.2rem;
	}
	.all-music li h4,p{
		width:90%;
		float:left;
		text-align:left;
		margin:0;
		white-space:nowrap;
		text-overflow:ellipsis;
		overflow:hidden;
	}
	.all-music li h4{
		font-size:1.2rem;
			height:2.8rem;
		line-height:2.8rem;
	}
		.all-music li p{
			color:#AAAAAA;
			font-size:1rem;
			height:1rem;
		line-height:1rem;
	}
	hr{
		margin:1px 0 -1px 0;
	}
</style>