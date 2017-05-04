<template>
	<div class="wrapper">
		<p>the original data is <h4>{{msg}}</h4></p>
		<p>the computed data is <h4>{{reverseMsg}}</h4></p>		
	</div>

</template>

<script>
	export default {
		data() {
			return {
				msg:'hello world ！'
			}
		},
		computed: {
			reverseMsg: function(){
				return this.msg.split('').reverse().join('');
			}
		}
	}
</script>

<style>
	h4 {
		display: inline-block;
	}
</style>