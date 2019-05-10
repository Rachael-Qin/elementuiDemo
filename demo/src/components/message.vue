<template>
	<div class="container">
		<h3>基本用法</h3>
		<p>方法中使用 $message </p>
		<el-row>
			<el-button :plain="true" @click="open">打开消息提示</el-button>
			<el-button :plain="true" @click="openVn">VNode</el-button>
		</el-row>
		<h3>不同状态</h3>
		<p>设置 type 字段 </p>
		<el-row>
			<el-button :plain="true" @click="open2">成功</el-button>
		    <el-button :plain="true" @click="open3">警告</el-button>
		    <el-button :plain="true" @click="open">消息</el-button>
		    <el-button :plain="true" @click="open4">错误</el-button>
		</el-row>
		<h3>可关闭</h3>
		<p>设置 showClose 字段</p>
		<el-row>
			<el-button :plain="true" @click="open5">错误</el-button>
		</el-row>
		<h3>文字居中</h3>
		<p>设置 center 字段</p>
		<el-row>
			<el-button :plain="true" @click="open6">消息</el-button>
		</el-row>
		<h3>使用 HTML 片段</h3>
		<p>设置 dangerouslyUseHTMLString 为 true </p>
		<el-row>
			<el-button :plain="true" @click="open7">HTML 片段</el-button>
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
	        this.$message('这是一条消息提示');
	    },
        openVn() {
	        const h = this.$createElement;
	        this.$message({
	          message: h('p', null, [
	            h('span', null, '内容可以是 '),
	            h('i', { style: 'color: teal' }, 'VNode')
	          ])
	        });
	    },
	    open2() {
	        this.$message({
	          message: '恭喜你，这是一条成功消息',
	          type: 'success'
	        });
	    },
        open3() {
	        this.$message({
	          message: '警告哦，这是一条警告消息',
	          type: 'warning'
	        });
	    },
        open4() {
	        this.$message.error('错了哦，这是一条错误消息');
	    },
        open5() {
	        this.$message({
	        	message:'错了哦，这是一条错误消息',
	        	type:'error',
	        	showClose:true
	        })
	    },
        open6() {
	        this.$message({
	        	message:'这是一条普通居中消息',
	        	type:'info',
	        	center:true
	        })
	    },
        open7() {
	        this.$message({
	        	message:'<strong>这是<i>HTML</i>片段</strong>',
	        	type:'info',
	        	dangerouslyUseHTMLString:true
	        })
	    }
	}
}
</script>

<style scoped>
	.el-button{
		margin-right: 10px;
	}
</style>
