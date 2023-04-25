import axios from "axios"
import { useEffect, useState } from "react"
import ArtCard from "../components/ArtCard"
import useCollectionStore from "../store/collectionStore"
import SortableList, { SortableItem } from "react-easy-sort";
import CollectionCard from "../components/CollectionCard";
import Loader from "../components/Loader";
import PageHeading from "../components/PageHeading";
import NoArtwork from "../components/NoArtwork";

// TODO: REFACTOR THIS LOGIC FOR SORTABLE

export default function CollectionPage(){

  const { collection, updateCollection, emptyCollection } = useCollectionStore()


  const [imageBaseUrl, setImageBaseUrl] = useState('')
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {

        const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks?ids=${collection.join(',')}&fields=id,title,image_id,date_end,place_of_origin,artist_display`);

        setImageBaseUrl(res.config.iiif_url)

        console.log(res.data)
        
        const sorted = collection.map((id) => res.data.find((item) => item.id === id));

        setData(sorted);

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

  useEffect(() => {

    if(data.length){
      const sorted = collection.map((id) => data.find((item) => item.id === id));
      setData(sorted);
    }

  }, [collection])

  const arrayMove = (arr, fromIndex, toIndex) => {
    var element = arr[fromIndex];
    arr.splice(fromIndex, 1);
    arr.splice(toIndex, 0, element);
  }

  const onSortEnd = (oldIndex, newIndex) => {
    const collectionCopy = [...collection]
    arrayMove(collectionCopy, oldIndex, newIndex)
    updateCollection(collectionCopy)
  };

  if(loading) return  <Loader />

  return (
    <>

        <PageHeading title={"My Collection"} />

        <p className="text-black/50 mb-8 pb-8 border-b border-black/50">Click and drag to arrange your collection.</p>

          {data.length > 0 ? (
            <SortableList
              onSortEnd={onSortEnd}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
              draggedItemClassName="dragged"
            >
              { data.length && data.map(item => (   
                <CollectionCard key={item.id} item={item} imageBaseUrl={imageBaseUrl} />
              ))}
            </SortableList>
          ) : (
            <NoArtwork />
          )}






    </>
  )
}