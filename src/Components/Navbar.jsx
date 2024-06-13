import {useState } from "react"
import { NavLink } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu";


const navLi = [ 'My Projects', 'About Me', 'Contact Me',]


export default function Navbar() {

    const [isOpen, setIsOpen] =  useState(false);
  return (
            <>
                    <nav className="max-w-screen-2xl mx-auto  pt-10 flex justify-between items-center px-4  flex-wrap  ">
                      <NavLink to='/' className="text-3xl font-bold ">Ibrahim Soma.</NavLink>
                        <ul className="text-dark flex max-[1000px]:hidden " >
                           {navLi.map((li) => (
                           // eslint-disable-next-line react/jsx-key
                           <li key={li} className="px-4">
                              <NavLink to={`/${li.replace(' ', '')}`} className="p-3 text-center font-extrabold text-lg ">{li}</NavLink>
                            </li>))}
                        </ul>
                        <div className="min-[1000px]:hidden">
                            <HamburgerMenu onClick={() => setIsOpen(!isOpen)} />
                        </div>
                    </nav>
                    {isOpen && 
                    <div className="
                        min-[1000px]:hidden text-center  
                        text-white mx-auto rounded-md w-4/5 m-11
                        bg-gradient-to-r from-cyan-500 to-blue-500">
                      <ul className="text-dark" >
                        {navLi.map((li) => (
                        // eslint-disable-next-line react/jsx-key
                          <li key={li} className="px-4 text-7xl">
                            <NavLink to={`/${li.replace(' ', '')}`} className="p-3 text-center font-extrabold text-lg basis-full">{li}</NavLink>
                          </li>))}
                      </ul>
                    </div> }
            </>
  )
}


