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
				hasError: true,
				hasBg: false
			}
		},
		computed: {
			classObj: function(){
				return {
					'text-danger': this.hasError && this.hasBg,
					bg: this.hasError
				}
			}
		}
	}
</script>

<style scoped>
	.text-danger {
		color: black;
	}
	.bg {
		background: red;
	}
</style>