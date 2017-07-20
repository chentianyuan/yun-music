<template>
	<div class="search">
		<i class="fa fa-volume-down"></i>	
		<span class="fa fa-search"></span>
		<input placeholder="搜索音乐、歌词、电台" />
		<i class="fa fa-align-left"></i>
	</div>
</template>

<script>
	export default{
		name:'search'
	}
</script>
	
<style scoped="scoped">
	.search{
		height:4rem;
		background:rgb(232,0,18);
		width:100%;
		text-align:left;
		text-align:center;
		box-sizing:border-box;
	}
	.search i{
		display:inline-block;
		line-height:4rem;
		font-size:1.5rem;
		width:8%;
		color:#fff;
		vertical-align:middle;
		
	}
	.search span{
		color:#AAAAAA;
		display:inline-block;
		position:absolute;
		left:50%;
		top:1.4rem;
		width:1.6rem;
		text-align:center;
		margin-left:-74px;
		z-index:10;
	}
	.search input{
		position:relative;
		display:inline-block;
		height:1.6rem;
		line-height:1.6rem;
		width:81%;
		outline:0;
		border:0;
		border-radius:10px;
		text-align:center;
		font-size:1.1rem;
		vertical-align:middle;
		box-sizing:border-box;
	}
	.search input::-webkit-input-placeholder{
		color:#AAAAAA;
	}
</style>