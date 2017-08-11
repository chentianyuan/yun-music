<template>
	<div class="footer">
		<audio id="audio" v-bind:src="this.music_information.mp3.url" controls="controls" autoplay="autoplay"></audio>
		<div class="relaudio">
			<img v-bind:src="this.music_information.al.picUrl">
			<div class="infor">
				<h6>{{music_information.al.name}}</h6>
				<p>{{music_information.ar[0].name}}</p>
			</div>
			<div class="contrals">
				<span class="fa fa-chevron-left" v-on:click="Prev"></span>
				<span id="choose" class="fa fa-stop" v-on:click="play"></span>
				<span class="fa fa-chevron-right" v-on:click="Next"></span>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
	export default{
		name:'music',
		data(){
			return {
				music_information:{
					al:{
						picUrl:"http://p1.music.126.net/JjHI2mCu2zKR3HBbDCqUPQ==/17796695207468807.jpg"
					},
					ar:[{name:''}],
					mp3:{
						url:''
					}
				},
				isPlaying:true
			}
		},
		computed:{
			//为了简单也可以直接在computed中获取#store.state
			//计算属性监听vuex中的状态变化并返回，在watch中获取到此返回的数据重新给此vue实例data赋值
		   getUserIcons() {
		        return this.$store.state.music.id
		    }
		},
		watch: {
		    getUserIcons(val) {
		        //this.music_information = val
		        var id = val
				//长串的为歌曲id
				var that = this		
				axios.get('https://bird.ioliu.cn/netease/song?id='+id).then(
					res => {
						that.music_information = res.data.data
						//console.log(that.music_information)
						}
					).catch(err => {})
		    }
		},
		methods:{
			play(){
				var audio = document.querySelector('#audio')

				if(!this.isPlaying){
					audio.play()
					this.change()
					this.isPlaying = true

				}else{
					audio.pause()
					this.change()
					this.isPlaying = false
				}
			},
			change(){
				var choose = document.querySelector("#choose")
				if(this.isPlaying){
					choose.className = 'fa fa-play'
				}else{
					choose.className = 'fa fa-stop'	
				}
			},
			Prev(){
				this.$store.dispatch('PrevMusic')
			},
			Next(){
				this.$store.dispatch('NextMusic')
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
	}
	audio{
		display:none;
	}
	.relaudio{
		height:50px;
		width:100%;
		background:#fff;
		opacity:0.9;
		padding:5px;
		box-sizing: border-box;
		text-align:left;
		/*display:none;*/
	}
	.relaudio img{
		margin-left:4px;
		width:40px;
		height:40px;
		border-radius:1px;
	}
	.infor{
		display:inline-block;
		vertical-align:top;
		max-width:40%;
		overflow:hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
	}
	.infor h6,p{
		margin:4px 5px;
		font-size:1.2rem;
	}
	.contrals{
		vertical-align:top;
		display:inline-block;
		text-align:center;	
			float:right;
			height:50px;
			box-sizing: border-box;
			line-height:50px;
	}
	.contrals span{
		display:inline-block;
		line-height:20px;
		width:20px;
		height:20px;
		padding:5px;
		margin-left:5px;
		color:#FF0000;		
		font-size:1.2rem;
	}
	.contrals span:nth-child(even){
		border:1px solid #FF0000;
		border-radius:50% !important;
		transition: all 1s;
	}
</style>