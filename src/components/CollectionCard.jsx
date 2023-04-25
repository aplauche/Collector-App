import { Link } from "react-router-dom";
import useCollectionStore from "../store/collectionStore";
import { HiStar, HiOutlineStar, HiOutlineExternalLink, HiOutlineTrash, HiOutlineEye } from "react-icons/hi";
import { SortableItem } from "react-easy-sort";


export default function CollectionCard({item, imageBaseUrl, isSortable = true}){


  const {collection, addToCollection, removeFromCollection} = useCollectionStore()

  console.log(collection)

  const handleCollectionClick = () => {
    if(collection.includes(item.id)){
      console.log('remove')
      removeFromCollection(item.id)
    } else {
      addToCollection(item.id)
    }
  }

  const addImageFallback = (event) => {
    event.currentTarget.src = '/fallback.jpg';
  };

  return (
    <SortableItem>
      <div className="bg-white rounded-md flex flex-col shadow-md cursor-move collection-card">
        <div className="cover-image">
          {item.image_id ? (
            <img crossOrigin="true" className="pointer-events-none" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} onError={addImageFallback} alt="" width={"100%"} />
          ) : (
            <img className="pointer-events-none" src="/fallback.jpg" alt="" width={"100%"} />
          )}
          <div className="collection-toolbar">
         
              <Link to={`/artwork/${item.id}`} className="block">
                <HiOutlineEye className="text-2xl text-white hover:text-primary" />
              </Link>
              <button onClick={handleCollectionClick}>
                <HiOutlineTrash className="text-2xl text-white hover:text-red-300"/>
              </button>
       
          </div>
        </div>
      </div>
    </SortableItem>
  )
}