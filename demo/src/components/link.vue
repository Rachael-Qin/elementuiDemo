<template>
	<div class="link-container">
		<h3>基本用法</h3>
		<el-row>
			<el-link href="https://element.eleme.io" target="_blank">默认链接</el-link>
			<el-link type="primary">主要链接</el-link>
			<el-link type="success">成功链接</el-link>
			<el-link type="warning">警告链接</el-link>
			<el-link type="danger">危险链接</el-link>
			<el-link type="info">信息链接</el-link>
		</el-row>
		<h3>禁用状态</h3>
		<el-row>
			<el-link href="https://element.eleme.io" target="_blank" disabled>默认链接</el-link>
			<el-link type="primary" disabled>主要链接</el-link>
			<el-link type="success" disabled>成功链接</el-link>
			<el-link type="warning" disabled>警告链接</el-link>
			<el-link type="danger" disabled>危险链接</el-link>
			<el-link type="info" disabled>信息链接</el-link>
		</el-row>
		<h3>下划线</h3>
		<el-row>
			<el-link>有下划线</el-link>
			<el-link :underline="false">无下划线</el-link>
		</el-row>
		<h3>图标</h3>
		<el-row>
			<el-link icon="el-icon-edit">编辑</el-link>
			<el-link><i class="el-icon-search"></i>搜索</el-link>
		</el-row>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.el-link{
		margin-right: 10px;
	}
</style>