<template>
	<div class="Conditionals">
		<template v-if="seen">
			<label for="">用户名：</label>
			<input type="text" name="" id="" value="" placeholder="请输入用户名" key='user-name'/>
		</template>
		<template v-else>
			<label for="">邮箱：</label>
			<input type="text" name="" id="" value="" placeholder="请输入邮箱" key='user-mail'/>
		</template>
		<br />
		<br />
		<p>如果不使用key管理，那么上面两个模板不会重复渲染，如果加了key值，那么会重复渲染</p>
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