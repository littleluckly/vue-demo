<template>
  <div id="app">
    <h1>欢迎来到我的vue DEMO</h1>
    <div class="content">
    	    <ol type="value" class="left">
    	    	<li> <router-link to='eventHanding1'>事件监听-1</router-link></li>
			    	<li><router-link to='/eventHanding2'>事件监听-2-方法事件处理器</router-link></li>
			    	<li><router-link to='/eventHanding3'>事件监听-3-内联事件处理器</router-link></li>
			    	<li><router-link to='/eventHanding4'>事件监听-4-事件修饰符</router-link></li>
			    	<li> <router-link to='/keyModifiers'>按键修饰符</router-link></li>
			    	
			    	<li> <router-link to='/Conditionals1'>条件与循环-条件1</router-link></li>
			    	<li> <router-link to='/Conditionals2'>条件与循环-条件2-if和else</router-link></li>
			    	<li> <router-link to='/Conditionals3'>条件与循环-条件3-条件块/组</router-link></li>
			    	<li> <router-link to='/Conditionals4'>条件与循环-条件4-key管理</router-link></li>
			    	<li> <router-link to='/Conditionals5'>v-show</router-link></li>
			    	
			    	<li> <router-link to='/loops1'>条件与循环-循环1-列表循环</router-link></li>
			    	<li> <router-link to='/loops2'>条件与循环-循环2-template块循环</router-link></li>
			    	<li> <router-link to='/loops3'>条件与循环-循环3-对象迭代</router-link></li>
			    	<li> <router-link to='/loops4'>条件与循环-循环4-过滤</router-link></li>
			    	
			    	<li> <router-link to='formInput1'>表单控件绑定-文本/多行文本</router-link></li>
			    	<li> <router-link to='formInput2'>表单控件绑定-复选框checkbox</router-link></li>
			    	<li> <router-link to='formInput3'>表单控件绑定-单选框checkbox</router-link></li>
			    	<li> <router-link to='formInput4'>表单控件绑定-选择列表-单选列表</router-link></li>
			    	<li> <router-link to='formInput5'>表单控件绑定-选择列表-多选列表</router-link></li>
			    	<li> <router-link to='formInput6'>表单控件绑定-选择列表-多选列表+循环</router-link></li>
			    	<li> <router-link to='/handUserInput'>处理用户输入</router-link></li>
			    	<li> <router-link to='/dataBind'>v-model双向数据绑定</router-link></li>
			    	<li> <router-link to='/filters'>过滤器</router-link></li>
			    	<li> <router-link to='/computed1'>计算属性-1</router-link></li>
			    	<li> <router-link to='/bindClass1'>绑定class-1</router-link></li>
			    	<li> <router-link to='/bindClass2'>绑定class-2,直接绑定对象</router-link></li>
			    	<li> <router-link to='/bindClass3'>绑定class-3,绑定计算属性对象</router-link></li>
			    	<li> <router-link to='/bindClass4'>绑定class-4,传递数组</router-link></li>
			    	<li> <router-link to='/toDoList'>To do list</router-link></li>
			    </ol>
			    <div class="right clearfix">
			    	    <router-view></router-view>
			    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 li,.wrapper li {
	list-style-position:inside;
	border: 1px solid #cdcdcd;
	border-bottom: none;
	height: 44px;
	line-height: 44px;
	width: 100%;
	padding-left: 15px;
}
 li:last-child,.wrapper li:last-child{
	border-bottom: 1px solid #cdcdcd;
}
 li a, .wrapper li a{
	text-decoration: none;
	display: block;
	width: 100%;
	height: 100%;
	text-align: left;
}
div.content {
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-left: 15px;
}
.left, .right {
	width: 50%;
	box-sizing: border-box;
	padding-left: 20px;
	
}
</style>
