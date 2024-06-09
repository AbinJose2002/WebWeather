import React from 'react'
import Navbar from './components/Navbar'
import Search from './components/Search'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


export default function App() {
  const router1 = createBrowserRouter([
    {path: "/",
    element: <><Navbar/><Search/></>
    },
    {path: "/About",
    element: <><Navbar/><About/></>
    }
  ])
  return (
    <div>
      <RouterProvider router={router1}/>
    </div>
  )
}
