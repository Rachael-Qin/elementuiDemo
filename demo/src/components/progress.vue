<template>
	<div class="container">
		<h3>线形进度条 — 百分比外显</h3>
    <p>Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。 </p>
		<el-row>
      <el-progress :percentage="0"></el-progress>
      <el-progress :percentage="20"></el-progress>
      <el-progress :percentage="40" color="#f00"></el-progress>
      <el-progress :percentage="50" status="success"></el-progress>
      <el-progress :percentage="100" status="exception"></el-progress>
		</el-row>
    <h3>线形进度条 — 百分比内显</h3>
    <p>Progress 组件可通过 stroke-width 属性更改进度条的高度，并可通过 text-inside 属性来将进度条描述置于进度条内部。</p>
    <el-row>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="20"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="40" color="#f00"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="exception"></el-progress>
    </el-row>
    <h3>环形进度条</h3>
    <p>Progress 组件可通过属性 type="circle" 来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。</p>
    <el-row>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
      <el-progress type="circle" :percentage="100" status="text">Done</el-progress>
    </el-row>
	</div>
</template>

<script>
export default {
    data() {
      return {
        
      };
    },
    methods: {
     
    }
  }
</script>

<style scoped>
	.el-row{
    width: 400px;
		margin-bottom: 10px;
	}
  .el-progress{
    margin-bottom: 10px;
  }
  
</style>
