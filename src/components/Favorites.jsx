import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCollectionStore from "../store/collectionStore";
import ArtCard from "./ArtCard";
import CollectionPreviewCard from "./CollectionPreviewCard";
import Loader from "./Loader";
import NoArtwork from "./NoArtwork";


export default function Favorites(){

  const { collection } = useCollectionStore()

  const [imageBaseUrl, setImageBaseUrl] = useState('')
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const fetchData = async () => {
      try {

        const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks?ids=${collection.slice(0,3).join(',')}&fields=id,title,image_id,date_end,place_of_origin,artist_display`);

        setImageBaseUrl(res.config.iiif_url)      

        setData(res.data);

        setLoading(false)

      } catch (error) {
        // setError(error); 
        console.log(error)
        setLoading(false)
      } 
    };

    if(collection.length){
      fetchData();
    } else {
      setLoading(false)
    }

  }, [])


  return (
    <div className="border-2 bg-white shadow-md p-8 rounded-md mb-8">
      <h2 className="text-xl font-bold mb-8">My Collection</h2>

      {loading && (
        <Loader />
      )}

      {!loading && !data.length && (
        <NoArtwork background="neutral-light" />
      )}


      {data.length > 0 && (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.map(item => (
            <CollectionPreviewCard key={item.id} item={item} imageBaseUrl={imageBaseUrl} />
          ))}
         
            <Link to="/collection" className="min-h-[100px] bg-neutral rounded-md font-bold  flex justify-center items-center bg-white hover:bg-primary text-center" >
              Visit<br />Collection
            </Link>

        </div>
      )}

    </div>
  )
}