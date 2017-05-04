<template>
	<div class="wrapper">
		<h2>选择列表-多选列表</h2>
		<select name="" multiple v-model='selected'>
			<option v-for='hero in games' :value=hero.name>{{hero.name}}</option>			
		</select>
		<p>您选中了：{{selected}}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				selected: [],
				games:[
					{name: '孙悟空'},
					{name: '宫本武藏'},
					{name: '不知火舞'},
					{name: '橘右京'}
				]
			}
		}
	}
</script>

<style>
</style>