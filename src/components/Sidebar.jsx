import { NavLink } from "react-router-dom";
import TypesToolbar from "./TypesToolbar";


export default function Sidebar(){


  return (
    <div className="bg-neutral-dark text-white overflow-y-auto flex flex-col justify-between">
      <header>
        <div className="my-12 mx-8">
          LOGO
        </div>
        <nav className="w-full flex flex-col">
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
      <footer className="py-8 px-8 border-t border-neutral-700 text-neutral-400">
        <p>Data from the Art Institute of Chicago public API.</p>
      </footer>
    </div>
  )
}