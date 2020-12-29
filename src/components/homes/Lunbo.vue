<template>
	<div class="block" >
    <el-carousel height="500px" :interval="2000" style="width: 880px" class="lunbos">
      <el-carousel-item v-for="item in items" :key="item.src">
        <img :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Lunbo',
  data(){
      return{
       items:[
           './static/images/a.jpg',
          './static/images/b.jpg',
          './static/images/c.jpg',
       ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部搜索区*/
  
  img{
      width: inherit;
      height: inherit;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .lunbos{
   position: absolute;
   margin-left: 250px;
  }
</style>
