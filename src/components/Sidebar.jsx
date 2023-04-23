import { NavLink } from "react-router-dom";
import TypesToolbar from "./TypesToolbar";


export default function Sidebar(){


  return (
    <aside className="bg-neutral-dark text-white overflow-y-auto">
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
    </aside>
  )
}