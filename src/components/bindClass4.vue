<template>
	<div class="wrapper">

		<div v-bind:class="[hasError, hasBg]">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam deleniti non fugit totam voluptates incidunt accusamus facilis perspiciatis sed soluta quam ipsum iusto cum consequuntur. Doloremque ullam voluptates amet!
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hasError: 'text-danger',
				hasBg: 'bg'
			}
		}
	}
</script>

<style scoped>
	.text-danger {
		color: white;
	}
	.bg {
		background: red;
	}
</style>