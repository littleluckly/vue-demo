<template>
	<div class="wrapper">
		<h2>循环的结果</h2>
		<ul>
			<template v-for='(item ,index) in items'>
				<li >第{{index+1}}个菜：{{item.food}}</li>
				<div >
					_______________________________________________________________________					
				</div>
			</template>
			
			
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				items:[
					{food:'鱼香肉丝'},
					{food:'番茄炒蛋'},
					{food:'农家小炒肉'}
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