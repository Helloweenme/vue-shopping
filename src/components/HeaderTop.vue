<template>
  <div class="header_nav">
			<div >
                {{msg}}
            </div>
			<ul>
                <li><router-link to="/home">首页</router-link></li>
				<li >
					<router-link to="/login">登录</router-link>
                    <router-link to="/register">注册</router-link>
				</li>
				<li><a >个人中心</a></li>
                <li><router-link to="/shop">我的购物车</router-link></li>
				<li><a>联系客服</a></li>
				<li><a>网站导航</a></li>
			</ul>
		</div>
</template>

<script>
export default {
  name: 'HeaderTop',
  data () {
    return {
      msg: '欢迎来得到向阳购物中心~'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header_nav{
    	width: 100%;
	height: 25px;
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
