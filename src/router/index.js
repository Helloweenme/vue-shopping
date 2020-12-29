import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/homes/Home'
import Login from '@/components/logins/Login'
import Register from '@//components/logins/Register'
import Homeitem from '@/components/homes/Homeitem'
import Goods from '@/components/homes/Goods'
import Cart from '@/components/homes/Cart'
Vue.use(Router)

export default new Router({
  routes: [
   /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },*/
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[{
        path: '/home',
      name: 'Homeitem',
      component: Homeitem,},
      {
        path: '/xiangxi',
      name: 'Goods',
      component: Goods,}
      ]
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[{
        path: '/home',
      name: 'Homeitem',
      component: Homeitem,},
      {
        path: '/xiangxi',
      name: 'Goods',
      component: Goods,}
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/shop',
      name: 'Cart',
      component: Cart
    }
  ]
})
