import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomepagePage';
import BlogPage from '@/pages/ArticlesAndNewsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import NotFoundPage from '@/pages/NotFoundPage';
import BlogDetailsPage from '@/pages/BlogDetailsPage';
import ProjectDetailsPage from '@/pages/ProjectDetailsPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/projects/:pageNumber?',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/project-details/:id?',
    name: 'ProjectDetails',
    component: ProjectDetailsPage,
  },
  {
    path: '/blog/:pageNumber?',
    name: 'Blog',
    component: BlogPage,
  },
  {
    path: '/blog-details/:id?',
    name: 'blogDetails',
    component: BlogDetailsPage,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundPage,
  },
  {
    path: '/:CatchAll(.*)',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => resolve({el: to.hash, behavior: 'smooth'}), 10)
      })
    } else {
      return savedPosition || {top: 0, behavior: 'smooth'}
    }
  }
})

export default router