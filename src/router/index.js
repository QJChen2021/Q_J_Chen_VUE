import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from "../view/Menu/Menu"
import Photograph from "../view/Photography/Photography"
import ICP from "../view/ICP/ICP";
import Login from "../view/Login/Login";
import User from "../view/user/User";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/',
      name: 'ICP',
      component: ICP
    },
    {
      path: '/photography',
      name: 'Photography',
      component: Photograph
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
