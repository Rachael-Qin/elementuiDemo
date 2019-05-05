<template>
	<div class="inputnumber-container">
		<h3>基本用法</h3>
		<el-row>
			<el-select v-model="val1" @change='handleChange'>
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'></el-option>
			</el-select>
		</el-row>
		<h3>有禁用选项</h3>
		<p>el-option中 加入 属性 disabled</p>
		<el-row>
			<el-select v-model="val2">
				<el-option v-for='item in select2' :label='item.label' :value='item.value' :disabled='item.disabled' :key='item.label'></el-option>
			</el-select>
		</el-row>
		<h3>禁用状态</h3>
		<el-row>
			<el-select v-model="val1" disabled>
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'></el-option>
			</el-select>
		</el-row>
		<h3>可清空单选</h3>
		<p>属性 clearable</p>
		<el-row>
			<el-select v-model="val1" clearable>
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'></el-option>
			</el-select>
		</el-row>
		<h3>基础多选</h3>
		<p>属性 multiple ，可以设置collapse-tags属性将它们合并为一段文字</p>
		<el-row>
			<el-select v-model="val3" multiple>
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'></el-option>
			</el-select>
		</el-row>
		<el-row>
			<el-select v-model="val3" multiple collapse-tags>
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'></el-option>
			</el-select>
		</el-row>
		<h3>自定义模板</h3>
		<el-row>
			<el-select v-model="val3">
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'>
					<span style="float: left;">{{item.label}}</span>
					<span style="float: right; font-size: 12px;">{{item.value}}</span>
				</el-option>
			</el-select>
		</el-row>
		<h3>分组</h3>
		<p>使用 el-option-group 对备选项分组</p>
		<el-row>
			<el-select v-model="val3">
				<el-option-group v-for='group in select4' :key='group.label' :label='group.label'>
					<el-option v-for='item in group.options' :label='item.label' :value='item.value' :key='item.label'>
					</el-option>
				</el-option-group>
			</el-select>
		</el-row>
		<h3>可搜索</h3>
		<p>属性 filterable </p>
		<el-row>
			<el-select v-model="val1" filterable>
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'></el-option>
			</el-select>
		</el-row>
		<h3>创建条目</h3>
		<p>属性 allow-create ，此时 filterable 必须为真</p>
		<el-row>
			<el-select v-model="val1" allow-create filterable>
				<el-option v-for='item in select1' :label='item.label' :value='item.value' :key='item.label'></el-option>
			</el-select>
		</el-row>
	</div>
</template>

<script>
export default {
  data () {
	  return {
	    select1: [{
	          value: '选项1',
	          label: '黄金糕'
	        }, {
	          value: '选项2',
	          label: '双皮奶'
	        }, {
	          value: '选项3',
	          label: '蚵仔煎'
	        }, {
	          value: '选项4',
	          label: '龙须面'
	        }, {
	          value: '选项5',
	          label: '北京烤鸭'
	        }],
	    val1: '',
	    select2: [{
	          value: '选项1',
	          label: '黄金糕',
	          disabled: true
	        }, {
	          value: '选项2',
	          label: '双皮奶',
	          disabled: false
	        }, {
	          value: '选项3',
	          label: '蚵仔煎',
	          disabled: false
	        }, {
	          value: '选项4',
	          label: '龙须面',
	          disabled: true
	        }, {
	          value: '选项5',
	          label: '北京烤鸭',
	          disabled: false
	        }],
	    val2: '',
	    val3: [],
	    select4: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Beijing',
          label: '北京'
        }]
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }, {
          value: 'Dalian',
          label: '大连'
        }]
      }],
      val4: ''
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
	.el-input .el-select {
	    width: 130px;
	}
</style>
