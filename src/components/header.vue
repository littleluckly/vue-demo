<template>
	<div id="">
		
		<h1 > {{transData}}</h1>
		<button class="childTotal" v-on:click='incrementChild'>我是子组件{{childTotal}}</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				childTotal: 0
			}
		},
		props: {//transData是从父组件App.vue传递过来的
			transData:{type: String}
		},
		methods: {
			incrementChild: function(){
				this.childTotal++;
				this.$emit('incrementChild')
			}
		}
	}
</script>

<style>
</style>