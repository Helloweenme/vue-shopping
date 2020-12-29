<template>
  <div id="homes">
    <header-search></header-search>
    <router-view/>
  </div>
  
</template>

<script>
import HeaderSearch from "./HeaderSearch"
export default {
  name: 'Home',
  components:{
    HeaderSearch,
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
