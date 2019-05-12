<template>
	<div class="container">
		<h3>基础用法</h3>
		<p> el-dropdown 标签,内容用 el-dropdown-menu 标签，el-dropdown-item，通过组件slot来设置下拉触发的元素以及需要通过具名slot为dropdown 来设置下拉菜单。默认情况下，下拉按钮只要hover即可，无需点击也会显示下拉菜单。 </p>
		<el-dropdown>
			<span class="el-dropdown-link">
			    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>子菜单1</el-dropdown-item>
				<el-dropdown-item>子菜单2</el-dropdown-item>
			    <el-dropdown-item>子菜单3</el-dropdown-item>
			    <el-dropdown-item>子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<h3>触发对象</h3>
		<p> el-dropdown 标签,内容用 el-dropdown-menu 标签，el-dropdown-item，通过组件slot来设置下拉触发的元素以及需要通过具名slot为dropdown 来设置下拉菜单。默认情况下，下拉按钮只要hover即可，无需点击也会显示下拉菜单。 </p>
		<el-dropdown>
			<el-button type="primary">
			    更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
		    </el-button>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>子菜单1</el-dropdown-item>
				<el-dropdown-item>子菜单2</el-dropdown-item>
			    <el-dropdown-item>子菜单3</el-dropdown-item>
			    <el-dropdown-item>子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown split-button type="primary" @click="handleClick">
			    更多菜单
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>子菜单1</el-dropdown-item>
				<el-dropdown-item>子菜单2</el-dropdown-item>
			    <el-dropdown-item>子菜单3</el-dropdown-item>
			    <el-dropdown-item>子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<h3>触发方式</h3>
		<p> 默认为hover。需要设置为click的话，在 trigger 属性设置为click即可。</p>
		<el-row>
			<el-col :span="12">
				<span class="demonstration">hover 激活：</span>
				<el-dropdown>
					<span class="el-dropdown-link">
					    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item>子菜单1</el-dropdown-item>
						<el-dropdown-item>子菜单2</el-dropdown-item>
					    <el-dropdown-item>子菜单3</el-dropdown-item>
					    <el-dropdown-item>子菜单4</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
			<el-col :span="12">
				<span class="demonstration">click 激活：</span>
				<el-dropdown trigger="click">
					<span class="el-dropdown-link">
					    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item icon="el-icon-plus">子菜单1</el-dropdown-item>
						<el-dropdown-item icon="el-icon-circle-plus">子菜单2</el-dropdown-item>
					    <el-dropdown-item icon="el-icon-circle-plus-outline">子菜单3</el-dropdown-item>
					    <el-dropdown-item icon="el-icon-check">子菜单4</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-row>
		<h3>菜单隐藏方式</h3>
		<p>下拉菜单默认在点击菜单项后会被隐藏，将hide-on-click属性默认为false可以关闭此功能。</p>
		<el-dropdown :hide-on-click="false">
			<span class="el-dropdown-link">
			    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>子菜单1</el-dropdown-item>
				<el-dropdown-item>子菜单2</el-dropdown-item>
			    <el-dropdown-item>子菜单3</el-dropdown-item>
			    <el-dropdown-item>子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<h3>指令事件</h3>
		<p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作。</p>
		<el-dropdown @command="handleCommand">
			<span class="el-dropdown-link">
			    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="a">子菜单1</el-dropdown-item>
				<el-dropdown-item command="b">子菜单2</el-dropdown-item>
			    <el-dropdown-item command="c">子菜单3</el-dropdown-item>
			    <el-dropdown-item command="d">子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<h3>不同尺寸</h3>
		<p>额外的尺寸：medium、small、mini，通过设置 size 属性来配置它们。</p>
		<el-dropdown split-button type="primary">
			默认尺寸
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="a">子菜单1</el-dropdown-item>
				<el-dropdown-item command="b">子菜单2</el-dropdown-item>
			    <el-dropdown-item command="c">子菜单3</el-dropdown-item>
			    <el-dropdown-item command="d">子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown split-button type="primary" size="medium">
			中等尺寸
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="a">子菜单1</el-dropdown-item>
				<el-dropdown-item command="b">子菜单2</el-dropdown-item>
			    <el-dropdown-item command="c">子菜单3</el-dropdown-item>
			    <el-dropdown-item command="d">子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown split-button type="primary" size="small">
			小型尺寸
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="a">子菜单1</el-dropdown-item>
				<el-dropdown-item command="b">子菜单2</el-dropdown-item>
			    <el-dropdown-item command="c">子菜单3</el-dropdown-item>
			    <el-dropdown-item command="d">子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
		<el-dropdown split-button type="primary" size="mini">
			超小尺寸
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item command="a">子菜单1</el-dropdown-item>
				<el-dropdown-item command="b">子菜单2</el-dropdown-item>
			    <el-dropdown-item command="c">子菜单3</el-dropdown-item>
			    <el-dropdown-item command="d">子菜单4</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
export default{
	data(){
		return {
			
		}
	},
	methods:{
		handleClick() {
	        alert('button click');
	    },
	    handleCommand(command) {
	        this.$message('click on item ' + command);
	    }
	}
}
</script>

<style scoped>
	.el-dropdown-link {
	    cursor: pointer;
	    color: #409EFF;
	}
	.el-dropdown {
		margin-right: 20px;
	}
</style>
