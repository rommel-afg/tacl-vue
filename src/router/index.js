import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../layout/MainLayout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/dashboard/DashboardView.vue'),
      },
      {
        path: '/applications',
        name: 'applications',
        component: () => import(/* webpackChunkName: "applications" */ '../views/applications/ApplicationList.vue'),
      },
      {
        path: '/applications/form',
        name: 'application-form',
        component: () => import(/* webpackChunkName: "applicationform" */ '../views/applications/ApplicationForm.vue'),
      },
      {
        path: '/reports',
        name: 'reports',
        component: () => import(/* webpackChunkName: "dashboard" */ '../views/reports/ReportList.vue'),
      },
      {
        path: '/users',
        name: 'usersList',
        // route level code-splitting
        // this generates a separate chunk (users.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "userslist" */ '../views/users/UsersListView.vue')
      },
      {
        path: '/user/roles',
        name: 'userRoles',
        // route level code-splitting
        // this generates a separate chunk (users.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "userRoles" */ '../views/users/UserRoles.vue')
      },
      {
        path: '/users/edit/:id',
        name: 'usersEdit',
        component: () => import(/* webpackChunkName: "useredit" */ '../views/users/UserEditView.vue')
      },
      {
        path: '/users/view/:id',
        name: 'usersView',
        component: () => import(/* webpackChunkName: "userview" */ '../views/users/UserView.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/LoginView.vue'),
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/ForgotView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
