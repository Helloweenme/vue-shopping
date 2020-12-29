<template>
  <div class="footer">
      <div class="one">
      <ul>
          <li><router-link to="/home">商城首页</router-link></li>
            <li><a>支付宝</a></li>
            <li> <a>物流</a></li>
      </ul>
   </div>
   </div>
</template>

<script>
export default {
  name: 'Bootem',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    width: 100%;
	height: 80px;
	background: #c4bbbb;
	font-family:  "Microsoft YaHei";
  display: flex;
  align-items: center;
  justify-content: space-between;

}
ul {
  list-style-type: none;
  
  padding: 0;
}
li {
  display: inline-block;
  margin: auto;
}
a {
  color: #42b983;
}


</style>
