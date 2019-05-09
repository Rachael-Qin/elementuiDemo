<template>
	<div class="container">
		<h3>基础用法</h3>
    <p>由type属性来选择tag的类型，也可以通过color属性来自定义背景色。</p>
		<el-row>
      <el-tag>标签1</el-tag>
      <el-tag type='info'>标签2</el-tag>
      <el-tag type='success'>标签3</el-tag>
      <el-tag type='warning'>标签4</el-tag>
      <el-tag type='danger'>标签5</el-tag>
		</el-row>
    <h3>可移除标签</h3>
    <p>设置closable属性可以定义一个标签是否可移除。默认的标签移除时会附带渐变动画，如果不想使用，可以设置disable-transitions属性，它接受一个Boolean，true 为关闭。</p>
    <el-row>
      <el-tag v-for='tag in tags1' :key="tag.name" :type="tag.type" closable>{{tag.name}}</el-tag>
    </el-row>
    <h3>动态编辑标签</h3>
    <p>动态编辑标签可以通过点击标签关闭按钮后触发的 close 事件来实现</p>
    <el-row>
      <el-tag v-for='tag in dynamicTags' :key="tag" closable :disable-transitions="false" @close="handleClose(tag)">{{tag}}</el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="addTag"
        @blur="addTag"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </el-row>
    <h3>不同尺寸</h3>
    <el-row>
      <el-row>
        <el-tag v-for='tag in sizeTags' :key="tag.name" :size="tag.size" closable>{{tag.name}}</el-tag>
      </el-row>
    </el-row>
	</div>
</template>

<script>
export default {
    data() {
      return {
        tags1:[
          {name:'标签1',type:''},
          {name:'标签2',type:'info'},
          {name:'标签3',type:'success'},
          {name:'标签4',type:'warning'},
          {name:'标签5',type:'danger'}
        ],
        dynamicTags:[ '标签1','标签2','标签3','标签4' ],
        sizeTags:[
          {name:'标签1',size:''},
          {name:'标签2',size:'medium'},
          {name:'标签3',size:'small'},
          {name:'标签4',size:'mini'}
        ],
        inputVisible: false,
        inputValue: ''
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      addTag() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      }
     
    }
  }
</script>

<style scoped>
	.el-row{
		margin-bottom: 10px;
	}
  .el-tag{
    margin-right: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
