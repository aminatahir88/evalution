import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskListPage from '@/views/TaskListPage.vue';
import TaskForm from '@/views/TaskForm.vue';

Vue.use(VueRouter);

const routes = [
  {
    routes,
  },
  { path: '/tasks', component: TaskListPage },
  { path: '/tasks/create', component: TaskForm },
  { path: '/tasks/edit/:id', component: TaskForm },
  { path: '/', redirect: '/tasks' },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
