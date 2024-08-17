import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Layout from './components/Layout.jsx'
import Login from './components/Login-SignUp/Login.jsx'
import SignUp from './components/Login-SignUp/SignUp.jsx'
import Home from './components/Home/Home.jsx'
import Home2 from './components/Home/Home2.jsx'

const router = createBrowserRouter
  (createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/imglink' element={<Home2 />} />
    </Route>
  )
  )

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
