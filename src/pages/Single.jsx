import axios from "axios"
import { useEffect, useState } from "react"
import { HiStar } from "react-icons/hi"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import useCollectionStore from "../store/collectionStore"


export default function SinglePage(){

  const {collection, addToCollection, removeFromCollection} = useCollectionStore()

  const handleCollectionClick = () => {
    if(collection.includes(data.id)){
      removeFromCollection(data.id)
    } else {
      addToCollection(data.id)
    }
  }

  const { id:artID } = useParams()

  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [imageBaseUrl, setImageBaseUrl] = useState('')

  useEffect(() => {

    const fetchData = async () => {
      try {

        const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks/${artID}?fields=id,title,image_id,date_end,place_of_origin,artist_display,exhibition_history`);

        setImageBaseUrl(res.config.iiif_url) 

        setData(res.data);

        setLoading(false)

      } catch (error) {
        // setError(error); 
        console.log(error)
      } 
    };

    fetchData();

  },[])


  if(loading) return  <Loader />

  return (
    <div className="max-w-[720px] mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="bg-primary inline-block px-6 p-1 rounded-md mb-4">{data.date_end} - {data.place_of_origin}</div>
      <h1 className="font-bold text-4xl mb-8">{data.title}</h1>
      <img crossOrigin="true" className="" src={`${imageBaseUrl}/${data.image_id}/full/843,/0/default.jpg`} alt={data.title} width={"100%"} />
      <div className="py-8">
        <p className="mb-8">{data.artist_display}</p>
        {data.exhibition_history && (
          <p>
            <strong>Exhibition History: </strong>
            {data.exhibition_history}
          </p>
        )}
      </div>
      <div className="border-t border-black/50 pt-6">

        {collection.includes(data.id) ? (
          <>
            <p className="text-black/50 mb-2">
              Currently Featured in Your Collection.
            </p>
            <button onClick={handleCollectionClick} className="primary-button bg-white">
              Remove From My Collection
            </button>
          </>
        ) : (
          <button onClick={handleCollectionClick} className="primary-button">
            Add To My Collection
          </button>
        )}


      </div>
    </div>
  )
}