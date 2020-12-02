/**
 * @description router表配置
 * @since 2020/12/01
 * @author 狗尾草
 */

import movieRoute from '../views/movie/route';
import Place from '../views/place';
import Profile from '../views/profile';
import Login from '../views/login';
import Layout from '../components/Layout';
import Error from '../views/error';
import Dashboard from '../views/dashboard';

const routes = [
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: '/',
        component: Dashboard
      }
    ]
  },
  {
    path: '/404',
    component: Error
  },
  {
    path: '/login',
    component: Login,
  },
  ...movieRoute,
  {
    path: '/place',
    component: Place,
  },
  {
    path: '/profile',
    component: Profile,
  },
]

export default routes;
