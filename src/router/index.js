import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import App from '../App'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    },
    {
      path: '/ui',
      name: 'ui',
      component: () => import('@/commonComponents/index'),
      children: [
        {path: '/ui/alter',  component: () => import('@/commonComponents/alert')}
      ]
    }
  ]
})
