<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-card 标签。Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的。</p>
		<div class="box-card">
			<el-card>
		      <div slot="header" class="clearfix">
			    <span>卡片名称</span>
			    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			  </div>
			  <div v-for="o in 4" :key="o" class="text item">
			    {{'列表内容 ' + o }}
			  </div>
		    </el-card>
	    </div>
		<h3>简单卡片</h3>
		<p> 只有内容 </p>
		<el-card class="box-card">
		  <div v-for="o in 4" :key="o" class="text item">
		    {{'列表内容 ' + o }}
		  </div>
	    </el-card>
		<h3>带图片</h3>
		<p>配置body-style属性来自定义body部分的style，我们还使用了布局组件。</p>
		<el-row>
			<el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
				<el-card :body-style="{ padding: '0px' }">
					<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
			        <div style="padding: 20px;">
				        <span>标题标题</span>
				        <div class="bottom clearfix">
				          <time class="time">{{ currentDate }}</time>
				          <el-button type="text" class="button">操作按钮</el-button>
				        </div>
				    </div>
			    </el-card>
			</el-col>
		</el-row>
		<h3>卡片阴影</h3>
		<p>通过 shadow 属性设置卡片阴影出现的时机：always、hover或never。</p>
		<el-row :gutter="12">
			<el-col :span="8">
			    <el-card shadow="always">
			      总是显示
			    </el-card>
		    </el-col>
			<el-col :span="8">
			    <el-card shadow="hover">
			      鼠标悬浮时显示
			    </el-card>
			</el-col>
			<el-col :span="8">
			    <el-card shadow="never">
			      从不显示
			    </el-card>
			</el-col>
	  </el-row>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			disabled:false,
 			currentDate: new Date()
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
	.time {
	    font-size: 13px;
	    color: #999;
	}  
	.bottom {
	    margin-top: 13px;
	    line-height: 12px;
	}
	.button {
	    padding: 0;
	    float: right;
	}
	.image {
	    width: 100%;
	    display: block;
	}
	.clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
	.clearfix:after {
	      clear: both
	}
</style>
