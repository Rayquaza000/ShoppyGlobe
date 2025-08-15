import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Beauty from './component/Beauty.jsx';
import Fragrances from './component/Fragrances.jsx';
import Furniture from './component/Furniture.jsx';
import Groceries from './component/Groceries.jsx';
import Cart from './component/cart.jsx';
import ProductDetail from './component/ProductDetail.jsx'
import ErrorPath from './component/ErrorPath.jsx'
import Home from './component/Home.jsx'

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/beauty",
        element:<Beauty/>
      },
      {
        path:"/fragrances",
        element:<Fragrances/>
      },
      {
        path:"/furniture",
        element:<Furniture/>
      },
      {
        path:"/groceries",
        element:<Groceries/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/:id",
        element:<ProductDetail/>
      }
    ],
    errorElement:<ErrorPath/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>,
)
