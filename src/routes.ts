import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Activation from './views/Activation';

const Routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/account/activate',
    component: Activation,
  },
];

export default Routes;
