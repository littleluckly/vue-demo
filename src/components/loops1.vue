<template>
	<div class="wrapper">
		<h2>循环的结果</h2>
		<ul>
			<li v-for='(item ,index) in items'>第{{index+1}}个英雄：{{item.hero}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items:[
					{hero:'鲁班七号'},
					{hero:'后裔'},
					{hero:'娜可露露'}
				]
			}
		}
	}
</script>

<style>
	li {
		list-style: none;
	}
</style>