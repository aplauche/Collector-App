import axios from "axios"
import { useEffect, useState } from "react"
import ArtCard from "../components/ArtCard"
import useCollectionStore from "../store/collectionStore"


export default function CollectionPage(){

  const { collection } = useCollectionStore()


  const [imageBaseUrl, setImageBaseUrl] = useState('')
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {

        const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks?ids=${collection.join(',')}&fields=id,title,image_id,date_end,place_of_origin,artist_display`);

        setImageBaseUrl(res.config.iiif_url) 

        //setTotalPages(res.pagination.total_pages)

        setData(res.data);

      } catch (error) {
        // setError(error); 
        console.log(error)
      } 
    };

    fetchData();
  }, [collection])

  return (
    <div>

        <h1 className="font-bold text-4xl mb-8">My Collection</h1>
        <div className="grid grid-cols-3 gap-5">
          { data.map(item => (
            <ArtCard key={item.id} item={item} imageBaseUrl={imageBaseUrl} />
          ))}
        </div>

    </div>
  )
}