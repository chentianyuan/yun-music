<!--<template>
	<div>
		
		<audio v-bind:src="this.music_information.mp3.url" controls="controls" autoplay="autoplay"></audio>
		
	</div>
</template>

<script>
	import axios from 'axios'
	export default{
		name:'music',
		data(){
			return {
				music_information:{
					mp3:{
						url:''
					}
				}
			}
		},
		mounted(){
			var  id = this.$store.state.music.id
			//长串的为歌曲id
			var that = this
			
			axios.get('https://bird.ioliu.cn/netease/song?id='+id).then(
				res => {
					that.music_information = res.data.data
					}
				).catch(err => {})
		}
	}
</script>

<style>
</style>-->