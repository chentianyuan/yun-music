<template>
  <div id="app">
    <router-view></router-view>
    <footer-View></footer-View>
  </div>
</template>

<script>
import footerView from "./components/main/footer.vue"
export default {
		name:'app',
		components:{
			footerView
		}
}
</script>

<style>
html{
	font-size:10px;
}
body{
	margin:0;
	padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif, Font-Awesome;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
}
hr{
	border:none;
	border-bottom:1px solid #eeeeee;
	margin-top:8px;
}
</style>
