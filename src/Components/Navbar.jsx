

const navLi = [ 'My Projects', 'About Me', 'Contact Me',]


export default function Navbar() {

  return (
            <>
                    <nav className="max-w-screen-2xl mx-auto  pt-10 flex justify-between items-center px-4  ">
                      <a href="" className="text-3xl font-bold " > Ibrahim Soma.</a>
                        <ul className="text-dark flex" >
                           {navLi.map((li) => (
                           // eslint-disable-next-line react/jsx-key
                           <li className="px-4">
                            <a className="p-3 text-center font-extrabold text-lg "  href="" type="button" >{li}</a>
                            </li>))}
                        </ul>
                    </nav>
            </>
  )
}


