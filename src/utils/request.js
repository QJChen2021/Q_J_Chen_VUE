import axios from "axios";
import Router from "vue-router";
import ElementUI from "element-ui";

const instance = axios.create({
  baseURL:'http://127.0.0.1:9010',
  timeout:5000
});
instance.interceptors.request.use(res=>{
    console.log("进入请求拦截器")
    let sessionid = localStorage.getItem("token");
    console.log(sessionid);
    //将参数携带在 请求头  **
    res.headers.token=sessionid;
    return res;
  }
);
instance.interceptors.response.use(res=>{
  //进入响应拦截器
  return res;
},err=>{
  if(err.response.status == 401){
    ElementUI.Message({
      message:'请重新登录',
      type:"success",
      center:true
    });
  }
});
export  default instance;
