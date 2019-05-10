<template>
	<div class="container">
		<h3>基本用法</h3>
		<p>Alert 组件提供四种主题，由type属性指定，默认值为info。</p>
		<el-row>
			<el-alert title="成功提示的文案" type="success"> </el-alert>
		    <el-alert title="消息提示的文案" type="info"> </el-alert>
			<el-alert title="警告提示的文案" type="warning"></el-alert>
		    <el-alert title="错误提示的文案" type="error"></el-alert>
		</el-row>
		<h3>主题</h3>
		<p>通过设置 effect 属性来改变主题，默认为light。两个不同的主题：light和dark。</p>
		<el-row>
			<el-alert title="成功提示的文案" type="success" effect="dark"> </el-alert>
		    <el-alert title="消息提示的文案" type="info" effect="dark"> </el-alert>
			<el-alert title="警告提示的文案" type="warning" effect="dark"></el-alert>
		    <el-alert title="错误提示的文案" type="error" effect="dark"></el-alert>
		</el-row>
		<h3>自定义关闭按钮</h3>
		<p>在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。closable属性决定是否可关闭，接受boolean，默认为true。你可以设置close-text属性来代替右侧的关闭图标，注意：close-text必须为文本。设置close事件来设置关闭时的回调。</p>
		<el-row>
			<el-alert title="不可关闭的警告" type="success" :closable="false"> </el-alert>
		    <el-alert title="自定义 close-text" type="info" close-text="知道了"> </el-alert>
			<el-alert title="设置了回调的 alert" type="warning" @close="hello"></el-alert>
		</el-row>
		<h3>带有图标</h3>
		<p>设置属性 show-icon </p>
		<el-row>
			<el-alert title="成功提示的文案" type="success" show-icon> </el-alert>
		    <el-alert title="消息提示的文案" type="info" show-icon> </el-alert>
			<el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
		    <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
		</el-row>
		<h3>文字居中</h3>
		<p>设置属性 center </p>
		<el-row>
			<el-alert title="成功提示的文案" type="success" show-icon center> </el-alert>
		    <el-alert title="消息提示的文案" type="info" show-icon center> </el-alert>
			<el-alert title="警告提示的文案" type="warning" show-icon center></el-alert>
		    <el-alert title="错误提示的文案" type="error" show-icon center></el-alert>
		</el-row>
		<h3>带有辅助性文字</h3>
		<p>设置属性 description </p>
		<el-row>
			<el-alert
			    title="带辅助性文字介绍"
			    type="success"
			    description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
			</el-alert>
		</el-row>
	</div>
</template>

<script>
export default{
	data(){
		return {
		}
	},
	methods:{
		hello(){
			alert('Hello World!');
		}
	}
}
</script>

<style scoped>
	.el-alert{
		margin-bottom: 10px;
	}
</style>
