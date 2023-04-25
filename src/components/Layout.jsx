import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


export default function Layout(){


  return (
    <main className="main-content h-screen bg-neutral-light">
      <Sidebar />
      <div className=" py-12 px-4 md:px-8 overflow-y-auto">
        <div><Toaster/></div>
        <Outlet />
      </div>
      <Footer />
    </main>
  )
}