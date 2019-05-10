<template>
	<div class="container">
		<h3>区域加载</h3>
		<p>自定义指令v-loading</p>
		<el-row>
			<el-table
			    v-loading="loading"
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="日期"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="地址">
			    </el-table-column>
			</el-table>
		</el-row>
		<h3>自定义文案</h3>
		<p>在绑定了v-loading指令的元素上添加element-loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，element-loading-spinner和element-loading-background属性分别用来设定图标类名和背景色值。 </p>
		<el-row>
			<el-table
			    v-loading="loading"
			    element-loading-text="拼命加载中"
			    element-loading-spinner="el-icon-loading"
			    element-loading-background="rgba(0, 0, 0, 0.8)"
			    :data="tableData"
			    style="width: 100%">
			    <el-table-column
			      prop="date"
			      label="日期"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="name"
			      label="姓名"
			      width="180">
			    </el-table-column>
			    <el-table-column
			      prop="address"
			      label="地址">
			    </el-table-column>
			</el-table>
		</el-row>
		<h3>可关闭</h3>
		<p>设置 showClose 字段</p>
		<el-row>
			<el-button
			    type="primary"
			    @click="openFullScreen"
			    v-loading.fullscreen.lock="fullscreenLoading">
			    指令方式
		    </el-button>
		    <el-button
			    type="primary"
			    @click="openFullScreen">
		        服务方式
		    </el-button>
		</el-row>
	</div>
</template>

<script>
export default{
	data(){
		return {
			tableData: [{
	          date: '2016-05-03',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }],
			loading:true,
			fullscreenLoading: false
		}
	},
	methods:{
	    openFullScreen() {
	        const loading = this.$loading({
	          lock: true,
	          text: 'Loading',
	          spinner: 'el-icon-loading',
	          background: 'rgba(0, 0, 0, 0.7)'
	        });
	        setTimeout(() => {
	          loading.close();
	        }, 2000);
	    }
	}
}
</script>

<style scoped>
	.el-button{
		margin-right: 10px;
	}
</style>
