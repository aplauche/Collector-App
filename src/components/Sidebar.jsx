import { NavLink } from "react-router-dom";
import TypesToolbar from "./TypesToolbar";


export default function Sidebar(){


  return (
    <div className="bg-neutral-dark text-white overflow-y-auto flex flex-col justify-between shadow-md">
      <header>
        <div className="h-[100px] flex items-center gap-4 px-8">
          <img width={50} height={50} src="/logo.svg" alt="" />
          <div className="text-white font-bold text-xl leading-none">Virtual<br />Curator</div>
        </div>
        <nav className="w-full flex flex-col pt-4 border-t border-neutral-600">
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
      </header>
      <footer className="py-8 px-8 border-t border-neutral-600 text-neutral-400">
        <p>Data from the Art Institute of Chicago public API.</p>
      </footer>
    </div>
  )
}