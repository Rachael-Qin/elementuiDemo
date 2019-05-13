<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-timeline 标签和 el-timeline-item 标签。</p>
		<div class="radio">
			<span>排序：</span>
			<el-radio-group v-model="reverse">
				<el-radio :label="true">倒序</el-radio>
				<el-radio :label="false">正序</el-radio>
			</el-radio-group>
		</div>
		<div class="box-card">
			<el-timeline :reverse="reverse">
		      <el-timeline-item v-for="(activity, index) in activities" 
		        :key="index" 
			    :timestamp="activity.timestamp">
			    {{activity.content}}
			  </el-timeline-item>
		    </el-timeline>
	    </div>
	    <h3>自定义节点样式</h3>
		<p> 可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。属性 icon 、 type 、 color 、 size 。</p>
		<div class="box-card">
			<el-timeline>
		      <el-timeline-item v-for="(activity, index) in activities2" 
		        :key="index" 
		        :icon="activity.icon"
		        :type="activity.type"
		        :color="activity.color"
		        :size="activity.size"
			    :timestamp="activity.timestamp">
			    {{activity.content}}
			  </el-timeline-item>
		    </el-timeline>
	    </div>
	    <h3>自定义时间戳</h3>
		<p> 可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标。属性 icon 、 type 、 color 、 size 。</p>
		<div class="box-card">
			<el-timeline>
		      <el-timeline-item timestamp="2019/4/12" placement="top">
			    <el-card>
			    	<h3>标题1</h3>
			    	<div>张三 提交于 2019/4/12 10:10:10</div>
			    </el-card>
			  </el-timeline-item>
			  <el-timeline-item timestamp="2019/4/6" placement="top">
			    <el-card>
			    	<h3>标题2</h3>
			    	<div>张三 提交于 2019/4/6 10:10:10</div>
			    </el-card>
			  </el-timeline-item>
			  <el-timeline-item timestamp="2019/4/1" placement="top">
			    <el-card>
			    	<h3>标题3</h3>
			    	<div>张三 提交于 2019/4/1 10:10:10</div>
			    </el-card>
			  </el-timeline-item>
		    </el-timeline>
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
