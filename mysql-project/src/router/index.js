import { createRouter, createWebHistory } from 'vue-router'
import CustomerList from '@/views/CustomerList.vue'
import CustomerInfo from '@/views/CustomerInfo.vue'
import CustomerAdd from '@/views/CustomerAdd.vue'
import CustomerUpadate from '@/views/CustomerUpadate.vue'

const routes = [
  {
    path: '/',
    redirect : {name : 'custList'}
  },
  {
    path: '/customerList',
    name: 'custList',
    component: CustomerList
  },
  {
    path: '/customerInfo',
    name: 'custInfo',
    component: CustomerInfo
  },
  {
    path: '/customerAdd',
    name: 'custAdd',
    component: CustomerAdd
  },
  {
    path: '/customerUpdate/:custId',
    name: 'custUpdate',
    component: CustomerUpadate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

