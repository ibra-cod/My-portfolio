/* eslint-disable react-refresh/only-export-components */
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Header from './Components/Header.jsx';
import Projects from './pages/Projects.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './Components/Footer.jsx'
import './css/App.css'

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
      <section className="section max-w-screen-2xl mx-auto flex justify-center items-center mb-10">
            <Outlet/>
      </section>
    <Footer />


  </>
}

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
