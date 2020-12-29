<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" tab-position="left">
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"></el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'Goodsnav',
  data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部搜索区*/

</style>
