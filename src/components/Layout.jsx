import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


export default function Layout(){


  return (
    <main className="main-content min-h-screen md:h-screen bg-neutral-light">
      <Sidebar />
      <div className="min-h-full py-12 px-4 md:px-8 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}