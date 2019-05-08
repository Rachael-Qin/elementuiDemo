<template>
	<div class="inputnumber-container">
		<h3>基础表格</h3>
    <p>当el-table元素中注入data对象数组后，在el-table-column中用prop属性来对应对象中的键名即可填入数据，用label属性来定义表格的列名。可以使用width属性来定义列宽。</p>
		<el-table
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
      
    <hr>
    <h3>带斑马纹表格</h3>
    <p> stripe 属性可以创建带斑马纹的表格。它接受一个Boolean，默认为false，设置为true即为启用。</p>
    <el-table stripe :data="tableData" style="width: 100%">
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
    <hr>
    <h3>带边框表格</h3>
    <p>默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用 border 属性，它接受一个Boolean，设置为true即可启用。</p>
    <el-table border :data="tableData" style="width: 100%">
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
    <hr>
    <h3>带状态表格</h3>
    <p>可以通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。 :highlight-current-row="true"  样式不能用 scoped </p>
    <el-table
        :data="tableData"
        style="width: 100%"
        :row-class-name="tableRowClassName" :highlight-current-row="true">
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
    <h3>固定表头</h3>
    <p>只要在el-table元素中定义了height属性，即可实现固定表头的表格，而不需要额外的代码。</p>
    <el-table
        :data="tableData2"
        height="250"
        border
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
    <h3>固定列</h3>
    <p>固定列需要使用fixed属性，它接受 Boolean 值或者leftright，表示左边固定还是右边固定。</p>
    <el-table
        :data="tableData3"
        border
        style="width: 100%">
        <el-table-column
          fixed
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
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
    </el-table>
    <h3>固定表头和列</h3>
    <el-table
        :data="tableData3"
        border
        height="250"
        style="width: 100%">
        <el-table-column
          fixed
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
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
    </el-table>
    <h3>流体高度</h3>
    <p>通过设置max-height属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。</p>
    <el-table
        :data="tableData3"
        border
        max-height="250"
        style="width: 100%">
        <el-table-column
          fixed
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
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData3)"
                type="text"
                size="small">
                移除
              </el-button>
          </template>
        </el-table-column>
    </el-table>
    <h3>多级表头</h3>
    <p>在 el-table-column 里面嵌套 el-table-column，就可以实现多级表头。</p>
    <el-table
        :data="tableData3"
        border
        max-height="250"
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column label="配送信息">
              <el-table-column
                prop="name"
                label="姓名"
                width="180">
              </el-table-column>
              <el-table-column
                prop="zip"
                label="邮编"
                width="120">
              </el-table-column>
              <el-table-column label="地址">
                <el-table-column
                  prop="province"
                  label="省份"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="city"
                  label="市区"
                  width="120">
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="地址"
                  width="300">
                </el-table-column>
              </el-table-column>
        </el-table-column>
    </el-table>
	</div>
</template>

<style>
  .el-row{
    margin-bottom: 20px;
  }
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
<script>
  export default {
      data() {
        return {
          tableData: [
              {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }
          ],
          tableData2: [
              {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, 
              {
                date: '2016-05-05',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-06',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-07',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
              }
          ],
          tableData3: [
            {
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            }, {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1517 弄',
              zip: 200333
            }, {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1519 弄',
              zip: 200333
            }, {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1516 弄',
              zip: 200333
            }
          ]
        }
      },
      methods: {
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            return 'warning-row';
          } else if (rowIndex === 3) {
            return 'success-row';
          }
          return '';
        },
        handleClick(row) {
          console.log(row);
        },
        deleteRow(index,rows){
          rows.splice(index, 1);
        }
      }
  }
</script>