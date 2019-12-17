import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//导入组件
import page from '@/view/index.vue';
import check from '@/view/check.vue';
import test from '@/components/test.vue';

// 定义路由
const routes = [
    {path:'/home',component:page},
    {path:'/check',component:check},
    {path:'/test',component:test},
    {path:'*',redirect: '/home'},
];

// 创建router实例
const router  = new VueRouter({
    mode:'history',
    routes
 });

export default router;
