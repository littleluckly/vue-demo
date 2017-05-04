<template>
	<div class="Conditionals">
		<p v-if="seen">这是条件v-if的结果：条件和循环</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				seen: true
			}
		}
	}
</script>

<style>
</style>