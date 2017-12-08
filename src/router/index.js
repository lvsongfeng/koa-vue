import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import App from '../App'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home'),
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import('@/components/home'),
          children: [{
            path: 'detail/:id',
            name: 'detail',
            component: () => import('@/components/detail')
          }]
        }      
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/login')
    }
  ]
})
