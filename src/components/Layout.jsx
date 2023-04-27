import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";


export default function Layout(){


  return (
    <div className="app-container min-h-screen md:h-screen bg-neutral-light">
      <Sidebar />
      <main className="md:min-h-full py-12 px-4 md:px-8 overflow-y-auto">
        <div>
          <Toaster/>
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>

  )
}

