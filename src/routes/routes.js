import DashboardLayout from '../layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../pages/NotFoundPage.vue'

// Admin pages
import Overview from 'src/pages/Overview.vue'
import UserProfile from 'src/pages/UserProfile.vue'
import TableList from 'src/pages/TableList.vue'
import Typography from 'src/pages/Typography.vue'
import Icons from 'src/pages/Icons.vue'
import Maps from 'src/pages/Maps.vue'
import Notifications from 'src/pages/Notifications.vue'
import Upgrade from 'src/pages/Upgrade.vue'
import Login from "@/pages/Login.vue";

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/overview',
    meta: {requiresAuth: true},
    children: [
      {
        path: 'overview',
        name: 'Overview',
        component: Overview,
        meta: {requiresAuth: true}
      },
      {
        path: 'user',
        name: 'User',
        component: UserProfile,
        meta: {requiresAuth: true}
      },
      {
        path: 'table-list',
        name: 'Table List',
        component: TableList,
        meta: {requiresAuth: true}
      },
      {
        path: 'typography',
        name: 'Typography',
        component: Typography,
        meta: {requiresAuth: true}
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons,
        meta: {requiresAuth: true}
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps,
        meta: {requiresAuth: true}
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications,
        meta: {requiresAuth: true}
      }
    ]
  },
  // {
  //   path: '/:pathMatch(.*)*', // 捕获所有其他路径
  //   name: 'NotFound',
  //   component: NotFound,
  // },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/



export default routes
