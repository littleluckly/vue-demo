<template>
	<div class="wrapper">
		<div v-bind:class="{ active: isActive }">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam magnam sed accusantium distinctio exercitationem quam tempore quaerat recusandae fugit neque ea incidunt molestias enim. Rem hic dolorum eos fugit accusamus!
		</div>
		<div v-bind:class="{ 'text-danger': hasError,bg:hasBg }">
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi veniam deleniti non fugit totam voluptates incidunt accusamus facilis perspiciatis sed soluta quam ipsum iusto cum consequuntur. Doloremque ullam voluptates amet!
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isActive:true,
				hasError: true,
				hasBg: true
			}
		}
	}
</script>

<style scoped>
	.active {
		color: cadetblue;
	}
	.text-danger {
		color: darkred;
	}
	.bg {
		background: greenyellow;
	}
</style>