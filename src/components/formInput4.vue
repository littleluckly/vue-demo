<template>
	<div class="wrapper">
		<h2>选择列表-单选列表</h2>
		<select name="" id="" v-model='selected' value="A">
			<option value="亚瑟!">亚瑟</option>
			<option value="甄姬!">甄姬</option>
			<option value="王昭君!">王昭君</option>
		</select>
		<p>您选择的英雄是：{{selected}}</p>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: null
			}
		}
	}
</script>

<style>
</style>