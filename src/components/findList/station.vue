<template>
	<div class="music-list">
		<search></search>
		<headnav :account="2"></headnav>
		<slider></slider>
		<div class="classification">
			<div class="twins">
				<span class="fa fa-yelp"></span>
				<p>电台分类</p>
			</div>
			<div class="twins">
				<span class="fa fa-list-alt"></span>
				<p>电台排行</p>
			</div>
		</div>
		<!-- 面包屑导航 -->
		<p class="nav-bar">
			付费精品<i class="fa fa-chevron-right" style="padding-left:6px;"></i>
		</p>
		<div class="wrap" v-for="(station,index) in stations">
			<div class="left">
				<img v-bind:src="station.url">
			</div>
			<div class="right">
				<h5>{{station.title}}<span>{{station.price}}</span></h5>
				<p>{{station.topic}}</p>
				<p>{{station.updateDate}}</p>
				<aside><span class="fa fa-play"></span>{{station.content}}</aside>
			</div>
		</div>
	</div>
</template>

<script>
	import search from '@/components/tool/search'
	import headnav from '@/components/tool/headnav'	
	import slider from '@/components/tool/slider'
	import axios from 'axios'
	
	export default{
		name:'station',	
		data(){
			return {
				stations:{}
			}
		},
		components:{
			search,headnav,slider
		},
		mounted(){
			axios.get('./static/data2.json').then(res=>{
				this.stations = res.data.result
			}).catch(err=>{
				alet(err)
			})
		}
	}
</script>

<style scoped="scoped">
	.wrap{
		display:flex;
		justify-content:space-between;
		border-bottom:1px solid #EEEEEE;
	}
	.wrap:last-child{
		margin-bottom:50px;
	}
	.left{
		width:40%;
		height:100%;
	}
	.left img{
		width:100%;
	}
	.right{
		width:55%;
		text-align:left;
	}
	.right h5{
		display:flex;
		justify-content:space-between;
	}
	.right>h5>span{
		color:#FF0000;
		margin-right:10px;
	}
	.right p{
		color:#999999;	
	}
	aside{
		display:flex;
		justify-content:space-around;
		color:#999999;
		overflow: hidden;
	    text-overflow: ellipsis;
	    display: -webkit-box;
	    -webkit-line-clamp: 1;
	    -webkit-box-orient: vertical;
	}
	aside span{
		margin-right:5px;
	}
	.nav-bar{
		text-align:left;
		padding-left:8px;
		box-sizing: border-box;
		border-left:3px solid rgb(232,0,18);
		font-size:1.2rem;
	}
	.classification{
		display:flex;
	}
	.twins{
		display:flex;
		justify-content:center;
		align-content:center;
		width:50%;
		text-align:center;
	}
	.twins p{
		font-size:1.2rem;
	}
	.twins span{
		font-size:1.5rem;
		line-height:40px;
		margin-right:10px;
		color:#FF0000;
	}
</style>