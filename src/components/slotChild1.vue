<template>
	<div>
		<h4>我是子组件</h4>
		<br />
		
		<slot name='nameSlot'>具名slot</slot>
		<slot>我是子组件的slot默认内容，仅当父组件中没有不具名slot分发的内容时候，我才会显示</slot>
	</div>
</template>

<script>
</script>

<style>
</style>