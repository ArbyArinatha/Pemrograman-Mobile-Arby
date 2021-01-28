import LoginScreen from './Login';
import SignupScreen from './Signup';
import DetailsScreen from './Details';
import OrdersScreen from '././Order/Order';
import TabScreen from './Menu/Tab';
import EditScreen from './Menu/Edit';
import updateScreen from './Menu/update';

module.exports = [

  {
    name: 'Login',
    component: LoginScreen,
    options: { headerShown: false },
  },
  {
    name: 'Signup',
    component: SignupScreen,
    options: { headerShown: false },
  },
  {
    name: 'Tab',
    component: TabScreen,
    options: { headerShown: false },
  },
  {
    name: 'Details',
    component: DetailsScreen,
    options: { headerShown: false },
  },
  {
    name: 'Order',
    component: OrdersScreen,
    options: { headerShown: false },
  },
  {
    name: 'Edit',
    component: EditScreen,
    options: { headerShown: false },
  },

  {
    name: 'update',
    component: updateScreen,
    options: { headerShown: false },
  },
];
