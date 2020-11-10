import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Dashboard from '../views/Dashboard.vue'
import Survey from '../views/Survey.vue'
import SurveyBaru from '../views/SurveyBaru.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/survey',
    component: Survey
  },
  {
    path: '/survey/baru',
    component: SurveyBaru
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
