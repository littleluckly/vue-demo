<template>
	<ul>
	  <slot name="item"
	    v-for="item in items"
	    :text="item.text">
	    <!-- 这里写入备用内容 -->
	  </slot>
	</ul>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{text: '我是子组件的内容1'},
					{text: '我是子组件的内容2'},
					{text: '我是子组件的内容3'},
					{text: '我是子组件的内容4'},
					{text: '我是子组件的内容5'}
				]
			}
		}
	}
</script>

<style>
</style>