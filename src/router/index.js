import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import ourTeachers from '@/pages/OurTeachers'
import Registr from '@/components/Registr'
import Dashboard from '@/pages/Dashboard'
import Lessons from '@/components/Lessons'
import Philosophy from '@/components/ThePhilosophy'
import Topic from '@/components/TheTopic'
import Math from '@/components/Mathmatics'
import Exam from '@/pages/TheExam'
import ExamPage from '@/components/ExamPage'
import Excercises from '@/pages/TheExcercises'
import Finish from '@/components/ExamAnswers'


const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/OurTeachers',
    component: ourTeachers
  },
  {
    path: '/registr',
    component: Registr
  },
  {
    path: '/dashboard',
    component: Dashboard
  },  
  {
    path: '/subjects',
    component: Lessons
  },
  {
    path: '/philosophy',
    component: Philosophy
  },
  {
    path: '/math',
    component: Math
  },
  {
    path: '/topic',
    component: Topic
  },
  {
    path: '/exam',
    component: Exam
  },
  {
    path: '/quiz',
    component: ExamPage
  },
  {
    path: '/finish', 
    component: Finish
  },
  {
    path: '/exercises',
    component: Excercises
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
