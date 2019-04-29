<template>
  <div class="hello">
    <el-container>
      <!-- 头部 区域 -->
      <el-header>ToDoList
        <el-input v-model="content" placeholder="请输入内容" size="small" @keyup.enter.native="add"></el-input>
      </el-header>
      <!-- 主体内容 区域 -->
      <el-main>
        <h1 class="todolist-head">未完成：</h1>
        <el-table :data="unfinish()">
          <el-table-column label="是否完成">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.isFinish"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="id" >
          </el-table-column>
          <el-table-column prop="content" label="内容">
          </el-table-column>
          <el-table-column label="操作" >
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, list)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
          </el-table-column>
        </el-table>

        <h1 class="todolist-head">已完成：</h1>
        <el-table :data="finished()">
          <el-table-column  label="是否完成">
            <template slot-scope="scope">
              <el-checkbox v-model="scope.row.isFinish"></el-checkbox>
            </template>
          </el-table-column>
          <el-table-column prop="id" label="id">
          </el-table-column>
          <el-table-column prop="content" label="内容">
          </el-table-column>
          <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, list)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
          </el-table-column>
        </el-table>
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: '',
      list:[] //{id:1,content:'张三',isFinish:false}
    }
  },
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    add:function(){
      var date = new Date();
      var time = date.getTime();
      var len = this.list.length;
      var id= 1;
      if(len > 0){
        id= this.list[len-1].id+1;
      }
      this.list.push({id:id,content:this.content,isFinish:false});
      this.content = '';
    },
    //删除
    deleteRow(index,rows){
      rows.splice(index,1);
    },
    unfinish(){
      var o = [];
      this.list.forEach(item=>{
        if(!item.isFinish){
          o.push(item);
        }
      })
      return o;
    },
    finished(){
      var o = [];
      this.list.forEach(item=>{
        if(item.isFinish){
          o.push(item);
        }
      })
      return o;
    }
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  display: block;
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-input{
  width: 300px;
  margin-left: 30px;
}
.todolist-head{
  text-align:left;
}
</style>
