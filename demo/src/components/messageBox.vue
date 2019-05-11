<template>
	<div class="container">
		<h3>消息提示</h3>
		<p>调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，message和title。值得一提的是，窗口被关闭后，它默认会返回一个Promise对象便于进行后续操作的处理。若不确定浏览器是否支持Promise，可自行引入第三方 polyfill 或像本例一样使用回调进行后续处理。 </p>
		<el-row>
			<el-button type="text" @click="open">点击打开 Message Box</el-button>
		</el-row>
		<h3>确认消息</h3>
		<p>调用$confirm方法即可打开消息提示，它模拟了系统的 confirm。Message Box 组件也拥有极高的定制性，我们可以传入options作为第三个参数，它是一个字面量对象。type字段表明消息类型，可以为success，error，info和warning，无效的设置将会被忽略。注意，第二个参数title必须定义为String类型，如果是Object，会被理解为options。在这里我们用了 Promise 来处理后续响应。 </p>
		<el-row>
			<el-button type="text" @click="open2">点击打开 Message Box</el-button>
		</el-row>
		<h3>提交内容</h3>
		<p>调用 $prompt 方法即可打开消息提示，它模拟了系统的 prompt。可以用inputPattern字段自己规定匹配模式，或者用inputValidator规定校验函数，可以返回Boolean或String，返回false或字符串时均表示校验未通过，同时返回的字符串相当于定义了inputErrorMessage字段。此外，可以用inputPlaceholder字段来定义输入框的占位符。</p>
		<el-row>
			<el-button type="text" @click="open3">点击打开 Message Box</el-button>
		</el-row>
		<h3>自定义</h3>
		<p>调用 $msgbox 方法</p>
		<el-row>
			<el-button type="text" @click="open4">点击打开 Message Box</el-button>
		</el-row>
		<h3>使用HTML片段</h3>
		<p>调用 $msgbox 方法</p>
		<el-row>
			<el-button type="text" @click="open5">点击打开 Message Box</el-button>
		</el-row>
		<h3>区分关闭和取消</h3>
		<p>设置 distinguishCancelAndClose 为 true</p>
		<el-row>
			<el-button type="text" @click="open6">点击打开 Message Box</el-button>
		</el-row>
		<h3>居中布局</h3>
		<p>将 center 设置为 true 即可开启居中布局</p>
		<el-row>
			<el-button type="text" @click="open7">点击打开 Message Box</el-button>
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
	        this.$alert('这是一条消息提示','标题名称',{
	        	confirmButtonText: '确定',
	            callback: action => {
		            this.$message({
		              type: 'info',
		              message: `action: ${ action }`
		            });
		        }
	        });
	    },
	    open2() {
	        this.$confirm('此操作将永久删除该文件, 是否继续?','提示',{
	            confirmButtonText: '确定',
	            cancelButtonText: '取消',
	            type: 'warning'
	        }).then(()=>{
	        	this.$message({
	        		type:'success',
	        		message:'删除成功'
	        	});
	        }).catch(()=>{
	        	this.$message({
	        		type:'info',
	        		message:'已取消删除'
	        	});
	        });
	    },
        open3() {
	        this.$prompt('请输入邮箱','提示',{
	            confirmButtonText: '确定',
	            cancelButtonText: '取消',
	            inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
		        inputErrorMessage: '邮箱格式不正确'
	        }).then((value)=>{
	        	this.$message({
	        		type:'success',
	        		message:'你的邮箱是:'+value
	        	});
	        }).catch(()=>{
	        	this.$message({
	        		type:'info',
	        		message:'已取消输入'
	        	});
	        });
	    },
	    //自定义
        open4() {
        	const h = this.$createElement;
	        this.$msgbox({
	        	title:'消息',
	        	message: h('p', null, [
		            h('span', null, '内容可以是 '),
		            h('i', { style: 'color: teal' }, 'VNode')
	            ]),
	        	showCancelButton:true,
	            confirmButtonText: '确定',
	            cancelButtonText: '取消',
	            beforeClose: (action, instance, done) => {
		            if (action === 'confirm') {
		              instance.confirmButtonLoading = true;
		              instance.confirmButtonText = '执行中...';
		              setTimeout(() => {
		                done();
		                setTimeout(() => {
		                  instance.confirmButtonLoading = false;
		                }, 300);
		              }, 3000);
		            } else {
		              done();
		            }
		        }
	        }).then((action)=>{
	        	this.$message({
	        		type:'success',
	        		message:'action:'+action
	        	});
	        });

	    },
        open5() {
	        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
	          dangerouslyUseHTMLString: true
	        });
	    },
        open6() {
	        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
		        distinguishCancelAndClose: true,
		        confirmButtonText: '保存',
		        cancelButtonText: '放弃修改'
		    }).then(() => {
		        this.$message({
		            type: 'info',
		            message: '保存修改'
		           });
		    }).catch(action => {
		        this.$message({
		            type: 'info',
		            message: action === 'cancel'
		                ? '放弃保存并离开页面'
		                : '停留在当前页面'
		            })
		    });
	    },
        open7() {
	        this.$confirm('此操作将永久删除该文件, 是否继续?','提示',{
	            confirmButtonText: '确定',
	            cancelButtonText: '取消',
	            type: 'warning',
	            center:true
	        }).then(()=>{
	        	this.$message({
	        		type:'success',
	        		message:'删除成功'
	        	});
	        }).catch(()=>{
	        	this.$message({
	        		type:'info',
	        		message:'已取消删除'
	        	});
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
