<template>
	<div class="container">
		<h3>基础用法</h3>
    <p>Progress 组件设置percentage属性即可，表示进度条对应的百分比，必填，必须在 0-100。 </p>
		<el-row>
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
		</el-row>
    <el-row>
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>
    <h3>设置最大页码按钮数</h3>
    <p>默认情况下，当总页数超过 7 页时，Pagination 会折叠多余的页码按钮。通过pager-count属性可以设置最大页码按钮数。</p>
    <el-row>
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination
        :page-size="20"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>
    <h3>带有背景色的分页</h3>
    <p>设置background属性可以为分页按钮添加背景色。</p>
    <el-row>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>
    <h3>小型分页</h3>
    <p>设置 small 属性</p>
    <el-row>
      <el-pagination
        small
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
    </el-row>
    <h3>附加功能</h3>
    <p>使用了size-change和current-change事件来处理页码大小和当前页变动时候触发的事件。page-sizes接受一个整型数组，数组元素为展示的选择每页显示个数的选项，[100, 200, 300, 400]表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p>
    <el-row>
      <span class="demonstration">显示总数</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>
    <el-row>
      <span class="demonstration"><span class="demonstration">调整每页显示条数</span></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000">
      </el-pagination>
    </el-row>
    <el-row>
      <span class="demonstration">直接前往</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next,jumper"
        :total="1000">
      </el-pagination>
    </el-row>
    <el-row>
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, total, prev, pager, next ,jumper"
        :total="1000">
      </el-pagination>
    </el-row>

	</div>
</template>

<script>
export default {
    data() {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      };
    },
    methods: {
     handleSizeChange(val){
        console.log(`每页 ${val} 条`);
     },
     handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
