<template>
	<div class="wrapper">
		<button @click="say('hi')">say hi</button>

	</div>
	
</template>

<script>
	export default {
		methods: {
			say: function(msg){
				alert(msg)
			}
		}
	}
</script>

<style>
</style>