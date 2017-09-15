<template>
	<div class="music-list">
		<search></search>
		<headnav :account="1">歌单待完善</headnav>
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
				<span @click="changeType(value)" value="欧美">欧美</span> |
				<span @click="changeType()">民谣</span> |
				<span @click="changeType()">轻音乐 </span>
			</div>
		</div>
	</div>
</template>

<script>
	import search from '@/components/tool/search'
	import headnav from '@/components/tool/headnav'	
	export default{
		name:'musicList',
		data(){
			return {
				listMsg:'全部歌单'
			}
		},
		components:{
			search,headnav
		},
		methods:{
			changeType(value){
				console.log(value)
			}
		}
	}
</script>

<style scoped="scoped">
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
</style>