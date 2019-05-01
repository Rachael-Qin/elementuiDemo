<template>
	<div class="checkbox-container">
		<h3>基本用法</h3>
		<el-row>
			<el-checkbox v-model="cheacked">备选项</el-checkbox>
		</el-row>
		<h3>禁用状态</h3>
		<el-row>
			<el-checkbox v-model="cheacked" disabled>备选项</el-checkbox>
		</el-row>
		<h3>多选框组</h3>
		<el-row>
			<el-checkbox-group v-model="checkList">
			    <el-checkbox label="选项A">选项A</el-checkbox>
			    <el-checkbox label="选项B">选项B</el-checkbox>
			    <el-checkbox label="选项C">选项C</el-checkbox>
			    <el-checkbox label="禁用" disabled>禁用</el-checkbox>
			    <el-checkbox label="选中且禁用" disabled>选中且禁用</el-checkbox>
			</el-checkbox-group>
		</el-row>
		<h3>indeterminate 状态</h3>
		<p>indeterminate 属性用以表示 checkbox 的不确定状态,一般用于实现全选的效果</p>
		<el-row>
			<el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
		</el-row>
		<el-row>
			<el-checkbox-group v-model="checkedCities" @change='handleCheckedCitiesChange'>
			    <el-checkbox v-for="item in cities" :label="item" :key='item'>{{item}}</el-checkbox>
			</el-checkbox-group>
		</el-row>
		<h3>可选项目数量的控制</h3>
		<el-row>
			<el-checkbox-group v-model="checkedCities" :min='1' :max='2'>
			    <el-checkbox v-for="item in cities" :label="item" :key='item'>{{item}}</el-checkbox>
			</el-checkbox-group>
		</el-row>
		<h3>按钮样式</h3>
		<el-row>
			<el-checkbox-group v-model="checkedCities" >
			    <el-checkbox-button v-for="item in cities" :label="item" :key='item'>{{item}}</el-checkbox-button>
			</el-checkbox-group>
		</el-row>
		<el-row>
			<el-checkbox-group v-model="checkedCities" size="medium">
			    <el-checkbox-button v-for="item in cities" :label="item" :key='item'>{{item}}</el-checkbox-button>
			</el-checkbox-group>
		</el-row>
		<el-row>
			<el-checkbox-group v-model="checkedCities" size='small'>
			    <el-checkbox-button v-for="item in cities" :label="item" :key='item'>{{item}}</el-checkbox-button>
			</el-checkbox-group>
		</el-row>
		<el-row>
			<el-checkbox-group v-model="checkedCities" size='mini' disabled>
			    <el-checkbox-button v-for="item in cities" :label="item" :key='item'>{{item}}</el-checkbox-button>
			</el-checkbox-group>
		</el-row>
		<h3>带有边框</h3>
		<el-row>
			<el-checkbox-group v-model="checkList">
			    <el-checkbox label="选项A" border>选项A</el-checkbox>
			    <el-checkbox label="选项B" size='small' border>选项B</el-checkbox>
			    <el-checkbox label="选项C" size='mini' border>选项C</el-checkbox>
			    <el-checkbox label="禁用"  border disabled>禁用</el-checkbox>
			    <el-checkbox label="选中且禁用" disabled border>选中且禁用</el-checkbox>
			</el-checkbox-group>
		</el-row>
	</div>
</template>

<script>
const cityOptions = ['北京','上海','深圳','广州','杭州','贵阳'];
export default {
	data () {
	  return {
	    cheacked: true,
	    checkList:['选项A','选中且禁用'],
	    cities:cityOptions,
	    checkAll:false,
	    checkedCities:['北京','上海'],
	    isIndeterminate:true
	  };
	},
	methods:{
		handleCheckAllChange(val) {
	        this.checkedCities = val ? cityOptions : [];
	        this.isIndeterminate = false;
	    },
	    handleCheckedCitiesChange(value) {
	        let checkedCount = value.length;
	        this.checkAll = checkedCount === this.cities.length;
	        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
	    }

	}
}
</script>

<style scoped>
	.el-row{
		margin-bottom: 10px;
	}
</style>