<template>
	<div class="inputnumber-container">
		<h3>基础用法</h3>
    <p>评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。</p>
		<el-row>
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color1"></el-color-picker>
		</el-row>
    <el-row>
      <span class="demonstration">无默认值</span>
      <el-color-picker v-model="color2"></el-color-picker>
    </el-row>
    <h3>选择透明度</h3>
    <p>ColorPicker 支持普通颜色，也支持带 Alpha 通道的颜色，通过show-alpha属性即可控制是否支持透明度的选择。</p>
    <el-row>
      <el-color-picker v-model="color3" show-alpha></el-color-picker>
    </el-row>
    <h3>预定义颜色</h3>
    <p>ColorPicker 支持预定义颜色</p>
    <el-row>
      <el-color-picker v-model="color4" show-alpha :predefine="predefineColors"></el-color-picker>
    </el-row>
    <h3>不同尺寸</h3>
    <el-row>
      <el-color-picker v-model="color5"></el-color-picker>
      <el-color-picker v-model="color5" size="medium"></el-color-picker>
      <el-color-picker v-model="color5" size="small"></el-color-picker>
      <el-color-picker v-model="color5" size="mini"></el-color-picker>
    </el-row>
	</div>
</template>

<script>
export default {
    data() {
      return {
        color1: '#f0f',
        color2:null,
        color3: 'rgba(19, 206, 102, 0.8)',
        color4: 'rgba(255, 69, 0, 0.68)',
        predefineColors: [
          '#ff4500',
          '#ff8c00',
          '#ffd700',
          '#90ee90',
          '#00ced1',
          '#1e90ff',
          '#c71585',
          'rgba(255, 69, 0, 0.68)',
          'rgb(255, 120, 0)',
          'hsv(51, 100, 98)',
          'hsva(120, 40, 94, 0.5)',
          'hsl(181, 100%, 37%)',
          'hsla(209, 100%, 56%, 0.73)',
          '#c7158577'
        ],
        color5: '#409EFF'
        
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
