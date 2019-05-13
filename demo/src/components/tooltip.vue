<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-tooltip 标签。使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。</p>
		<div class="box">
			<div class="top">
				<el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
			      <el-button>上左</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top">
			      <el-button>上边</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-end">
			      <el-button>上右</el-button>
			    </el-tooltip>
		    </div>
		    <div class="left">
				<el-tooltip class="item" effect="dark" content="Left Top 提示文字" placement="left-start">
			      <el-button>左上</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Left Center 提示文字" placement="left">
			      <el-button>左边</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Left Bottom 提示文字" placement="left-end">
			      <el-button>左下</el-button>
			    </el-tooltip>
		    </div>
		    <div class="right">
				<el-tooltip class="item" effect="dark" content="Right Top 提示文字" placement="right-start">
			      <el-button>右上</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right">
			      <el-button>右边</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Right Bottom 提示文字" placement="right-end">
			      <el-button>右下</el-button>
			    </el-tooltip>
		    </div>
		    <div class="bottom">
				<el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-start">
			      <el-button>下左</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom">
			      <el-button>下边</el-button>
			    </el-tooltip>
			    <el-tooltip class="item" effect="dark" content="Bottom Left 提示文字" placement="bottom-end">
			      <el-button>下右</el-button>
			    </el-tooltip>
		    </div>
		</div>
		<h3>主题</h3>
		<p> el-tooltip 设置属性 effect ，有2种主题：dark/light。</p>
		<el-row>
			<el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
		      <el-button>上边</el-button>
		    </el-tooltip>
		    <el-tooltip class="item" effect="light" content="Bottom Center 提示文字" placement="bottom">
		      <el-button>下边</el-button>
		    </el-tooltip>
		</el-row>
		<h3>更多 Content</h3>
		<p>用具名 slot 分发content，替代tooltip中的content属性。</p>
		<el-row>
			<el-tooltip effect="dark" placement="top">
				<div slot="content">多行信息<br/>第二行信息</div>
		        <el-button>上边</el-button>
		    </el-tooltip>
		</el-row>
		<h3>高级扩展</h3>
		<el-row>
			<el-tooltip :disabled="disabled" content="点击关闭 tooltip 功能" placement="bottom" effect="light">
			    <el-button @click="disabled = !disabled">点击{{disabled ? '开启' : '关闭'}} tooltip 功能</el-button>
			</el-tooltip>
	  </el-row>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			disabled:false
 		}
 	},
 	methods:{
 	}
 }
</script>

<style scoped>
	.box>div{
		margin-bottom: 20px;
	}
</style>
