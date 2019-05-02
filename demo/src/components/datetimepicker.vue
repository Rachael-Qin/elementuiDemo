<template>
	<div class="inputnumber-container">
		<h3>日期和时间点</h3>
    <p>type属性为datetime</p>
		<el-row>
      <span>默认：</span>
			<el-date-picker
			    v-model="value1" type='datetime' placeholder='选择日期时间'>
			</el-date-picker>
		</el-row>
    <el-row>
      <span>带快捷选项：</span>
      <el-date-picker
          v-model="value2" type='datetime' align='right' placeholder='选择日期时间' :picker-options="pickerOptions">
      </el-date-picker>
    </el-row>
    <el-row>
      <span>设置默认时间：</span>
      <el-date-picker
          v-model="value3" type='datetime'  placeholder='选择日期时间'  default-time='12:00:00'>
      </el-date-picker>
    </el-row>
    <h3>日期和时间范围</h3>
    <p>设置type为datetimerange即可选择日期和时间范围</p>
    <el-row>
      <el-date-picker
          v-model="value4" type='datetimerange'  placeholder='选择日期时间' range-separator="至" start-placeholder="开始日期"
      end-placeholder="结束日期">
      </el-date-picker>
    </el-row>


    <h3>默认起止时刻</h3>
    <el-row>
      <el-date-picker
          v-model="value5" type='datetimerange'  placeholder='选择日期时间' range-separator="至" start-placeholder="开始日期"
      end-placeholder="结束日期" :default-time="['12:00:00','08:00:00']">
      </el-date-picker>
    </el-row>
	</div>
</template>

<script>
export default {
	data () {
	  return {
        pickerOptions: {
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
        value5: ''
        
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