<template>
  	<div id="app" v-cloak :class="{'change-page':changePage}" >
		<!-- 路由 -->
		<div class="wrap">
			<router-view class="v"  :transition="effect" keep-alive></router-view>
		</div>

		<!-- 导航 -->
		<navbar v-if="isIndex"></navbar>
		<!-- loading -->
		<!-- <loading :show="loadshow"></loading> -->
	</div>
</template>

<script>
	import Navbar from 'components/navbar.vue';

	export default {
		data () {
			return {
				effect     :  'normal', //用于切换过渡动画
				isIndex    :  true,   //用于navbar导航
				changePage :  false   //用于过渡设置样式
			}
		},
		components: {
			Navbar
		}
	}
</script>

<style>
	[v-cloak] { 
		display: none;
	}
</style>


