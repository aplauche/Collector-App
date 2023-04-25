import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";


export default function Sidebar(){

  const [navOpen, setNavOpen] = useState(false)

  return (
    <header className="bg-neutral-dark text-white overflow-y-auto flex flex-col justify-between shadow-md">
      <div>
        <div className="w-full flex justify-between items-center px-4 md:px-8">

          <div className="h-[100px] flex items-center gap-4 ">
            <img width={50} height={50} src="/logo.svg" alt="" />
            <div className="text-white font-bold text-xl leading-none">Virtual<br />Curator</div>
          </div>

          <div className="block md:hidden">
            {navOpen ? (
              <HiX onClick={() => setNavOpen(false)} className="text-4xl"/>
            ): (
              <HiMenu onClick={() => setNavOpen(true)} className="text-4xl"/>
            )}
          </div>
        </div>

        <nav className={`${navOpen ? 'flex' : 'hidden'} w-full md:flex flex-col py-4 border-t border-neutral-600`}>
          <NavLink className="navlink" to="/">
            Home
          </NavLink>
          <NavLink className="navlink" to="/browse">
            Browse
          </NavLink>
          <NavLink className="navlink" to="/collection">
            My Collection
          </NavLink>
        </nav>

      </div>
      <div className="hidden md:block py-6 px-8 border-t border-neutral-600 text-neutral-400">
        <p>Data from the Art Institute of Chicago public API.</p>
      </div>

    </header>
  )
}