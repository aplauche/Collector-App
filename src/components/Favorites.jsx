import { Link } from "react-router-dom";
import useCollection from "../hooks/useCollection";
import useCollectionStore from "../store/collectionStore";
import CollectionPreviewCard from "./CollectionPreviewCard";
import Error from "./Error";
import Loader from "./Loader";
import NoArtwork from "./NoArtwork";


export default function Favorites(){

  const { collection } = useCollectionStore()

  const {data, loading, error} = useCollection(collection, true)


  return (
    <div className="border-2 bg-white shadow-md  p-4 md:p-8 rounded-md mb-8">
      <h2 className="text-xl font-bold mb-8">My Collection</h2>

      {loading && (
        <Loader />
      )}

      {error && (
        <Error message={error}/>
      )}

      {!loading && !error && !data.length && (
        <NoArtwork background="neutral-light" />
      )}


      {data.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map(item => (
            <CollectionPreviewCard key={item.id} item={item} />
          ))}
         
            <Link to="/collection" className="min-h-[100px] bg-neutral rounded-md font-bold  flex justify-center items-center  hover:bg-primary text-center" >
              Visit<br />Collection
            </Link>

        </div>
      )}

    </div>
  )
}