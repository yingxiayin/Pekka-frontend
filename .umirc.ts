import { defineConfig } from 'umi';
import theme from './src/theme/theme';

export default defineConfig({
  antd: {},
  theme,
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'home',
      component: '@/pages/Home',
      title: 'Pekka——全球领先的高性能渲染平台',
    },
    {
      path: '/data',
      name: 'data',
      component: '@/pages/GlobalData',
      title: '全球数据',
    },
    {
      path: '/values',
      name: 'values',
      component: '@/pages/ProductValues',
      title: '产品理念',
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: '@/pages/Solutions',
      title: '解决方案',
    },
    {
      path: '/cases',
      name: 'cases',
      component: '@/pages/Cases',
      title: '成功案例',
    },
    {
      path: '/history',
      name: 'history',
      component: '@/pages/History',
      title: '发展历程',
    },
    {
      path: '/about',
      name: 'about',
      component: '@/pages/AboutUs',
      title: '关于我们',
    },
    {
      path: '/admin',
      name: 'admin',
      component: '@/pages/Admin',
      title: '配置页',
    },
  ],
  fastRefresh: {},
});
