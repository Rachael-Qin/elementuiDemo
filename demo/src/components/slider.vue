<template>
	<div class="inputnumber-container">
		<h3>基本用法</h3>
    <p></p>
		<el-row>
      <span>默认：</span>
			<el-slider
			    v-model="value1"
			    @change="handleChange">
			</el-slider>
		</el-row>
    <el-row>
      <span>自定义初始值：</span>
      <el-slider
          v-model="value2"
          @change="handleChange">
      </el-slider>
    </el-row>
    <el-row>
      <span>隐藏tooltip ：（ :show-tooltip="false" ）</span>
      <el-slider
          v-model="value1"
          @change="handleChange" :show-tooltip="false">
      </el-slider>
    </el-row>
    <el-row>
      <span>格式化 Tooltip ：</span>
      <el-slider
          v-model="value2"
          @change="handleChange" :format-tooltip="formatTooltip">
      </el-slider>
    </el-row>
    <h3>离散值</h3>
    <p>改变step的值可以改变步长，通过设置show-stops属性可以显示间断点</p>
    <el-row>
       <el-slider
        v-model="value1"
        :step="10">
      </el-slider>
    </el-row>
    <el-row>
       <el-slider
        v-model="value1"
        :step="10" show-stops>
      </el-slider>
    </el-row>
    <h3>带有输入框</h3>
    <p>设置show-input属性会在右侧显示一个输入框</p>
    <el-row>
       <el-slider
        v-model="value1" show-input>
      </el-slider>
    </el-row>
    <h3>范围选择</h3>
    <p>设置range即可开启范围选择，此时绑定值是一个数组，其元素分别为最小边界值和最大边界值</p>
    <el-row>
       <el-slider
        v-model="value3" range :max='10' show-stops>
      </el-slider>
    </el-row>
    <h3>竖向模式</h3>
    <p>设置 vertical 属性可使 Slider 变成竖向模式，此时必须设置高度height属性</p>
    <el-row>
       <el-slider
        v-model="value1" vertical height='200px'>
      </el-slider>
    </el-row>
    <h3>展示标记</h3>
    <p>设置 marks 属性可以展示标记</p>
    <el-row>
       <el-slider
        v-model="value4" range :marks='marks'>
      </el-slider>
    </el-row>
	</div>
</template>

<script>
export default {
  data () {
	  return {
      value1: 0,
      value2: 60,
      value3: [4, 8],
      value4: [40, 60],
      marks: {
        0: '0℃',
        8: '8℃',
        37: '37℃',
        50: {
          style: {
            color: '#1989FA'
          },
          label: this.$createElement('strong', '50%')
        }
      }

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
</style>
