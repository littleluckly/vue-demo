<template>
	<div class="Conditionals">
		<div v-show='seen'>
			v-show 是简单地切换元素的 CSS 属性 display 。不支持 \<"template"\> 语法，也不支持 v-else。不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
		</div>
		<button @click="toggleKey">切换</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				seen: true
			}
		},
		methods: {
			toggleKey: function(){
				this.seen =  !this.seen
			}
		}
	}
</script>

<style>
</style>