<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-collapse 标签 和 el-collapse-item 标签。可同时展开多个面板，面板之间不影响</p>
		<div class="box-card">
			<el-collapse v-model="activeNames" @change="handleChange">
				<el-collapse-item title="标签1" name="1">
					<div>1-1内容内容内容内容内容内容内容内容</div>
				    <div>1-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签2" name="2">
					<div>2-1内容内容内容内容内容内容内容内容</div>
				    <div>2-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签3" name="3">
					<div>3-1内容内容内容内容内容内容内容内容</div>
				    <div>3-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
		    </el-collapse>
	    </div>
	    <h3>手风琴效果</h3>
		<p> 通过 accordion 属性来设置是否以手风琴模式显示。每次只能展开一个面板。</p>
		<div class="box-card">
			<el-collapse v-model="activeNames" @change="handleChange" accordion>
				<el-collapse-item title="标签1" name="1">
					<div>1-1内容内容内容内容内容内容内容内容</div>
				    <div>1-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签2" name="2">
					<div>2-1内容内容内容内容内容内容内容内容</div>
				    <div>2-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签3" name="3">
					<div>3-1内容内容内容内容内容内容内容内容</div>
				    <div>3-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
		    </el-collapse>
	    </div>
	    <h3>自定义面板标题</h3>
		<p>除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
		<div class="box-card">
			<el-collapse accordion>
				<el-collapse-item>
					<template slot="title">
				      标签1<i class="header-icon el-icon-info"></i>
				    </template>
					<div>1-1内容内容内容内容内容内容内容内容</div>
				    <div>1-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签2" name="2">
					<div>2-1内容内容内容内容内容内容内容内容</div>
				    <div>2-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
				<el-collapse-item title="标签3" name="3">
					<div>3-1内容内容内容内容内容内容内容内容</div>
				    <div>3-2内容内容内容内容内容内容内容内容</div>
				</el-collapse-item>
		    </el-collapse>
	    </div>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			activeNames:['1']
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
