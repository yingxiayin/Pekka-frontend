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
    { path: '/home', name: 'home', component: '@/pages/Home' },
    { path: '/data', name: 'data', component: '@/pages/GlobalData' },
    { path: '/values', name: 'values', component: '@/pages/ProductValues' },
    { path: '/solutions', name: 'solutions', component: '@/pages/Solutions' },
    { path: '/cases', name: 'cases', component: '@/pages/Cases' },
    { path: '/history', name: 'history', component: '@/pages/History' },
    { path: '/about', name: 'about', component: '@/pages/AboutUs' },
    { path: '/admin', name: 'admin', component: '@/pages/Admin' },
  ],
  fastRefresh: {},
});
