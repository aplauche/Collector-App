import { useEffect, useLayoutEffect, useState } from "react"
import useCollectionStore from "../store/collectionStore"
import SortableList from "react-easy-sort";
import CollectionCard from "../components/CollectionCard";
import Loader from "../components/Loader";
import PageHeading from "../components/PageHeading";
import NoArtwork from "../components/NoArtwork";
import Error from "../components/Error";
import { HiOutlinePhotograph } from "react-icons/hi";
import GalleryModal from "../components/GalleryModal";
import useCollection from "../hooks/useCollection";

export default function CollectionPage(){

  const { collection, updateCollection } = useCollectionStore()

  const {data, loading, error, setData} = useCollection(collection)

  const [showGallery, setShowGallery] = useState(false)

  useLayoutEffect(() => {

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

  if(error) return <Error message={error} />

  return (
    <>

        <PageHeading title={"My Collection"} />

          <div className="flex justify-between items-center flex-wrap mb-8 pb-8 border-b border-black/50">
            <p className="text-black/75 max-w-[720px] mb-4">Click and drag to arrange your collection.</p>
            <button className="primary-button flex items-center gap-2" onClick={()=>setShowGallery(true)}>
              <HiOutlinePhotograph className="text-2xl"/> Gallery View
            </button>
          </div>

          {data.length > 0 ? (
            <SortableList
              onSortEnd={onSortEnd}
              className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
              draggedItemClassName="dragged"
            >
              { data.length && data.map(item => (   
                <CollectionCard key={item.id} item={item}  />
              ))}
            </SortableList>
          ) : (
            <NoArtwork />
          )}


        
        <GalleryModal open={showGallery} toggle={setShowGallery} data={data}  />
        
    </>
  )
}