import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Home from '../pages/Home'

const RoutingArea = () => {
    const ways = createBrowserRouter([
        {path:"", element:<App/>,children:[
            {path:"",element:<Home/>},
        ]}
        
    ])
  return (
    <RouterProvider router={ways}>

    </RouterProvider>
  )
}

export default RoutingArea