<template>
	<div class="wrapper">
		<h2>按键修饰符</h2>
		<input type="" name="" id="" value="" placeholder="按键修饰符" @keyup.enter='submit'/>
	</div>
</template>

<script>
	export default {
		methods: {
			submit: function(){
				console.log('事件修饰符enter/keyCode13')
			}
		}
	}
</script>

<style>
</style>