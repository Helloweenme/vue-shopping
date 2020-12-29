<template>
  <div id="homes">
    <header-nav></header-nav>
    <Index></Index>
  </div>
  
</template>

<script>
import HeaderNav from "./HeaderNav"
import Goodsnav from "./Goodsnav"
import Index from "./Index"
export default {
  name: 'Home',
  components:{
    Goodsnav,
    HeaderNav,
    Index
  }
}
</script>

<style>
#homes {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  margin-left: 0px;
}


</style>
