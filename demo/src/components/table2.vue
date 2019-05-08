<template>
  <div class="container">
    <h3>单选</h3>
    <p>Table 组件提供了单选的支持，只需要配置highlight-current-row属性即可实现单选。之后由 current-change 事件来管理选中时触发的事件，它会传入currentRow，oldCurrentRow。如果需要显示索引，可以增加一列el-table-column，设置type属性为index即可显示从 1 开始的索引号。</p>
    <el-table
        :data="tableData"
        ref="singleTable"
        style="width: 100%"
        :highlight-current-row="true"
        @current-change="handleCurrentChange">
        <el-table-column
          type="index"
          width="50">
        </el-table-column>
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
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
    </div>

    <h3>多选</h3>
    <p>手动添加一个el-table-column，设type属性为 selection 即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用 show-overflow-tooltip 属性，它接受一个Boolean，为true时多余的内容会在 hover 时以 tooltip 的形式显示出来。</p>
    <el-table
        :data="tableData"
        ref="multipleTable"
        tooltip-effect="dark" 
        style="width: 100%"
        :highlight-current-row="true"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
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
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>

    <h3>排序</h3>
    <p>在列中设置sortable属性即可实现以该列为基准的排序，接受一个Boolean，默认为false。可以通过 Table 的default-sort属性设置默认的排序列和排序顺序。可以使用sort-method或者sort-by使用自定义的排序规则。如果需要后端排序，需将sortable设置为custom，同时在 Table 上监听sort-change事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了formatter属性，它用于格式化指定列的值，接受一个Function，会传入两个参数：row和column，可以根据自己的需求进行处理。</p>
    <el-table
        :data="tableData"
        ref="multipleTable"
        tooltip-effect="dark" 
        style="width: 100%"
        :default-sort = "{prop: 'date', order: 'descending'}">
        <el-table-column
          type="selection"
          width="50">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
        </el-table-column>
    </el-table>
    <h3>筛选</h3>
    <p>在列中设置filtersfilter-method属性即可开启该列的筛选，filters 是一个数组，filter-method是一个方法，它用于决定某些数据是否显示，会传入三个参数：value, row 和 column。</p>
    <el-button @click="resetDateFilter">清除日期过滤器</el-button>
    <el-button @click="clearFilter">清除所有过滤器</el-button>
    <el-table
        ref="filterTable"
        :data="tableData2"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          sortable
          width="180"
          column-key="date"
          :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
          :filter-method="filterHandler"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :formatter="formatter">
        </el-table-column>
        <el-table-column
          prop="tag"
          label="标签"
          width="100"
          :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template slot-scope="scope">
            <el-tag
              :type="scope.row.tag === '家' ? 'primary' : 'success'"
              disable-transitions>{{scope.row.tag}}</el-tag>
          </template>
        </el-table-column>
    </el-table>
    <h3>自定义列模板</h3>
    <p>通过 Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据</p>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="日期"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="姓名"
          width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.name }}</p>
              <p>住址: {{ scope.row.address }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
    </el-table>
    <h3>展开行</h3>
    <p> 通过设置 type="expand" 和 Scoped slot 可以开启展开行功能，el-table-column 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 Scoped slot 相同。 </p>
    <el-table
        :data="tableData3"
        style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="商品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="所属店铺">
                  <span>{{ props.row.shop }}</span>
                </el-form-item>
                <el-form-item label="商品 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.shopId }}</span>
                </el-form-item>
                <el-form-item label="商品分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="商品描述">
                  <span>{{ props.row.desc }}</span>
                </el-form-item>
              </el-form>
            </template>
        </el-table-column>
        <el-table-column
          label="商品 ID"
          prop="id">
        </el-table-column>
        <el-table-column
          label="商品名称"
          prop="name">
        </el-table-column>
        <el-table-column
          label="描述"
          prop="desc">
        </el-table-column>
    </el-table>
    <h3>自定义表头</h3>
    <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        style="width: 100%">
        <el-table-column
          label="Date"
          prop="date">
        </el-table-column>
        <el-table-column
          label="Name"
          prop="name">
        </el-table-column>
        <el-table-column
          align="right">
          <template slot="header" slot-scope="scope">
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
          </template>
        </el-table-column>
    </el-table>
    <h3>表尾合计行</h3>
    <p>将show-summary设置为true就会在表格尾部展示合计行。默认情况下，对于合计行，第一列不进行数据求合操作，而是显示「合计」二字（可通过sum-text配置），其余列会将本列所有数值进行求合操作，并显示出来。当然，你也可以定义自己的合计逻辑。使用summary-method并传入一个方法，返回一个数组，这个数组中的各项就会显示在合计行的各列中，具体可以参考本例中的第二个表格。</p>
    <el-table
        :data="tableData4"
        border
        show-summary
        style="width: 100%">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="amount1"
          sortable
          label="数值 1">
        </el-table-column>
        <el-table-column
          prop="amount2"
          sortable
          label="数值 2">
        </el-table-column>
        <el-table-column
          prop="amount3"
          sortable
          label="数值 3">
        </el-table-column>
    </el-table>
    <el-table
        :data="tableData4"
        border
        height="200"
        :summary-method="getSummaries"
        show-summary
        style="width: 100%; margin-top: 20px">
        <el-table-column
          prop="id"
          label="ID"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名">
        </el-table-column>
        <el-table-column
          prop="amount1"
          label="数值 1（元）">
        </el-table-column>
        <el-table-column
          prop="amount2"
          label="数值 2（元）">
        </el-table-column>
        <el-table-column
          prop="amount3"
          label="数值 3（元）">
        </el-table-column>
    </el-table>
    <h3>合并行和列</h3>
    <p>通过给table传入span-method方法可以实现合并行或列，方法的参数是一个对象，里面包含当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性。该函数可以返回一个包含两个元素的数组，第一个元素代表rowspan，第二个元素代表colspan。 也可以返回一个键名为rowspan和colspan的对象。</p>
    <el-table
      :data="tableData5"
      :span-method="arraySpanMethod"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        sortable
        label="数值 1">
      </el-table-column>
      <el-table-column
        prop="amount2"
        sortable
        label="数值 2">
      </el-table-column>
      <el-table-column
        prop="amount3"
        sortable
        label="数值 3">
      </el-table-column>
    </el-table>

    <el-table
      :data="tableData5"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px">
      <el-table-column
        prop="id"
        label="ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="amount1"
        label="数值 1（元）">
      </el-table-column>
      <el-table-column
        prop="amount2"
        label="数值 2（元）">
      </el-table-column>
      <el-table-column
        prop="amount3"
        label="数值 3（元）">
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

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
<script>
  export default {
      data() {
        return {
          tableData: [
              {
                date: '2016-05-02',
                name: '张三',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
              }, {
                date: '2016-05-01',
                name: '李四',
                address: '上海市普陀区金沙江路 1518 弄',
              }, {
                date: '2016-05-03',
                name: '王五',
                address: '上海市普陀区金沙江路 1518 弄'
              }
          ],
          tableData2: [
            {
              date: '2016-05-02',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄',
              tag: '家'
            }, {
              date: '2016-05-04',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1517 弄',
              tag: '公司'
            }, {
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              tag: '家'
            }, {
              date: '2016-05-03',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1516 弄',
              tag: '公司'
            }
          ],
          tableData3: [
            {
              id: '12987122',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }, {
              id: '12987123',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }, {
              id: '12987125',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }, {
              id: '12987126',
              name: '好滋好味鸡蛋仔',
              category: '江浙小吃、小吃零食',
              desc: '荷兰优质淡奶，奶香浓而不腻',
              address: '上海市普陀区真北路',
              shop: '王小虎夫妻店',
              shopId: '10333'
            }
          ],
          tableData4: [
            {
              id: '12987122',
              name: '王小虎',
              amount1: '234',
              amount2: '3.2',
              amount3: 10
            }, {
              id: '12987123',
              name: '王小虎',
              amount1: '165',
              amount2: '4.43',
              amount3: 12
            }, {
              id: '12987124',
              name: '王小虎',
              amount1: '324',
              amount2: '1.9',
              amount3: 9
            }, {
              id: '12987125',
              name: '王小虎',
              amount1: '621',
              amount2: '2.2',
              amount3: 17
            }, {
              id: '12987126',
              name: '王小虎',
              amount1: '539',
              amount2: '4.1',
              amount3: 15
            }
          ],
          tableData5: [
            {
              id: '12987122',
              name: '王小虎',
              amount1: '234',
              amount2: '3.2',
              amount3: 10
            }, {
              id: '12987123',
              name: '王小虎',
              amount1: '165',
              amount2: '4.43',
              amount3: 12
            }, {
              id: '12987124',
              name: '王小虎',
              amount1: '324',
              amount2: '1.9',
              amount3: 9
            }, {
              id: '12987125',
              name: '王小虎',
              amount1: '621',
              amount2: '2.2',
              amount3: 17
            }, {
              id: '12987126',
              name: '王小虎',
              amount1: '539',
              amount2: '4.1',
              amount3: 15
            }
          ],
          currentRow: null,
          multipleSelection:[],
          search:''
        }
      },
      methods: {
        handleClick(row) {
          console.log(row);
        },
        // 单选  S
        setCurrent(row) {
          this.$refs.singleTable.setCurrentRow(row);
        },
        handleCurrentChange(val) {
          this.currentRow = val;
        },
        // 单选  E
        // 多选  S
        toggleSelection(rows) {
          if (rows) {
            rows.forEach(row => {
              this.$refs.multipleTable.toggleRowSelection(row);
            });
          } else {
            this.$refs.multipleTable.clearSelection();
          }
        },
        handleSelectionChange(val){
          this.multipleSelection = val;
        },
        // 多选  E
        // 排序  S
        formatter(row, column) {
          console.log(row+'行'+column)
          return row.address;
        },
        // 排序  E
        // 筛选  S
        resetDateFilter() {
          this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
          this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
          return row.address;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },
        // 筛选  E
        // 自定义列模板  S
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        // 自定义列模板  E
        // 自定义表头  S
        handleEdit(index, row) {
          console.log(index, row);
        },
        handleDelete(index, row) {
          console.log(index, row);
        },
        // 自定义表头  E
        getSummaries(param) {
          const { columns, data } = param;
          const sums = [];
          columns.forEach((column, index) => {
            if (index === 0) {
              sums[index] = '总价';
              return;
            }
            const values = data.map(item => Number(item[column.property]));
            if (!values.every(value => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                  return prev + curr;
                } else {
                  return prev;
                }
              }, 0);
              sums[index] += ' 元';
            } else {
              sums[index] = 'N/A';
            }
          });

          return sums;
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
          if (rowIndex % 2 === 0) {
            if (columnIndex === 0) {
              return [1, 2];
            } else if (columnIndex === 1) {
              return [0, 0];
            }
          }
        },

        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
          if (columnIndex === 0) {
            if (rowIndex % 2 === 0) {
              return {
                rowspan: 2,
                colspan: 1
              };
            } else {
              return {
                rowspan: 0,
                colspan: 0
              };
            }
          }
        }
      }
  }
</script>