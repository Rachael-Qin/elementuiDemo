<template>
	<div class="container">
		<h3>基础用法</h3>
    <p>定义value属性，它接受Number或者String。</p>
		<div>
      <el-badge :value="12">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="12">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="5" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="4" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item class="clearfix">
            评论
            <el-badge class="mark" :value="12" />
          </el-dropdown-item>
          <el-dropdown-item class="clearfix">
            回复
            <el-badge class="mark" :value="3" />
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
		</div>
    <h3>小红点</h3>
    <p>除了数字外，设置is-dot属性，它接受一个Boolean。</p>
    <div>
      <el-badge is-dot >回复</el-badge>
      <el-badge is-dot >
        <el-button icon="el-icon-message" type="primary" size="small"></el-button>
      </el-badge>
    </div>
	</div>
</template>

<script>
export default {
    data() {
      return {
        
      };
    },
    methods: {
     
    }
  }
</script>

<style scoped>
	div{
		margin-bottom: 10px;
	}
  .el-badge{
    margin-right: 40px;
  }
  
</style>
