<template>
	<div class="toDoList">
		<label for="">待办事项</label>
		<input type="text" placeholder="新增待办事项" @keyup.enter='addNew' v-model='newItem'/>
		<ul>
			<li v-for='(item,index) in todos'>{{item}} <button @click='removeItem(index)'>删除</button></li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				newItem: '',
				todos:[
					'吃饭',
					'睡觉',
					'打豆豆'
				]
			}
		},
		methods: {
			addNew: function(){
				this.todos.push(this.newItem);
				this.newItem=''
			},
			removeItem: function(idx){
				this.todos.splice(idx,1);
			}
		}
	}
</script>

<style scoped>
	button{
		padding: 3px 6px;
		font-size: 14px;
		margin: 10px 5px;
	}
</style>