
import Favorites from "../components/Favorites";
import TypesToolbar from "../components/TypesToolbar";


export default function HomePage(){

  return (
    <div>
   
      <h1 className="font-bold text-4xl mb-8">Welcome.</h1>
      <TypesToolbar />
      <Favorites />
      <div className="grid grid-cols-3 gap-5">
      </div>

    </div>
  )
}