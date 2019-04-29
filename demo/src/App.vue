<template>
  <div>
  <el-container >
      <el-header>elementui例子</el-header>
      <el-container class="main-container">
          <!-- 侧边栏 区域 -->
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['2', '3']">
              <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i>小项目例子</template>
                <el-menu-item-group>
                  <el-menu-item index="1-1"><router-link to="/todolist">todolist</router-link></el-menu-item>
                </el-menu-item-group>
              </el-submenu>
               <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>组件</template>
                <el-menu-item-group>
                  <template slot="title">basic</template>
                  <el-menu-item index="2-1"><router-link to="/icon">icon 图标</router-link></el-menu-item>
                  <el-menu-item index="2-2"><router-link to="/button">button 按钮</router-link></el-menu-item>
                  <el-menu-item index="2-3"><router-link to="/link">link 链接</router-link></el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="Form">
                  <el-menu-item index="2-4"><router-link to="/radio">Radio 单选框</router-link></el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu>
             <!-- <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
              </el-submenu> -->
            </el-menu>
          </el-aside>
          <!-- 主体内容 区域 -->
          <el-main>
            <router-view></router-view>
          </el-main>
      </el-container>
      <el-footer style="height: 40px;">by Qinruqin</el-footer>
  </el-container>
  </div>
</template>

<script>
  export default {
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  };
</script>

<style>
  .el-header , .el-footer{
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    text-align: center;
  }
  .el-footer{
    position: fixed;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    font-size: 12px;
    line-height: 40px;
  }
  .main-container{
    margin-bottom: 40px;
    min-height: 600px;
  }
  
  .el-aside {
    color: #333;
  }
</style>