import React from 'react'
import Login from './Login'
import Dashboard from './Dashboard'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Initialize from './Initialize'
import Product from './Product'
import Customer from './Customer'
import Transactions from './Transactions'
import Reports from './Reports'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />

  },
  {
    path:"/dashboard",
    element:<Dashboard />,
    children:[
      {
        path:"initialize",
        element:<Initialize />
      },
      {
        path:"product",
        element:<Product />,
      },
      {
        path:"customer",
        element:<Customer />,
      },
      {
        path:"transactions",
        element:<Transactions />
      },
      {
        path:"reports",
        element:<Reports />
      }
    ]
  },
  
  
])

const Body = () => {

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body