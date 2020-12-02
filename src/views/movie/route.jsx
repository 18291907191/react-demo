import Layout from '../../components/Layout';
import Movie from './index';

const movieRoute = [
  {
    path: '/movie',
    component: Layout,
    children: [
      {
        path: '',
        component: Movie
      }
    ]
  }
]
export default movieRoute;
