<template>
	<div class="wrapper">
		<h2>循环的结果</h2>
		<ul>
			<template v-for='(value,key) in foodObj'>
				<li >{{key}}:{{value}}</li>
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
				foodObj:{
					one: '奔驰',
					two: '蔚来',
					three: '比亚迪'
				}
			}
		}
	}
</script>

<style>
	li {
		list-style: none;
	}
</style>