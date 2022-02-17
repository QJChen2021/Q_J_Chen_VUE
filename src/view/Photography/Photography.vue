<template>
  <div class="Photo">
    <img class="titleImg" src="https://img.wenhairu.com/images/2022/01/17/yPHks.png">
    <h1>欢迎来到我的摄影世界！</h1>
    <ul>
      <li v-for="(item,index) in listData">
        <el-image :src="item.creatImg" :preview-src-list="src" @click="srcListLink(item)"></el-image>
        <p class="show">拍摄时间： {{item.creatTime}}</p>
        <p class="show">拍摄地点：{{item.creatLocation}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import instance from "../../utils/request";

export default {
  data() {
    return {
      token:localStorage.getItem("token"),
      listData: [],
      srcList:[],
      src:[]
    }
  },
  methods:{
    srcListLink(item){
      for (let i = 0; i < this.srcList.length; i++) {
        console.log("src:"+this.srcList[i][i].parentId);
        if(this.srcList[i][i].parentId == item.pid){
          console.log(this.srcList[i][i].srcList);
        }
      }
      console.log(this.src);
    }
  },
  created() {
    instance.post("http://localhost:9010/photography?token="+this.token).then(req=>{
      if(req.data.success == 101){
        this.$message({
          message : req.data.list,
          type : "error"
        })
      }else if (req.data.success == 200){
        this.listData = req.data.listImg.data;
        for (let listDataKey in this.listData) {
          for (let listDataKey2 in listDataKey) {
            let tmp = "srcLink" + this.listData[listDataKey].pid;
            this.srcList.push(req.data.listImg[tmp])
          }
        }
      }else if (req.data.status == 500 ){
        this.$message({
          message : "网络连接错误，请重试",
          type : "error"
        })
      }
    })
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
    font-size: 48px;
  }
  ul{
    list-style: none;
  }
  li{
    display: inline-block;
    margin: 20px;
    border: 5px solid aliceblue;
    background-color: aliceblue;
  }
  .show{
    color: #232323;
  }
</style>
