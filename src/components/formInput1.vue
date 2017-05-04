<template>
	<div class="wrapper">
		<h2>单行文本</h2>
		<input type="" name="" id="" value="" placeholder="单行文本" v-model='msg1'/>
		<p>{{msg1}}</p>
		<h2>多行文本</h2>
		<textarea name="" rows="" cols="" placeholder="多行文本" v-model='msg2'></textarea>
		<p class="msg2">{{msg2}}</p>		
	</div>

</template>

<script>
	export default {
		data() {
			return {
				msg1: 'msg1',
				msg2: 'msg2'
			}
		}
	}
</script>

<style scoped>
	.msg2 {
		white-space: pre;
	}
</style>