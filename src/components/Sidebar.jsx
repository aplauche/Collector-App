import { useLayoutEffect, useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Sidebar(){

  const [navOpen, setNavOpen] = useState(false)

  const location = useLocation();

  useLayoutEffect(() => {
    setNavOpen(false)
  },[location])

  return (
    <header className="bg-neutral-dark text-white relative md:overflow-y-auto flex flex-col justify-between shadow-md z-50">
      <div>
        <div className="w-full flex justify-between items-center px-4 md:px-8">

          <div className="h-[100px] flex items-center gap-4 ">
            <img width={180} height={50} src="/logo-2.svg" alt="Virtual Curator Logo" />
          </div>

          <div className="block md:hidden">
            {navOpen ? (
              <HiX onClick={() => setNavOpen(false)} className="text-4xl"/>
            ): (
              <HiMenu onClick={() => setNavOpen(true)} className="text-4xl"/>
            )}
          </div>
        </div>

        <nav className={`${navOpen ? 'flex translate-y-full' : 'hidden'} w-full absolute bottom-0 left-0 md:translate-y-0 md:relative md:flex flex-col py-4 bg-neutral-dark border-t border-neutral-600 z-50`}>
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