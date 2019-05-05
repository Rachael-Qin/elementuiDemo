<template>
	<div class="radio-container">
		<h3>基本用法</h3>
		<el-row>
			<el-radio v-model="radio" label="1">备选项</el-radio>
			<el-radio v-model="radio" label="2">备选项</el-radio>
		</el-row>
		<h3>禁用状态</h3>
		<el-row>
			<el-radio v-model="radio" label="1" disabled>备选项</el-radio>
			<el-radio v-model="radio" label="2" disabled>备选项</el-radio>
		</el-row>
		<h3>单选框组</h3>
		<el-row>
			<el-radio-group v-model="radio2">
			    <el-radio :label="3">备选项</el-radio>
			    <el-radio :label="6">备选项</el-radio>
			    <el-radio :label="9">备选项</el-radio>
			</el-radio-group>
		</el-row>
		<h3>按钮样式</h3>
		<el-row>
			<el-radio-group v-model="radio3">
			    <el-radio-button label="北京">北京</el-radio-button>
			    <el-radio-button label="上海">上海</el-radio-button>
			    <el-radio-button label="广州">广州</el-radio-button>
			</el-radio-group>
		</el-row>
		<el-row>
			<el-radio-group v-model="radio3" size="medium">
			    <el-radio-button label="北京">北京</el-radio-button>
			    <el-radio-button label="上海">上海</el-radio-button>
			    <el-radio-button label="广州">广州</el-radio-button>
			</el-radio-group>
		</el-row>
		<el-row>
			<el-radio-group v-model="radio3" size="small">
			    <el-radio-button label="北京">北京</el-radio-button>
			    <el-radio-button label="上海">上海</el-radio-button>
			    <el-radio-button label="广州">广州</el-radio-button>
			</el-radio-group>
		</el-row>
		<el-row>
			<el-radio-group v-model="radio3" size="mini">
			    <el-radio-button label="北京">北京</el-radio-button>
			    <el-radio-button label="上海">上海</el-radio-button>
			    <el-radio-button label="广州">广州</el-radio-button>
			</el-radio-group>
		</el-row>
	</div>
</template>

<script>
export default {
  data () {
	  return {
	    radio: '1',
	    radio2: 6,
	    radio3: '北京'
	  }
  }
}
</script>

<style scoped>
	.el-row{
		margin-bottom: 10px;
	}
</style>
