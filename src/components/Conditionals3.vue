<template>
	<div class="Conditionals">
		<template v-if="seen">
			<ul>
				<li>v-if结果1</li>
				<li>v-if结果2</li>
				<li>v-if结果3</li>
				<li>v-if结果4</li>
			</ul>
		</template>
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