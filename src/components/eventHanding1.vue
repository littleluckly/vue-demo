<template>
	<div class="wrapper">
		<button  @click='count += 1'>count：{{count}}</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				count:0
			}
		}
	}
</script>

<style>
</style>