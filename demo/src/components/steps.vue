<template>
	<div class="container">
		<h3>基础用法</h3>
		<p> el-steps 标签,内容用 el-step 标签。设置active属性，接受一个Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置space属性即可，它接受Boolean，单位为px，如果不设置，则为自适应。设置finish-status属性可以改变已经完成的步骤的状态。 </p>
		<el-steps :active="active" finish-status="success">
			<el-step title="步骤1"></el-step>
		    <el-step title="步骤2"></el-step>
		    <el-step title="步骤3"></el-step>
		</el-steps>
		<el-button style="margin-top: 12px;" @click="next">下一步</el-button>
		<h3>有描述的步骤条</h3>
		<p> el-step 标签中设置 description 属性</p>
		<el-steps :active="1">
		  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
		  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
		  <el-step title="步骤 3" description="这段就没那么长了"></el-step>
		</el-steps>
		<h3>居中的步骤条</h3>
		<p> el-steps 标签中设置 align-center 属性</p>
		<el-steps :active="1" align-center>
		  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
		  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
		  <el-step title="步骤 3" description="这段就没那么长了"></el-step>
		</el-steps>
		<h3>带图标的步骤条</h3>
		<p> el-step 标签中设置 icon 属性</p>
		<el-steps :active="1">
		  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
		  <el-step title="步骤 2" icon="el-icon-delete"></el-step>
		  <el-step title="步骤 3" icon="el-icon-upload"></el-step>
		</el-steps>
		<h3>竖式步骤条</h3>
		<p> el-steps 标签中设置 direction 属性为 vertical</p>
		<div style="height: 200px;">
			<el-steps :active="1" direction="vertical">
			  <el-step title="步骤 1"></el-step>
			  <el-step title="步骤 2"></el-step>
			  <el-step title="步骤 3"></el-step>
			</el-steps>
		</div>
		<h3>简洁风格的步骤条</h3>
		<p> el-steps 标签中设置 simple 可应用简洁风格，该条件下 align-center / description / direction / space 都将失效。</p>
		<div style="height: 200px;">
			<el-steps :active="1" simple>
			  <el-step title="步骤 1"></el-step>
			  <el-step title="步骤 2"></el-step>
			  <el-step title="步骤 3"></el-step>
			</el-steps>
		</div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			active:0
		}
	},
	methods:{
		next() {
	        if (this.active++ > 2) this.active = 0;
	    }
	}
}
</script>

<style scoped>
</style>
