import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import Home from './ui/Home';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreateOrder, {
  action as CreateOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
import Error from './ui/Error';
import { action as UpdateOrderAction } from '../src/features/order/UpdateOrder';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: '/cart', element: <Cart /> },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: CreateOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        errorElement: <Error />,
        loader: orderLoader,
        action: UpdateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
