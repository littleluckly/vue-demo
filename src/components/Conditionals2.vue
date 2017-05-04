<template>
	<div class="Conditionals">
		<p v-if="seen">YES</p>
		<p v-else>v-else结果：NO</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				seen: false
			}
		}
	}
</script>

<style>
</style>