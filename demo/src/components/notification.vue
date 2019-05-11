<template>
	<div class="container">
		<h3>基本用法</h3>
		<p>$notify方法，接收一个options字面量参数，在最简单的情况下，你可以设置title字段和message字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置duration，可以控制关闭的时间间隔，特别的是，如果设置为0，则不会自动关闭。注意：duration接收一个Number，单位为毫秒，默认为4500。 </p>
		<el-row>
			<el-button plain @click="open">可自动关闭</el-button>
			<el-button plain @click="open2">不可自动关闭</el-button>
		</el-row>
		<h3>带有图标</h3>
		<p>通过属性 type 设置，有4中：success, warning, info, error。 </p>
		<el-row>
			<el-button plain @click="open3">成功</el-button>
			<el-button plain @click="open4">警告</el-button>
			<el-button plain @click="open5">消息</el-button>
			<el-button plain @click="open6">错误</el-button>
		</el-row>
		<h3>自定义位置</h3>
		<p>使用position属性定义 Notification 的弹出位置，支持四个选项：top-right、top-left、bottom-right、bottom-left，默认为top-right。</p>
		<el-row>
			<el-button plain @click="open7">右上角</el-button>
			<el-button plain @click="open8">右下角</el-button>
			<el-button plain @click="open9">左上角</el-button>
			<el-button plain @click="open10">左下角</el-button>
		</el-row>
		<h3>自定义位置</h3>
		<p>设置 offset 属性</p>
		<el-row>
			<el-button plain @click="open11">带偏移</el-button>
		</el-row>
		<h3>使用HTML片段</h3>
		<p>将 dangerouslyUseHTMLString 属性设置为 true，message 就会被当作 HTML 片段处理。</p>
		<el-row>
			<el-button plain @click="open12">使用HTML片段</el-button>
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
		open() {
	        const h = this.$createElement;
	        this.$notify({
	          title: '标题名称',
	          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
	        });
	    },
	    open2() {
	        const h = this.$createElement;
	        this.$notify({
	          title: '标题名称',
	          message: '这是一条不会自动关闭的消息',
	          duration: 0
	        });
	    },
        open3() {
	        this.$notify({
	          title: '标题名称',
	          message: '这是一条成功的消息',
	          type:'success'
	        });
	    },
        open4() {
        	this.$notify({
	          title: '标题名称',
	          message: '这是一条警告的消息',
	          type:'warning'
	        });
	    },
        open5() {
	        this.$notify({
	          title: '标题名称',
	          message: '这是一条通知的消息',
	          type:'info'
	        });
	    },
        open6() {
	        this.$notify({
	          title: '标题名称',
	          message: '这是一条错误的消息',
	          type:'error'
	        });
	    },
        open7() {
	        this.$notify({
	          title: '标题名称',
	          message: '这是一条右上角的消息',
	          position:'top-right'
	        });
	    },
        open8() {
        	this.$notify({
	          title: '标题名称',
	          message: '这是一条右下角的消息',
	          position:'bottom-right'
	        });
	    },
        open9() {
	        this.$notify({
	          title: '标题名称',
	          message: '这是一条左上角的消息',
	          position:'top-left'
	        });
	    },
        open10() {
	        this.$notify({
	          title: '标题名称',
	          message: '这是一条左下角的消息',
	          position:'bottom-left'
	        });
	    },
	    open11(){
	    	this.$notify({
	          title: '偏移',
	          message: '这是一条带有偏移的提示消息',
	          offset: 100
	        });
	    },
	    open12(){
	    	this.$notify({
	          title: '标题',
	          message: '<strong>这是 <i>HTML</i> 片段</strong>',
	          dangerouslyUseHTMLString: true
	        });
	    }
	}
}
</script>

<style scoped>
	.el-button{
		margin-right: 10px;
	}
</style>
