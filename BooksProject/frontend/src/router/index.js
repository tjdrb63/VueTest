import Vue from 'vue'
import VueRouter from 'vue-router'
import Book from '../views/Book.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/books',
    name: 'main',
    component: Book
  },
  {
    path:'/books/:bookId',
    name:'booklist',
    component:Book
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
