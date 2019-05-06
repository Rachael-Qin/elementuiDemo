<template>
	<div class="inputnumber-container">
		<h3>基础用法</h3>
    <p>评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。</p>
		<el-row>
			<span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
		</el-row>
    <el-row>
      <span class="demonstration">区分颜色</span>
      <el-rate
        v-model="value2"
        :colors="colors">
      </el-rate>
    </el-row>
    <h3>辅助文字</h3>
    <p>为组件设置 show-text 属性会在右侧显示辅助文字。通过设置 texts 可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。</p>
    <el-row>
      <el-rate
        v-model="value3"
        show-text :texts='texts'>
      </el-rate>

    </el-row>
    <h3>其他ICON</h3>
    <p>设置icon-classes属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用void-icon-class指定了未选中时的图标类名。</p>
    <el-row>
    </el-row>
    <h3>只读</h3>
    <p>为组件设置 disabled 属性表示组件为只读，支持小数分值。此时若设置 show-score，则会在右侧显示目前的分值。可以提供 score-template 作为显示模板，模板为一个包含了 {value} 的字符串，{value} 会被解析为分值。</p>
    <el-row>
      <el-rate
        v-model="value5"
        disabled
        show-score
        text-color="#ff9900">
      </el-rate>
    </el-row>
	</div>
</template>

<script>
export default {
    data() {
      return {
        value1: null,
        value2: null,
        // colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
        colors:{1:'#ccc',2: '#99A9BF',3:'green',4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' },
        value3:null,
        texts:['再学一遍吧','努力哦','加油呀','快满分咯','很棒哦'],
        value4: null,
        iconClasses: ['icon-rate-face-1', 'icon-rate-face-2', 'icon-rate-face-3'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
        value5: 3.5
      };
    },
    methods: {
     
    }
  }
</script>

<style scoped>
	.el-row{
		margin-bottom: 10px;
	}
</style>
