import Home from './views/Home';
import Dashboard from './views/Dashboard';
import Department from './views/Department';
import Activation from './views/Activation';

const Routes = [
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
  },
  {
    // fuck . u can change this if u want
    path: '/account/activate',
    component: Activation,
    exact: true,
  },
  {
    path: '/department',
    component: Department,
    exact: false,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
];

export default Routes;
