import Vue from "vue";
import VueRouter from "vue-router";
// 顶部加载条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

const routes = [{
    path: '/',
    name: 'layout',
    component: () => import('@/components/layout'),
    children: [
      { path: '/', name: 'home', component: () => import('@/views/home') },
    ]
  },
  { path: "/login", name: "login", component: () => import('@/views/login') },
  { path: "/register", name: "register", component: () => import('@/views/register') },
];

const router = new VueRouter({ routes, mode: 'history' });

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router;