import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'

const Category = () => import ("../views/category/Category") 
const ShopCart = () =>  import ("../views/shopcart/ShopCart") 
const Profile = () => import ("../views/profile/Profile") 

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'home',
    redirect: "/home"
  },
  {
    path: "/home",
    name: "name",
    component: Home
  },
  {
    path: "/category",
    name: "category",
    component: Category
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
