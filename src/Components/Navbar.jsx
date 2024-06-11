import { useRef } from "react"
import { NavLink } from "react-router-dom"


const navLi = [ 'My Projects', 'About Me', 'Contact Me',]


export default function Navbar() {
  const ref = useRef('')

  console.log(ref.current);

  return (
            <>
                    <nav className="max-w-screen-2xl mx-auto  pt-10 flex justify-between items-center px-4  ">
                      <NavLink to='/' className="text-3xl font-bold ">Ibrahim Soma.</NavLink>
                        <ul className="text-dark flex" >
                           {navLi.map((li) => (
                           // eslint-disable-next-line react/jsx-key
                           <li className="px-4">
                              <NavLink to={`/${li.replace(' ', '')}`} className="p-3 text-center font-extrabold text-lg ">{li}</NavLink>
                            </li>))}
                        </ul>
                    </nav>
            </>
  )
}


