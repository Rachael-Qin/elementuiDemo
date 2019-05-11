<template>
  <div>
  <el-container >
      <el-header>elementui例子</el-header>
      <el-container class="main-container">
          <!-- 侧边栏 区域 -->
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1']">
              <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>小项目例子</template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1"><router-link to="/todolist">todolist</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>Basic</template>
                  <el-menu-item-group>
                      <el-menu-item index="2-1"><router-link to="/icon">icon 图标</router-link></el-menu-item>
                      <el-menu-item index="2-2"><router-link to="/button">button 按钮</router-link></el-menu-item>
                      <el-menu-item index="2-3"><router-link to="/link">link 链接</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3">
                  <template slot="title"><i class="el-icon-menu"></i>Form</template>
                  <el-menu-item-group title="">
                      <el-menu-item index="3-1"><router-link to="/radio">Radio 单选框</router-link></el-menu-item>
                      <el-menu-item index="3-2"><router-link to="/checkbox">Checkbox 多选框</router-link></el-menu-item>
                      <el-menu-item index="3-3"><router-link to="/input">Input 输入框</router-link></el-menu-item>
                      <el-menu-item index="3-4"><router-link to="/inputNumber">InputNumber 计数器</router-link></el-menu-item>
                      <el-menu-item index="3-5"><router-link to="/select">Select 选择器</router-link></el-menu-item>
                      <el-menu-item index="3-6"><router-link to="/cascader">Cascader 级联选择器</router-link></el-menu-item>
                      <el-menu-item index="3-7"><router-link to="/switch">Switch 级联选择器</router-link></el-menu-item>
                      <el-menu-item index="3-8"><router-link to="/slider">Slider 滑块</router-link></el-menu-item>
                      <el-menu-item index="3-9"><router-link to="/timepicker">TimePicker 时间选择器</router-link></el-menu-item>
                      <el-menu-item index="3-10"><router-link to="/datepicker">DatePicker 日期选择器</router-link></el-menu-item>
                      <el-menu-item index="3-11"><router-link to="/datetimepicker">DateTimePicker 日期时间选择器</router-link></el-menu-item>
                      <el-menu-item index="3-12"><router-link to="/upload">Upload 上传</router-link></el-menu-item>
                      <el-menu-item index="3-13"><router-link to="/rate">Rate 评分</router-link></el-menu-item>
                      <el-menu-item index="3-14"><router-link to="/colorpicker">ColorPicker 颜色选择器</router-link></el-menu-item>
                      <el-menu-item index="3-15"><router-link to="/form">Form 表单</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="4">
                  <template slot="title"><i class="el-icon-menu"></i>Data</template>
                  <el-menu-item-group>
                      <el-menu-item index="4-1"><router-link to="/table1">Table 表格1</router-link></el-menu-item>
                      <el-menu-item index="4-2"><router-link to="/table2">Table 表格2</router-link></el-menu-item>
                      <el-menu-item index="4-3"><router-link to="/tag">Tag 标签</router-link></el-menu-item>
                      <el-menu-item index="4-4"><router-link to="/progress">Progress 进度条</router-link></el-menu-item>
                      <el-menu-item index="4-5"><router-link to="/pagination">Pagination 进度条</router-link></el-menu-item>
                      <el-menu-item index="4-6"><router-link to="/badge">badge 标记</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
              <el-submenu index="5">
                  <template slot="title"><i class="el-icon-menu"></i>Notice</template>
                  <el-menu-item-group>
                      <el-menu-item index="5-1"><router-link to="/alert">Alert 警告</router-link></el-menu-item>
                      <el-menu-item index="5-2"><router-link to="/loading">Loading 加载</router-link></el-menu-item>
                      <el-menu-item index="5-3"><router-link to="/message">Message 消息提示</router-link></el-menu-item>
                      <el-menu-item index="5-4"><router-link to="/messageBox">MessageBox 弹框</router-link></el-menu-item>
                      <el-menu-item index="5-5"><router-link to="/notification">Notification 通知</router-link></el-menu-item>
                  </el-menu-item-group>
              </el-submenu>
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
  data () {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
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
