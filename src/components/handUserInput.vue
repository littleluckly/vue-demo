<template>
	<div class="wrapper">
		<p>{{msg}}</p>
		<button @click='reverseMsg'>反转消息</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'Hello Vue.js!'
			}
		},
		methods: {
			reverseMsg: function(){
				this.msg=this.msg.split('').reverse().join('')
			}
		}
	}
</script>

<style>
</style>