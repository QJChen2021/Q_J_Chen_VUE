<template>
  <div>
    <h1>Hi~</h1>
    <el-button round @click="logout()">log-out</el-button>
  </div>
</template>

<script>
export default {
  name: "user",
  data(){
    return{

    }
  },
  methods:{
    logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      this.$router.push({path: '/'});
      window.parent.location.reload();//刷新父级页面
    }
  }
}
</script>

<style scoped>

</style>
