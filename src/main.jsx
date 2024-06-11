/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Header from './Components/Header.jsx';
import Projects from './pages/Projects.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children : [
      {
        path : '/',
        element : <HomePage />
      },
      {
        path : 'MyProjects',
        element : <Projects/>
      },
      {
        path : 'AboutMe',
        element : <AboutMe />
        
      }
      ,
      {
        path : 'ContactMe',
        element : <Contact />
        
      }
    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

function Root () {

  return <>
    <Header/>
    <div>
      <div className="">
            <Outlet/>
      </div>
    </div>

  </>

}


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
