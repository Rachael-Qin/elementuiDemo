<template>
	<div class="inputnumber-container">
		<h3>基本用法</h3>
		<el-row>
			<el-input-number v-model="num" :min="1" :max="10" @change="handleChange" placeholder='请输入内容'></el-input-number>
		</el-row>
		<h3>禁用状态</h3>
		<el-row>
			<el-input-number v-model="num" :min="1" :max="10" placeholder='请输入内容' :disabled="true"></el-input-number>
		</el-row>
		<h3>设置步数</h3>
		<p>设置 step </p>
		<el-row>
			<el-input-number v-model="num" :min="1" :max="10" placeholder='请输入内容' :step="2"></el-input-number>
		</el-row>
		<h3>严格步数</h3>
		<p>属性 step-strictly </p>
		<el-row>
			<el-input-number v-model="num" :step="2" step-strictly></el-input-number>
		</el-row>
		<h3>精度</h3>
		<p>属性 precision </p>
		<el-row>
			<el-input-number v-model="numP" :min="1" :max="10" :step="0.2" :precision='2'></el-input-number>
		</el-row>
		<h3>尺寸</h3>
		<p>medium、small、mini </p>
		<el-row>
			<el-input-number v-model="num"></el-input-number>
		</el-row>
		<el-row>
			<el-input-number v-model="num" size="medium"></el-input-number>
		</el-row>
		<el-row>
			<el-input-number v-model="num" size="small"></el-input-number>
		</el-row>
		<el-row>
			<el-input-number v-model="num" size="mini"></el-input-number>
		</el-row>
		<h3>按钮位置</h3>
		<p>属性 controls-position ，可选值：right </p>
		<el-row>
			<el-input-number v-model="num" controls-position='right'></el-input-number>
		</el-row>
	</div>
</template>

<script>
export default {
	data () {
	  return {
	    num:1,
	    numP:1
	  };
	},
	methods:{
		handleChange(val){
			console.log(val)
		}
	}
}
</script>

<style scoped>
	.el-row{
		margin-bottom: 10px;
	}
	.el-input .el-select {
	    width: 130px;
	}
</style>