<template>
	<button @click='increment'>{{count}}</button>
</template>

<script>
	export default {
		data () {
			return {count:0}
		},
		methods: {
			increment () {
				this.count++;
			}
		}
	}
</script>

<style>
	button {
		border: 1px solid #1E9FFF;
		background: transparent;
		padding: 5px 50px;
		font-size: 24px;
		text-align: center;
		border-radius: 5px;
	}
</style>