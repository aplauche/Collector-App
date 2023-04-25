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

  return (
    <SortableItem>
      <div className="bg-white rounded-md flex flex-col shadow-md cursor-move collection-card">
        <div className="cover-image">
          <img crossOrigin="true" className="pointer-events-none" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} alt="" width={"100%"} />
          <div className="collection-toolbar">
         
              <Link to={`/artwork/${item.id}`} className="block">
                <HiOutlineEye className="text-3xl text-white" />
              </Link>
              <button onClick={handleCollectionClick}>
                <HiOutlineTrash className="text-3xl text-white"/>
              </button>
       
          </div>
        </div>
      </div>
    </SortableItem>
  )
}