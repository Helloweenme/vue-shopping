<template>
<div class="comtain">
  <form>
    <!--表单名称-->
    <div class="title">登录</div>
    <!--用户名-->
    <input class="username" placeholder="用户名" v-model="username"/>
    <!--错误提示，下同-->
    <div class="error">{{uError}}</div>
    <!--密码-->
    <input class="password" placeholder="用户密码" v-model="userpwd"/>
    <div class="error">{{pError}}</div>
    <!--注册按钮-->
    <button class="register-btn" @click="userRegister">登录</button>
    <!--这里我们用路由跳转到登陆组件-->
    <router-link to="/home" >返回首页</router-link>
  </form>
  </div>
</template>

<script>

export default {
   name: 'Login',
  data: function () {
    return {
    //这里主要是初始化用户输入的信息，以及错误提示
      username: '',
      userpwd: '',
      uError:'',
      pError:''
    }
  },
  //methods 用于定义的函数。
  methods: {
    //这里定义了一个用户注册函数
    userRegister: function () {
      //简单进行一下验证，判断是否为空
      //正经项目肯定需要更多的验证规则，这里只是提供一个思路
      if(this.username=="") {
       this.uError="用户名不能为空！"
      }
      else {
        this.uError=""
      }
      if(this.userpwd=="") {
       this.pError="密码不能为空！"
      }
      else if(this.userpwd!==JSON.parse(localStorage.getItem("userpwd"))){
          this.pError="密码错误"
      }
      else {
        this.pError=""
      }
      if(this.uError==""&&this.pError=="") {
        this.$router.push('/home')
      }
    }
  }
  }
</script>

<style>
.comtain{
    width: 100%;
    height: 500px;
    background:url(~@/assets/1.jpg);
    background-size: 100% 500px;
}
 form {
    margin: auto;
    margin-left: 500px;
    width: 500px;
    color: black;
    border: 1px solid white;
    border-radius: 10px;
    background-color: rgba(255,255,255,0.5);
  }
  .title {
    margin-top: 110px;
    margin-bottom: 20px;
    font-size: 30px;
  }
  input {
    width: 400px;
    height: 40px;
    background-color: rgba(255,255,255,0.2);
    padding-left: 5px;
    border-radius: 5px;
    color: black;
  }
  button {
    width: 100px;
    height: 30px;
    margin-bottom: 20px;
  }
  form a{
    display: block;
    margin-bottom: 110px;
    cursor: pointer;
  }
  .error {
     font-size: 14px;
     color: red;
     height: 20px;
  }
 

</style>
