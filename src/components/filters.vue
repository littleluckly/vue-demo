<template>
	<p>{{msg | capitalize}}</p>
</template>

<script>
	export default {
		data() {
			return {
				msg: 'hello world !'
			}
		},
		filters: {
			capitalize: function(value){
				if(!value) return ''
				value =value.toString();
				return value.charAt(0).toUpperCase()+value.slice(1);
			}
		}
	}
</script>

<style>
</style>