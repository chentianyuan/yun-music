<template>
	<div class="music-list">
		<search></search>
		<headnav :account="3"></headnav>
		<!-- 面包屑导航 -->
		<p class="nav-bar">
			云音乐官方版<i class="fa fa-chevron-right" style="padding-left:6px;"></i>
		</p>
		<div class="wrap" v-for="(range,index) in ranges">
			<div class="left">
				<img src="../../../static/range_imgs/range1.jpg">
			</div>
			<div class="right">
				<p v-for="(music,index) in range.musics">{{music.name}}-{{music.author}}</p>
			</div>			
		</div>
	</div>
</template>

<script>
	import search from '@/components/tool/search'
	import headnav from '@/components/tool/headnav'	
	export default{
		name:'range',
		data(){
			return {
				ranges:{}
			}
		},
		components:{
			search,headnav
		},
		mounted(){
			this.$axios.get('./static/data3.json').then(res=>{
				this.ranges = res.data.result
			}).catch(err=>{
				console.log(err)
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
		display:flex;
		align-content:space-around;
		flex-direction:column;
	}
	.right p{
		color:#999999;	
	}
	.nav-bar{
		text-align:left;
		padding-left:8px;
		box-sizing: border-box;
		border-left:3px solid rgb(232,0,18);
		font-size:1.2rem;
	}
</style>