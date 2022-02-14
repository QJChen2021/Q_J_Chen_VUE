<template>
  <!--    顶部菜单栏-->
  <div class="Menu" style="z-index: 999">
    <ul>
      <li><router-link to="/" class="menu_style">Q·J·Chen</router-link></li>
      <li><router-link to="/Photography" class="menu_style">Photography</router-link></li>
      <li><router-link to="/java" class="menu_style">Java</router-link></li>
      <li v-show="username != null"><router-link to="/user" class="menu_style">{{username}}</router-link></li>
      <li v-show="username == null"><router-link to="/Login" class="menu_style">Login</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data(){
    return{
      username:localStorage.getItem("username")
    }
  }
}
</script>

<style scoped>
  /*全局字体布局设置*/
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: aliceblue;
    margin-top: 150px;
  }
  html{
    list-style: none;
  }
  /*顶部菜单样式设置*/
  .Menu{
    text-align: center;
    width: 100%;
    position: fixed;
    top: 0;
  }
  /*顶部菜单内容设置*/
  ul{
    margin-top: -8px;
    padding: 0;
    display: flex;
    background-color: rgba(230, 230, 230, 0.3);
    height: 61px;
  }
  ul li{
    margin-top: 15px;
    list-style: none;
    width: 100%;
  }
  ul li a{
    text-decoration: none;
    color: aliceblue;
    font-size: 22px;
  }
</style>
