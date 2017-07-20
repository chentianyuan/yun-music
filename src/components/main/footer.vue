<template>
	<div class="footer">
		<ul>
			<li v-bind:class="which == 0 ? 'active' : '' " v-on:click="change(0)"><span class="fa fa-pinterest-p"></span><a href="javascript:">发现音乐</a></li>
			<li v-bind:class="which == 1 ? 'active' : '' " v-on:click="change(1)"><span class="fa fa-music"></span><a href="javascript:">我的音乐</a></li>
			<li v-bind:class="which == 2 ? 'active' : '' " v-on:click="change(2)"><span class="fa fa-users"></span><a href="javascript:">朋友</a></li>
			<li v-bind:class="which == 3 ? 'active' : '' " v-on:click="change(3)"><span class="fa fa-user-o"></span><a href="javascript:">账号</a></li>		
		</ul>
	</div>
</template>

<script>
export default{
		data(){
			return{
				which:0
			}
		},
		methods:{
			change(index){
				if(index == this.which)
					return;
				switch(index){
					case 0:
					this.which = 0;
					this.$router.push({'path':'/'});
					break
					case 1:
					this.which = 1;
					this.$router.push({'path':'/mineMusic'});
					break;
					case 2:
					this.which = 2;
					this.$router.push({'path':'/Friends'});
					break;
					case 3:
					this.which = 3;
					this.$router.push({'path':'/Mine'});
					break;
			}
		}
}
	}
</script>

<style scoped="scoped">
	.footer{
		position:fixed;
		left:0;
		bottom:0;
		height:50px;
		width:100%;
		background:#000;
	}
	.footer ul{
		width:100%;
		height:50px;
		padding-left:0;
		margin-top:0;
		box-sizing:border-box;
	}
	.footer li{
		float:left;
		width:25%;
		text-align:center;
		color:#fff;
		list-style:none;
		opacity:0.5;
		cursor:pointer;
		height:50px;
	}
	.footer li a{
		display:inline-block;
		margin-top:0.3rem;
		font-size:1rem;
		color:#fff;
		text-decoration:none;
	}
	.footer li span{
		display:block;
		font-size:1.7rem;
		margin-top:1rem;
	}
	.active{
		opacity:1 !important;
	}
</style>