<template>
	<div class="inputnumber-container">
		<h3>基本用法</h3>
    <p>active-color属性与inactive-color 设置背景色</p>
		<el-row>
			<el-switch
			    v-model="value1"
			    active-color="#13ce66"
          inactive-color="#ff4949" @change="handleChange">
			</el-switch>
		</el-row>
		<h3>禁用选项</h3>
		<el-row>
			<el-switch
          v-model="value2"  disabled>
      </el-switch>
		</el-row>
		<h3>文字描述</h3>
    <p> active-text 属性与 inactive-text 属性来设置开关的文字描述。</p>
    <el-row>
      <el-switch
          v-model="value3"
          active-text ='是'
          inactive-text ='否'>
      </el-switch>
    </el-row>
    <el-row>
      <el-switch
          v-model="value4"
          active-text ='是'
          inactive-text ='否'
          active-color="#13ce66"
          inactive-color="#ff4949">
      </el-switch>
    </el-row>
    <h3>扩展的 value 类型</h3>
    <p> 设置active-value和inactive-value属性，接受Boolean, String或Number类型的值。</p>
    <el-row>
      <el-tooltip :content="'Switch value: ' + value5" placement="top">
        <el-switch
            v-model="value5"
            active-value ='100'
            inactive-value ='0'>
        </el-switch>
      </el-tooltip>
    </el-row>
	</div>
</template>

<script>
export default {
  data () {
	  return {
      value1: true,
      value2: false,
      value3: true,
      value4: true,
      value5: '100'

	  }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>
	.el-row{
		margin-bottom: 10px;
	}
</style>
