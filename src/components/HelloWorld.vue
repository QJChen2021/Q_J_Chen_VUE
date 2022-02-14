<template>
  <div class="hello">
    <img class="titleImg" src="https://img.wenhairu.com/images/2022/01/17/yPHks.png">
    <router-link to="/Christmas"><h1>{{ msg }}</h1></router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to QJ·Chen'
    }
  }
}
</script>

<style scoped>
  .titleImg{
    width: 15%;
    animation: spin 30s linear infinite;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  h1{
    font-size: 62px;
    text-shadow: rgba(0, 0, 0, 0.13) 0px 0px 10px;
  }
  a{
    text-decoration: none;
    color: aliceblue;
  }
</style>
