import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'HomePage', // 更新名称
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'AboutPage', // 更新名称
    component: () => import('../views/About.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
