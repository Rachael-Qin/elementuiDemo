<template>
	<div class="inputnumber-container">
		<h3>选择日</h3>
    <p>基本单位由type属性指定。快捷选项需配置picker-options对象中的shortcuts，禁用日期通过 disabledDate 设置，传入函数</p>
		<el-row>
      <span>默认：</span>
			<el-date-picker
			    v-model="value1" type='date' placeholder='选择日期'>
			</el-date-picker>
		</el-row>
    <el-row>
      <span>带快捷选项：</span>
      <el-date-picker
          v-model="value2" type='date' align='right' placeholder='选择日期' :picker-options="pickerOptions">
      </el-date-picker>
    </el-row>
    <h3>其他日期单位</h3>
    <el-row>
      <span>年：</span>
      <el-date-picker
          v-model="value3" type='year'  placeholder='选择年'>
      </el-date-picker>
    </el-row>
    <el-row>
      <span>月：</span>
      <el-date-picker
          v-model="value4" type='month'  placeholder='选择月'>
      </el-date-picker>
    </el-row>
    <el-row>
      <span>周：</span>
      <el-date-picker
          v-model="value5" type='week' format="yyyy 第 WW 周" placeholder='选择周'>
      </el-date-picker>
    </el-row>
    <el-row>
      <span>多个日期：</span>
      <el-date-picker
          v-model="value6" type='dates'  placeholder='选择一个或多个日期'>
      </el-date-picker>
    </el-row>
    <h3>选择日期范围</h3>
    <p> type='daterange'</p>
    <el-row>
      <el-date-picker
          v-model="value7" type='daterange'  range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
      </el-date-picker>
    </el-row>
    <h3>选择月份范围</h3>
    <p> type='monthrange'</p>
    <el-row>
      <el-date-picker
          v-model="value8" type='monthrange'  range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
      </el-date-picker>
    </el-row>
    <h3>日期格式</h3>
    <p>使用format指定输入框的格式；使用value-format指定绑定值的格式。</p>
    <el-row>
      默认：{{value9}}
      <el-date-picker
          v-model="value9" type='date' format="yyyy 年 MM 月 dd 日"  placeholder="选择日期">
      </el-date-picker>
    </el-row>
    <el-row>
      默认 ---- 值：{{value10}}
      <el-date-picker
          v-model="value10" type='date' format="yyyy 年 MM 月 dd 日"  value-format="yyyy-MM-dd" placeholder="选择日期">
      </el-date-picker>
    </el-row>
    <el-row>
      使用 value-format ---- 值：{{value11}}
      <el-date-picker
          v-model="value11" type='date' format="yyyy 年 MM 月 dd 日" value-format="timestamp"  placeholder="选择日期">
      </el-date-picker>
    </el-row>
	</div>
</template>

<script>
export default {
	data () {
	  return {
        pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6:'',
        value7:'',
        value8:'',
        value9:'',
        value10:'',
        value11:''
        
	  };
	},
	methods:{
		handleChange(val){
			console.log(val)
		},
    formatTooltip(val){
      return val/100;
    }
	}
}
</script>

<style scoped>
	.el-row{
		margin-bottom: 10px;
	}
	.el-input .el-select {
	    width: 130px;
	}
</style>