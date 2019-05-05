<template>
	<div class="inputnumber-container">
		<h3>固定时间点</h3>
    <p>使用 el-time-select 标签，分别通过star、end和step指定可选的起始时间、结束时间和步长</p>
		<el-row>
      <span>默认：</span>
			<el-time-select
			    v-model="value1"
			    :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
          }" placeholder='选择时间'>
			</el-time-select>
		</el-row>
    <h3>任意时间点</h3>
    <p>el-time-picker 标签 ，通过 selectableRange 限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开arrow-control属性则通过界面上的箭头进行选择</p>
    <el-row>
      <span>默认：</span>
      <el-time-picker
          v-model="value2"
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }" placeholder='选择时间'>
      </el-time-picker>
      <el-time-picker
          v-model="value3"
          arrow-control
          :picker-options="{
            selectableRange: '18:30:00 - 20:30:00'
          }" placeholder='选择时间'>
      </el-time-picker>
    </el-row>
    <h3>固定时间范围</h3>
    <el-row>
       <el-time-select
        placeholder="起始时间"
        v-model="startTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30'
        }">
      </el-time-select>
      <el-time-select
        placeholder="结束时间"
        v-model="endTime"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
          minTime:startTime
        }">
      </el-time-select>
    </el-row>
    <h3>任意时间范围</h3>
    <p>添加is-range属性即可选择时间范围，同样支持arrow-control属性。</p>
    <el-row>
      <span>默认：</span>
      <el-time-picker
          v-model="value4"
          is-range
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
      </el-time-picker>
      <el-time-picker
          v-model="value5"
          is-range
          arrow-control
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          placeholder="选择时间范围">
      </el-time-picker>
    </el-row>
	</div>
</template>

<script>
export default {
  data () {
	  return {
      value1: '',
      value2: new Date(2016, 9, 10, 18, 40),
      value3: new Date(2016, 9, 10, 18, 40),
      startTime: '',
      endTime: '',
      value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]

	  }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    formatTooltip (val) {
      return val / 100
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
