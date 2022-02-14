<template>
  <div class="login">
    <div style="margin-top: 300px"></div>
    <img class="img" src="https://img.wenhairu.com/images/2022/01/12/yKzmh.jpg">
    <el-form :model="loginDB" :rules="rules2"
             status-icon
             ref="loginDB"
             label-position="left"
             label-width="0px"
             class="demo-ruleForm login-page">
      <el-form-item prop="username">
        <el-input type="text"
                  v-model="loginDB.username"
                  auto-complete="off"
                  placeholder="username or email"
        ></el-input>
      </el-form-item>
      <el-form-item prop="verification">
        <el-input type="password"
                  id="pwd"
                  v-model="loginDB.verification"
                  auto-complete="off"
                  placeholder="verification"
        ></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="getSalt()">Click get verification</el-button>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="login()">login</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  data(){
    return {
      loginDB: {
        username: '',
        verification: '',
      },
      rules2: {
        username: [{required: true, message: 'Please your enter username', trigger: 'blur'}],
        verification: [{required: true, message: 'Please your enter Verification', trigger: 'blur'}]
      }
    }
  },
  methods: {
    getSalt(){
      instance.post("sms/Salt",this.loginDB).then(
        res=>{
          if(status==false){
            this.$message({
              message : "验证码发送成功",
              type : "success"
            })
          }else{
            this.$message({
              message : "服务器出错，请稍后重试",
              type : "error"
            })
          }
        }
      )
    },
    login(){
      let token = this.$route.query.token;
      instance.post("user/Login",this.loginDB).then(
        res=>{
          if(res.data.loginData != null){
            localStorage.setItem("username",res.data.loginData.username);
            localStorage.setItem("token",res.data.token);
            this.$router.push('/');
            window.parent.location.reload();//刷新父级页面
          }else{
            this.$message({
              message : "用户名或密码错误！",
              type : "error"
            })
          }
        }
      )
    }
  }
};
</script>

<style scoped>
  .login{
    margin: 0 auto;
    width: 50%;
    height: 480px;
    border-radius: 20px;
    background-color: rgba(255,255,255,0);
    box-shadow: rgba(0,0,0,0.2) 0px 0px 15px;
  }
  h1{
    font-size: 48px;
    margin: 0;
  }
  .img{
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 30px;
    width: 15%;
  }

  .login-page {
    margin: 0 auto;
    width: 40%;
  }

  input::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #909;
    font-size: 14px;
  }
  input:-moz-placeholder { /* Mozilla Firefox 4 ~ 18 */
    color:    #909;
    opacity:  1;
    font-size: 14px;
  }
  input::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    #909;
    opacity:  1;
    font-size: 14px;
  }
  input:-ms-input-placeholder { /* Internet Explorer 10 ~ 11 */
    color:    #909;
    font-size: 14px;
  }
  input::-ms-input-placeholder { /* Microsoft Edge */
    color:    #909;
    font-size: 14px;
  }

  input::placeholder { /* 大部分现代浏览器 */
    color:    #909;
    font-size: 14px;
  }
</style>
