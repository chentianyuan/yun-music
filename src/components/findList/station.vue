<template>
	<div class="music-list">
		<search></search>
		<headnav :account="2"></headnav>
	</div>
</template>

<script>
	import search from '@/components/tool/search'
	import headnav from '@/components/tool/headnav'	
	export default{
		name:'station',	
		data(){
			return {
				
			}
		},
		components:{
			search,headnav
		}
	}
</script>

<style>
</style>