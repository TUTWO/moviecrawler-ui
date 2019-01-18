<template>
  <div id="app">
    <div id="nav">
      双马尾放映室
    </div>
    <MenuType></MenuType>
    <router-view/>
    </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 10px;
  background-color: #1E89E0;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  };
  text-align: left;
  color: #ffffff;
  font-size: 28px;
}
</style>
