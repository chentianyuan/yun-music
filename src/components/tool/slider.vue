<template>
	<div class="mywarper">
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide"><img src="../../../static/img/banner1_单片机相关.png"/><span class="about">独家首发</span></div>
		        <div class="swiper-slide"><img src="../../../static/img/banner2_android相关.png"/><span class="about">独家首发</span></div>
		        <div class="swiper-slide"><img src="../../../static/img/banner2_android相关.png"/><span class="about">独家首发</span></div>     
		    </div>
		    
		    <div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'	
	import '../../assets/css/swiper-3.4.2.min.css'
	//assests放置的是组件的资源
	//static放置的是非组件的资源
	//导入swiper步骤
	//npm install --save swiper
	//导入静态swiper-3.4.2.min.css
	//import Swiper 组件
	//写入html，生命起始周期初始化轮播组件，设置所需属性
	export default{
		name:'slider',
		mounted:function(){
			var swiper = new Swiper('.swiper-container', {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: 4000,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            });
		}
	}
</script>

<style scoped="scoped">
	.mywarper{
		position:relative;
		width:100%;
		height:160px;
		box-sizing:border-box;
	}
	.swiper-container {
	    width: 100%;
	    height: 160px;
	}  
	.swiper-slide{
		overflow:hidden;
	}
	.swiper-slide img{
		width:100%;
		height:160px;
	}
	.about{
		position:absolute;
		display:inline-block;
		z-index:10;
		right:-8px;
		bottom:5px;
		text-align:left;
		text-indent:8px;
		width:65px;
		height:16px;
		line-height:16px;
		border-radius:10px;
		color:#fff;
		font-size:1rem;
		background:rgb(232,0,18);
		letter-spacing:0.8px;
		-webkit-font-smoothing:antialiased;
	}
</style>