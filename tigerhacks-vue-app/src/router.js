import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue';
import ScheduleTab from './views/ScheduleTab.vue';
import SponsorsTab from './views/SponsorsTab.vue';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      children: [
        {
          path: 'schedule',
          name: 'schedule',
          component: ScheduleTab
        }, 
        {
          path: 'sponsors', 
          name: 'sponsors', 
          component: SponsorsTab
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
