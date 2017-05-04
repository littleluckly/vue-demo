<template>
	<div class="wrapper">
		<div v-bind:class="classObj">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam deleniti non fugit totam voluptates incidunt accusamus facilis perspiciatis sed soluta quam ipsum iusto cum consequuntur. Doloremque ullam voluptates amet!
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				classObj:{
					'text-danger': true,
					bg: true
				}
			}
		}
	}
</script>

<style scoped>
	.text-danger {
		color: red;
	}
	.bg {
		background: greenyellow;
	}
</style>