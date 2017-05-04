<template>
	<div class="wrapper">
		<p>{{msg}}</p>
		<input type="text" v-model='msg' />
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '双向数据绑定'
			}
		}
	}
</script>

<style>
</style>