<template>
	<div>
		<h2>我是父组件</h2>
		<slot-child1>
			<p>这是初始内容，当我存在的时候，我会替换子组件的slot内容，只有把我注释，子组件的slot默认内容才会出现</p>
			<p>这也是初始内容！！！，当我存在的时候，我会替换子组件的slot内容，只有把我注释，子组件的slot默认内容才会出现</p>
			<p slot='nameSlot'>我是带有slot属性的初始内容！我始终都会显示噢噢噢噢哦哦哦哦哦哦！，我的位置在两个初始内容上面</p>
		</slot-child1>
	</div>
</template>

<script>
	import slotChild1 from '@/components/slotChild1';
	export default {
		components: {
			slotChild1
		}
	}
</script>

<style>
</style>