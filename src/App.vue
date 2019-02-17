<template>
  <div id="app">
    <div id="nav">
      <!-- <a style="float: right; margin: 9px 20px; width: 180px;">双马尾放映室</a><MenuType style="width:70%; background-color: #2D8CF0;"></MenuType> -->
      <!-- <SearchInput></SearchInput> -->
      <NavBar></NavBar>
    </div>
    <br />
    <router-view/>
    </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2D8CF0;
}
#nav {
  // padding: 10px;
  background-color: #2D8CF0;
  a {
    font-weight: bold;
    color: #ffffff;
    &.router-link-exact-active {
      color: #42b983;
    }
  };
  text-align: left;
  color: #ffffff;
  font-size: 28px;
}
</style>
