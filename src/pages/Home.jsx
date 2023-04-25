
import { Link } from "react-router-dom";
import Favorites from "../components/Favorites";
import PageHeading from "../components/PageHeading";
import TypesToolbar from "../components/TypesToolbar";


export default function HomePage(){

  return (
    <>
   
      <PageHeading title={`Welcome.`} />
      <div className="flex flex-wrap md:flex-row justify-between items-start gap-8 pb-8 mb-8 border-b border-black/50">
        <p className="max-w-[450px] text-black/75">Virtual Curator is connected to the Art Institute of Chicago database. Browse pieces from the extensive catalog and create your own collection.</p>
        <Link to="/browse" className="primary-button">
          Start Exploring
        </Link>
      </div>
      <TypesToolbar />
      <Favorites />

      
    </>
  )
}