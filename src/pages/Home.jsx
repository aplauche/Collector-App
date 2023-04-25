
import Favorites from "../components/Favorites";
import PageHeading from "../components/PageHeading";
import TypesToolbar from "../components/TypesToolbar";


export default function HomePage(){

  return (
    <>
   
      <PageHeading title={`Welcome.`} />
      <Favorites />
      <TypesToolbar />
      
    </>
  )
}