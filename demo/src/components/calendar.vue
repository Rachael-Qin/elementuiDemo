<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-calendar 标签。设置 value 来指定当前显示的月份。如果 value 未指定，则显示当月。value 支持 v-model 双向绑定。</p>
		<el-calendar v-model="value">
		</el-calendar>
		<h3>自定义内容</h3>
		<p>通过设置名为 dateCell 的 scoped-slot 来自定义日历单元格中显示的内容。在 scoped-slot 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。</p>
		<el-calendar v-model="value">
			<template
			    slot="dateCell"
			    slot-scope="{date, data}">
			    <p :class="data.isSelected ? 'is-selected' : ''">
			      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
			    </p>
			</template>
		</el-calendar>
		<h3>自定义范围</h3>
		<p>设置 range 属性指定日历的显示范围。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。</p>
		<el-calendar :range="['2019-03-04', '2019-03-24']">
		</el-calendar>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			value:new Date()
 		}
 	},
 	methods:{
 		handleChange(val){
 			console.log(val);
 		}
 	}
 }
</script>

<style scoped>
	.box-card{
		width:500px;
	}
</style>
