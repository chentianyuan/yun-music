<template>
	<div class="head-nav">
		<ul>
			<li v-bind:class="account == 0 ? 'in' : '' "><router-link to="/">个性推荐</router-link></li>
			<li v-bind:class="account == 1 ? 'in' : '' "><router-link to="/findList/musicList">歌单</router-link></li>
			<li v-bind:class="account == 2 ? 'in' : '' "><router-link to="/findList/station">主播电台</router-link></li>
			<li v-bind:class="account == 3 ? 'in' : '' "><router-link to="/findList/range">排行榜</router-link></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'headnav',
		//父组件findmusic向该子组件传递了值account，该子组件通过account判断当前位置
		props:["account"]
	}
</script>

<style scoped="scoped">
	.head-nav{
		width:100%;
		height:3rem;
		box-sizing:border-box;
	}
	.head-nav ul{
		height:3rem;
		list-style:none;
		box-sizing:border-box;
		padding-left:0;
		margin:0;
	}
	.head-nav ul li{
		float:left;
		width:19%;
		height:3rem;
		margin:0 3%;
		box-sizing:border-box;
	}
	.head-nav ul li a{
		text-decoration:none;
		color:#000000;
		line-height:3rem;
		font-size:1.2rem;
		letter-spacing:0.5px;
		-webkit-font-smoothing:antialiased;
	}
	.in{
		border-bottom:2px solid rgb(232,0,18);

		
	}
	.in a{
		color:rgb(232,0,18) !important;
	}
</style>