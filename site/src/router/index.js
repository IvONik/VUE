import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectPage from '../pages/ProjectPage.vue'
import BlogPage from '../pages/BlogPage.vue'
import ProjectDetailsPage from '../pages/ProjectDetailsPage.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectPage,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
  },
  {
    path: '/project/details',
    name: 'details',
    component: ProjectDetailsPage,
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFound,
  },

//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
