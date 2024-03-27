import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import ProductDetails from './components/ProductPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/products/:id',
    element: <ProductDetails />,
  },
  {
    path: '/sign-up',
    element: <ProductDetails />,
  }, {
    path: '/sign-in',
    element: <ProductDetails />,
  }, {
    path: '/about-us',
    element: <ProductDetails />,
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
