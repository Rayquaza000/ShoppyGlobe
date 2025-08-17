import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import appStore from './utils/appStore.js';
import { Provider } from 'react-redux'
import Cart from './component/cart.jsx';
import ErrorPath from './component/ErrorPath.jsx'

const Beauty=lazy(()=>import("./component/Beauty.jsx"));
const Home=lazy(()=>import("./component/Home.jsx"));
const Fragrances=lazy(()=>import("./component/Fragrances.jsx"));
const Furniture=lazy(()=>import("./component/Furniture.jsx"));
const Groceries=lazy(()=>import("./component/Groceries.jsx"));
const ProductDetail=lazy(()=>import("./component/ProductDetail.jsx"));

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Suspense fallback={<div>Loading</div>}><Home/></Suspense>
      },
      {
        path:"/beauty",
        element:<Suspense fallback={<div>Loading</div>}><Beauty/></Suspense>
      },
      {
        path:"/fragrances",
        element:<Suspense fallback={<div>Loading</div>}><Fragrances/></Suspense>
      },
      {
        path:"/furniture",
        element:<Suspense fallback={<div>Loading</div>}><Furniture/></Suspense>
      },
      {
        path:"/groceries",
        element:<Suspense fallback={<div>Loading</div>}><Groceries/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/:id",
        element:<Suspense fallback={<div>Loading</div>}><ProductDetail/></Suspense>
      }
    ],
    errorElement:<ErrorPath/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
)
