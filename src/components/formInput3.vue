<template>
	<div class="wrapper">
		<input type="radio"  id="radio1" value='爱你!!!' v-model='picked'/>
		<label for="radio1">爱你</label><br />
		<input type="radio"  id="radio2" value='不爱你!!!' v-model='picked'/>
		<label for="radio2">不爱你</label>
		<p>我真的~~~~~~~~{{picked}}</p>	
	</div>

</template>

<script>
	export default {
		data() {
			return {
				picked: ''
			}
		}
	}
</script>

<style>
</style>