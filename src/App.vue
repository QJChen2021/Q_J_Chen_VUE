<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>

<style>
  /* 设置滚动条的样式 */
  ::-webkit-scrollbar {
    width:1px;
  }
  /* 滚动槽 */
  ::-webkit-scrollbar-track {
    border-radius:1px;
  }
  /* 滚动条滑块 */
  ::-webkit-scrollbar-thumb {
    border-radius:10px;
    background:rgba(255, 255, 255, 0.623);
  }
  ::-webkit-scrollbar-thumb:window-inactive {
    background:rgba(255, 255, 255, 0.061);
  }


  /*网页背景设置*/
  html{
    background-image: url("https://img.wenhairu.com/images/2022/01/12/yKxMC.jpg");
    background-repeat: repeat-x;
    background-size: 100%;
    background-color: #017192;
  }
  /*全局字体布局设置*/
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: aliceblue;
    margin-top: 50px;
  }

  p{
    color: aliceblue;
  }
</style>
