<template>
	<div class="container">
		<h3>基本用法</h3>
		<p> el-dialog 标签。需要设置visible属性，它接收Boolean，当为true时显示 Dialog。Dialog 分为两个部分：body和footer，footer需要具名为footer的slot。title属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了before-close的用法。</p>
		<el-row>
			<el-button type="text" @click="dialogVisible=true">点击打开Dialog</el-button>
			<el-dialog title="提示"
			          :visible.sync="dialogVisible" 
			          width="30%"
			          :before-close="handleClose">
				<span>这是一段信息</span>
				<span slot="footer" class="dialog-footer">
				    <el-button @click="dialogVisible = false">取 消</el-button>
				    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				</span>
			</el-dialog>
		</el-row>
		<h3>自定义内容</h3>
		<el-row>
			<el-button type="text" @click="dialogVisible2=true">自定义Dialog内容</el-button>
			<el-dialog title="收货地址"
			          :visible.sync="dialogVisible2" 
			          width="50%">
				<el-table :data="gridData">
				    <el-table-column property="date" label="日期" width="150"></el-table-column>
				    <el-table-column property="name" label="姓名" width="200"></el-table-column>
				    <el-table-column property="address" label="地址"></el-table-column>
				</el-table>
			</el-dialog>
		</el-row>
		<h3>嵌套的 dialog </h3>
		<el-row>
			<el-button type="text" @click="outerVisible=true">打开外层Dialog内容</el-button>
			<el-dialog title="外层 Dialog" :visible.sync="outerVisible"
			          width="50%">
		        <el-dialog title="内层 Dialog" :visible.sync="innerVisible" append-to-body></el-dialog>
		        <div slot="footer" class="dialog-footer">
			      <el-button @click="outerVisible = false">取 消</el-button>
			      <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
			    </div>
			</el-dialog>
		</el-row>
		<h3>居中布局</h3>
		<p>将center设置为true即可使标题和底部居中。center仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。</p>
		<el-row>
			<el-button type="text" @click="centerDialogVisible=true">打开Dialog内容</el-button>
			<el-dialog title="提示" :visible.sync="centerDialogVisible"
			          width="30%" center>
		        <span>注意：内容是默认不居中的</span>
		        <div slot="footer" class="dialog-footer">
			      <el-button @click="centerDialogVisible = false">取 消</el-button>
			      <el-button type="primary" @click="centerDialogVisible = false">确定</el-button>
			    </div>
			</el-dialog>
		</el-row>
	</div>
</template>

<script>
 export default{
 	data(){
 		return {
 			dialogVisible:false,
 			dialogVisible2:false,
 			gridData: [{
	          date: '2016-05-02',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-04',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-01',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }, {
	          date: '2016-05-03',
	          name: '王小虎',
	          address: '上海市普陀区金沙江路 1518 弄'
	        }],
	        outerVisible: false,
	        innerVisible: false,
	        centerDialogVisible:false
 		}
 	},
 	methods:{
 		handleClose(done){
 			this.$confirm('确认关闭？').then(_=>{
 				done();
 			}).catch(_=>{});
 		}
 	}
 }
</script>

<style scoped>
	.el-link{
		margin-right: 10px;
	}
</style>
