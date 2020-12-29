<template>
  <div id="app">
      <div class="head-top"><HeaderTop></HeaderTop></div>
    <router-view/>
 <bootem></bootem>
  </div>
</template>
<script>
import HeaderTop from "./components/HeaderTop"
import Bootem from "./components/Bootem"
export default {
  name: 'App',
components:{
    HeaderTop,
    Bootem 
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-left: 0px;
  margin-bottom: 0px;
}
.head-top{
  width: 100%;
  height: 25px;
}
</style>
