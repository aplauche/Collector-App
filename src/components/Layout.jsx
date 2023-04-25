import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


export default function Layout(){


  return (
    <main className="main-content h-screen">
      <Sidebar />
      <div className="py-12 px-8 bg-neutral-light overflow-y-auto">
        <Outlet />
      </div>
    </main>
  )
}