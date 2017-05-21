<template>
	<div>
		<slot-child2 :items="items">
		  <!-- 作用域插槽也可以是具名的 -->
		  <template slot="item" scope="props">
		    <li class="my-fancy-item">{{ props.text }}</li>
		  </template>
		</slot-child2>
	</div>
</template>

<script>
	import slotChild2	from '@/components/slotChild2'
	export default {
		data() {
			return {
				items: ''
			}
		},
		components: {
			slotChild2
		}
		
	}
</script>

<style>
</style>