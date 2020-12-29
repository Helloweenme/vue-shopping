<template>

		<div class="header_container">
           <div class="header_img"><img :src="imgr" /></div>
		<div class="header_search">
				<div>
					<input type="text" placeholder="搜索  商品名称" />
          <el-button type="danger" icon="el-icon-search" ></el-button>
				</div>
		</div>
        </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data(){
	  return{
		  imgr:"./static/images/logol.jpg"
	  }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*头部搜索区*/
.header_container{
	position: relative;
	width: 100%;
  height: 140px;
  margin: 0;
  padding: 0;
}
.header_container>.header_img{
	position: absolute;
	left: 30px;
	width: 160px;
	height: 140px;

}
img{
    width: 160px;
	height: 120px;
}
.header_search{
	position: absolute;
	left: 70%;
	margin-left: -290px;
	margin-top: 50px;
}
.header_search div{
  display: flex;
  align-items: center;
}
.header_search input{
	padding-left: 10px;
	width: 490px;
	height: 35px;
	font-size: 14px;
	line-height: 35px;
	border: 2px solid #FF0236;
  border-right: none;
	outline: none;
}
.header_search button.el-button.el-button--danger{
  padding: 0;
  width: 60px;
  height: 41px;
	font-size: 18px;
  border-radius: 0;
  outline: none;

  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
