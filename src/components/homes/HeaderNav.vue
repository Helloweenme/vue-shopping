<template>
		<div class="header_container">
         <el-row :gutter="60">
  <el-col :span="6"><div class="grid-content bg-purple">商品分类</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">促销商品</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">精品区</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">新品上架</div></el-col>
</el-row>
        </div>
</template>

<script>
export default {
  name: 'HeaderNav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部搜索区*/
.header_container{
	position: relative;
	width: 100%;
  height: 50px;
  margin: 0;
  padding: 0;
}
 .el-row {
    margin-bottom: 20px;
    
  }
  .el-row:last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
    text-align: center;
    background: orange;
  }
  
  .grid-content {
    border-radius: 4px;
    min-height: 30px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>
