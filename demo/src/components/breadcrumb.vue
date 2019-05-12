<template>
	<div class="container">
		<h3>基础用法</h3>
		<p> el-breadcrumb 标签中使用 el-breadcrumb-item 标签，属性 separator="/" 设置分隔符</p>
		<el-breadcrumb separator="/">
			<el-breadcrumb-item :to="{ path: '/' }">标签1</el-breadcrumb-item>
		    <el-breadcrumb-item>标签2</el-breadcrumb-item>
		    <el-breadcrumb-item>标签3</el-breadcrumb-item>
		    <el-breadcrumb-item>标签4</el-breadcrumb-item>
		</el-breadcrumb>
		<h3>图标分隔符</h3>
		<p>设置 separator-class 属性为相应的 iconfont </p>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">标签1</el-breadcrumb-item>
		    <el-breadcrumb-item>标签2</el-breadcrumb-item>
		    <el-breadcrumb-item>标签3</el-breadcrumb-item>
		    <el-breadcrumb-item>标签4</el-breadcrumb-item>
		</el-breadcrumb>
	</div>
</template>

<script>
</script>

<style scoped>
</style>
