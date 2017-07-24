<template>
	<div>music</div>
</template>

<script>
	export default{
		name:'music',
		data(){
			return {
				music_information:{}
			}
		},
		mounted(){
			console.log(this.$store.state.music.al.picUrl)
		}
	}
</script>

<style>
</style>