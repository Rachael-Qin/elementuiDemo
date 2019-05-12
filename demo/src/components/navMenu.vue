<template>
	<div class="container">
		<h3>顶栏</h3>
		<p>导航菜单默认为垂直模式，通过属性 mode="horizontal" 可以使导航菜单变更为水平模式。另外，在菜单中通过submenu组件可以生成二级菜单。Menu 还提供了background-color、text-color和active-text-color，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。</p>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3" disabled>消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
        <br>
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-submenu index="2">
		    <template slot="title">我的工作台</template>
		    <el-menu-item index="2-1">选项1</el-menu-item>
		    <el-menu-item index="2-2">选项2</el-menu-item>
		    <el-menu-item index="2-3">选项3</el-menu-item>
		    <el-submenu index="2-4">
		      <template slot="title">选项4</template>
		      <el-menu-item index="2-4-1">选项1</el-menu-item>
		      <el-menu-item index="2-4-2">选项2</el-menu-item>
		      <el-menu-item index="2-4-3">选项3</el-menu-item>
		    </el-submenu>
		  </el-submenu>
		  <el-menu-item index="3" disabled>消息中心</el-menu-item>
		  <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
		</el-menu>
		
		<h3>侧栏</h3>
		<el-row>
			<el-col :span="12">
				<el-menu class="el-menu-vertical-demo" 
					default-active="2"
					@open="handleOpen"
	                @close="handleClose">
					<el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-location"></i>
				          <span>导航一</span>
				        </template>
						<el-menu-item index="1-1">子菜单1</el-menu-item>
						<el-menu-item index="1-2">子菜单2</el-menu-item>
						<el-menu-item index="1-3">子菜单3</el-menu-item>
					</el-submenu>
					<el-menu-item index="2">
				        <i class="el-icon-menu"></i>
				        <span slot="title">导航二</span>
				    </el-menu-item>
				    <el-menu-item index="3" disabled>
				        <i class="el-icon-document"></i>
				        <span slot="title">导航三</span>
				    </el-menu-item>
				    <el-menu-item index="4">
				        <i class="el-icon-setting"></i>
				        <span slot="title">导航四</span>
				    </el-menu-item>
				</el-menu>
			</el-col>
			<el-col :span="12">
				<el-menu class="el-menu-vertical-demo" 
						default-active="2"
						@open="handleOpen"
		                @close="handleClose"
				        background-color="#545c64"
				        text-color="#fff"
				        active-text-color="#ffd04b">
					<el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-location"></i>
				          <span>导航一</span>
				        </template>
						<el-menu-item index="1-1">子菜单1</el-menu-item>
						<el-menu-item index="1-2">子菜单2</el-menu-item>
						<el-menu-item index="1-3">子菜单3</el-menu-item>
					</el-submenu>
					<el-menu-item index="2">
				        <i class="el-icon-menu"></i>
				        <span slot="title">导航二</span>
				    </el-menu-item>
				    <el-menu-item index="3" disabled>
				        <i class="el-icon-document"></i>
				        <span slot="title">导航三</span>
				    </el-menu-item>
				    <el-menu-item index="4">
				        <i class="el-icon-setting"></i>
				        <span slot="title">导航四</span>
				    </el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
		<h3>折叠</h3>
		<p>设置 collapse 属性为 true 或 false </p>
		<el-row>
			<el-col :span='12'>
				<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
				  <el-radio-button :label="false">展开</el-radio-button>
				  <el-radio-button :label="true">收起</el-radio-button>
				</el-radio-group>
				<el-menu class="el-menu-vertical-demo" 
					default-active="2"
					@open="handleOpen"
	                @close="handleClose"
			        background-color="#545c64"
			        text-color="#fff"
			        active-text-color="#ffd04b"
			        :collapse="isCollapse">
					<el-submenu index="1">
				        <template slot="title">
				          <i class="el-icon-location"></i>
				          <span>导航一</span>
				        </template>
						<el-menu-item index="1-1">子菜单1</el-menu-item>
						<el-menu-item index="1-2">子菜单2</el-menu-item>
						<el-menu-item index="1-3">子菜单3</el-menu-item>
					</el-submenu>
					<el-menu-item index="2">
				        <i class="el-icon-menu"></i>
				        <span slot="title">导航二</span>
				    </el-menu-item>
				    <el-menu-item index="3" disabled>
				        <i class="el-icon-document"></i>
				        <span slot="title">导航三</span>
				    </el-menu-item>
				    <el-menu-item index="4">
				        <i class="el-icon-setting"></i>
				        <span slot="title">导航四</span>
				    </el-menu-item>
				</el-menu>
			</el-col>
		</el-row>
	</div>
</template>

<script>
export default{
	data(){
		return {
			activeIndex:'1',
			isCollapse:false
		}
	},
	methods:{
		handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	    },
	    handleOpen(key, keyPath) {
	        console.log(key, keyPath);
	    },
	    handleClose(key, keyPath) {
	        console.log(key, keyPath);
	    }
	}
}
</script>

<style scoped>
	.el-alert{
		margin-bottom: 10px;
	}
</style>
