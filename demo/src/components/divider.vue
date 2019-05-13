<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-divider 标签(类似于br标签的用法，区别是有结束标签)</p>
		<div>
			<span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
			<el-divider></el-divider>
			<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
		</div>
	    <h3>可在分割线上自定义文案内容</h3>
		<p> 设置 content-position 属性，有3个选项：left / right / center(默认)</p>
		<el-card>
			<span>青春是一个短暂的美梦, 当你醒来时, 它早已消失无踪</span>
			<el-divider content-position="left">分割线中文案1</el-divider>
			<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
			<el-divider><i class="el-icon-info"></i></el-divider>
			<span>少量的邪恶足以抵消全部高贵的品质, 害得人声名狼藉</span>
			<el-divider content-position="right">分割线中文案3</el-divider>
		</el-card>
		<h3>可在分割线上自定义文案内容</h3>
		<p> 设置 direction 属性，有2个选项：horizontal(默认) / vertical</p>
		<div>
			<span>青春</span>
			<el-divider direction="vertical"></el-divider>
			<span>高贵</span>
			<el-divider direction="vertical"></el-divider>
			<span>品质</span>
		</div>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			reverse: true,
 			activities: [{
	          content: '活动按期开始',
	          timestamp: '2018-04-15'
	        }, {
	          content: '通过审核',
	          timestamp: '2018-04-13'
	        }, {
	          content: '创建成功',
	          timestamp: '2018-04-11'
	        }],
	        activities2: [{
	          content: '支持使用图标',
	          timestamp: '2018-04-12 20:46',
	          size: 'large',
	          type: 'primary',
	          icon: 'el-icon-more'
	        }, {
	          content: '支持自定义颜色',
	          timestamp: '2018-04-03 20:46',
	          color: '#0bbd87'
	        }, {
	          content: '支持自定义尺寸',
	          timestamp: '2018-04-03 20:46',
	          size: 'large'
	        }, {
	          content: '默认样式的节点',
	          timestamp: '2018-04-03 20:46'
	        }]
 		}
 	},
 	methods:{
 	}
 }
</script>

<style scoped>
	.box-card{
		width:500px;
	}
	.radio {
	    margin-bottom: 20px;
	} 
</style>
