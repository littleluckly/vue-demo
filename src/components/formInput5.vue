<template>
	<div class="wrapper">
		<h2>选择列表-多选列表</h2>
		<select name="" multiple v-model='selected'>
			<option value="保时捷">保时捷</option>			
			<option value="比亚迪">比亚迪</option>
			<option value="五菱宏光">五菱宏光</option>
			<option value="玛莎拉蒂">玛莎拉蒂</option>
		</select>
		<p>您选中了：{{selected}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: []
			}
		}
	}
</script>

<style>
</style>