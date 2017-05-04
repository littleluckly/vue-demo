<template>
	<div class="wrapper">
		<h2>复选框</h2>
		<input type="checkbox" name="checkbox1" id="checkbox1" value="" v-model='checked'/>
		<label for="checkbox1">{{checked}}</label>
		
		<h2>多个复选框绑定</h2>		
		<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
		<label for="jack">Jack</label>
		<input type="checkbox" id="john" value="John" v-model="checkedNames">
		<label for="john">John</label>
		<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
		<label for="mike">Mike</label>
		<br>
		<span>Checked names: {{ checkedNames }}</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: true,
				checkedNames: []
			}
		}
	}
</script>

<style>
</style>