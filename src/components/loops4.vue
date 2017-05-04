<template>
	<div class="wrapper">
		<!--<p>源数据：{{numbers.join(' ')}}</p>
		<p>偶数：{{evenNumbers.join(' ')}}</p>-->
		<p v-for='num in numbers'>源数据：{{num}}</p>
		<ul>
			<li v-for='num in evenNumbers'>偶数：{{num}}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				numbers:[1,2,3,4,5,6]
			}
		},
		computed: {
			evenNumbers:function(){
				return this.numbers.filter(function(num){
					return num % 2 === 0
				})
			}
		}
	}
</script>

<style>
</style>