<template>
	<div class="container">
		<h3>基础用法</h3>
		<p> el-tabs 标签,内容用 el-tab-pane 标签 </p>
		<el-tabs v-model="activeName"  @tab-click="handleClick">
			<el-tab-pane label="标签1" name="first">标签1</el-tab-pane>
		    <el-tab-pane label="标签2" name="second">标签2</el-tab-pane>
		    <el-tab-pane label="标签3" name="third">标签3</el-tab-pane>
		    <el-tab-pane label="标签4" name="fourth">标签4</el-tab-pane>
		</el-tabs>
		<h3>选项卡样式</h3>
		<p>只需要设置 type 属性为 card 就可以使选项卡改变为标签风格。</p>
		<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
			<el-tab-pane label="标签1" name="first">标签1</el-tab-pane>
		    <el-tab-pane label="标签2" name="second">标签2</el-tab-pane>
		    <el-tab-pane label="标签3" name="third">标签3</el-tab-pane>
		    <el-tab-pane label="标签4" name="fourth">标签4</el-tab-pane>
		</el-tabs>
		<h3>卡片花</h3>
		<p>只需要设置 type 属性为 border-card 就可以使选项卡改变为标签风格。</p>
		<el-tabs v-model="activeName3" type="border-card" @tab-click="handleClick">
			<el-tab-pane label="标签1" name="first">标签1</el-tab-pane>
		    <el-tab-pane label="标签2" name="second">标签2</el-tab-pane>
		    <el-tab-pane label="标签3" name="third">标签3</el-tab-pane>
		    <el-tab-pane label="标签4" name="fourth">标签4</el-tab-pane>
		</el-tabs>
		<h3>位置</h3>
		<p>设置 tab-position 属性，有4个选项：top/right/bottom/left。</p>
		<el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
			<el-radio-button label='top'>top</el-radio-button>
			<el-radio-button label='right'>right</el-radio-button>
			<el-radio-button label='bottom'>bottom</el-radio-button>
			<el-radio-button label='left'>left</el-radio-button>
		</el-radio-group>
		<el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick">
			<el-tab-pane label="标签1" name="first">标签1</el-tab-pane>
		    <el-tab-pane label="标签2" name="second">标签2</el-tab-pane>
		    <el-tab-pane label="标签3" name="third">标签3</el-tab-pane>
		    <el-tab-pane label="标签4" name="fourth">标签4</el-tab-pane>
		</el-tabs>
		<h3>自定义标签页</h3>
		<p>可以通过具名 slot 来实现自定义标签页的内容。</p>
		<el-tabs v-model="activeName3" type="border-card" @tab-click="handleClick">
			<el-tab-pane>
				<span slot="label"><i class="el-icon-info"></i> 标签1</span>
				标签1
			</el-tab-pane>
		    <el-tab-pane label="标签2" name="second">标签2</el-tab-pane>
		    <el-tab-pane label="标签3" name="third">标签3</el-tab-pane>
		    <el-tab-pane label="标签4" name="fourth">标签4</el-tab-pane>
		</el-tabs>
		<h3>动态增减标签页</h3>
		<p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
		<el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
			<el-tab-pane :key="item.name"
			    v-for="(item, index) in editableTabs"
			    :label="item.title"
			    :name="item.name">
				 {{item.content}}
			</el-tab-pane>
		</el-tabs>
		<h3>自定义增加标签页触发器</h3>
		<p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
		<div style="margin-bottom: 20px;">
		  <el-button
		    size="small"
		    @click="addTab(editableTabsValue2)"
		  >
		    add tab
		  </el-button>
		</div>
		<el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="handleRemove">
			<el-tab-pane :key="item.name"
			    v-for="(item, index) in editableTabs2"
			    :label="item.title"
			    :name="item.name">
				 {{item.content}}
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
export default{
	data(){
		return {
			activeName:'second',
			activeName2:'second',
			activeName3:'second',
			tabPosition:'left',
			editableTabsValue: '2',
			editableTabs: [{
	          title: 'Tab 1',
	          name: '1',
	          content: 'Tab 1 content'
	        }, {
	          title: 'Tab 2',
	          name: '2',
	          content: 'Tab 2 content'
	        }],
	        tabIndex: 2,
	        editableTabsValue2:'1',
	        editableTabs2: [{
	          title: 'Tab 1',
	          name: '1',
	          content: 'Tab 1 content'
	        }, {
	          title: 'Tab 2',
	          name: '2',
	          content: 'Tab 2 content'
	        }],
	        tabIndex2:2
		}
	},
	methods:{
		handleClick(tab, event) {
	        console.log(tab, event);
	    },
	    handleTabsEdit(targetName,action){
	    	if(action == 'add'){
              let newTabName = ++this.tabIndex + '';
              this.editableTabs.push({
              	title:'new Tab',
              	name:newTabName,
              	content:'New Tab content'
              });
              this.editableTabsValue = newTabName;
	    	}
	    	if(action == 'remove'){
	    		let tabs = this.editableTabs;
	    		let activeName = this.editableTabsValue;
	    		if(activeName == targetName){
	    			tabs.forEach((tab,index)=>{
	    				//删除后，设置选中的标签项
	    				if(tab.name == targetName){
	    					let nextTab = tabs[index+1] || tabs[index-1];
	    					if(nextTab){
	    						activeName = nextTab.name;
	    					}
	    				}
	    			})
	    		}
	    		this.editableTabsValue = activeName;
	    		this.editableTabs = tabs.filter(tab => tab.name !== targetName);
	    	}
	    },
	    addTab(){
			let newTabName = ++this.tabIndex2 + '';
            this.editableTabs2.push({
              	title:'new Tab',
              	name:newTabName,
              	content:'New Tab content'
            });
            this.editableTabsValue2 = newTabName;
	    },
	    handleRemove(targetName){
			let tabs = this.editableTabs2;
    		let activeName = this.editableTabsValue2;
    		if(activeName == targetName){
    			tabs.forEach((tab,index)=>{
    				//删除后，设置选中的标签项
    				if(tab.name == targetName){
    					let nextTab = tabs[index+1] || tabs[index-1];
    					if(nextTab){
    						activeName = nextTab.name;
    					}
    				}
    			})
    		}
    		this.editableTabsValue2 = activeName;
    		this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
	    }
	}
}
</script>

<style scoped>
	.el-alert{
		margin-bottom: 10px;
	}
</style>
