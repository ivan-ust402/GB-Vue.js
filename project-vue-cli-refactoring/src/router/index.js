import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomepagePage';
import BlogPage from '@/pages/ArticlesAndNewsPage';
import ProjectsPage from '@/pages/ProjectsPage';
import NotFoundPage from '@/pages/NotFoundPage';
// import BlogDetailsPage from '@/pages/BlogDetailsPage';
// import ProjectDetailsPage from '@/pages/ProjectDetailsPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogPage,
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
  routes
})

export default router