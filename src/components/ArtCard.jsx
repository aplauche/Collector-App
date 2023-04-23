import { Link } from "react-router-dom";
import useCollectionStore from "../store/collectionStore";
import { HiStar, HiOutlineStar } from "react-icons/hi";


export default function ArtCard({item, imageBaseUrl}){


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
    <div  className="bg-white rounded-md flex flex-col shadow-md">
      <div className="cover-image">
        <img crossOrigin="true" className="rounded-tl-md rounded-tr-md" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} alt="" width={"100%"} />
        <div className="pill">{item.date_end}</div>
      </div>
      <div className="p-5 flex flex-col justify-between items-start h-full">
        <div>
          <h3 className="font-bold text-lg leading-snug mb-4">{item.title}</h3>

          <p className="mb-6 text-black/50">{item.artist_display}</p>
        </div>

        <div className="w-full flex justify-between items-center">
          <Link to={`/artwork/${item.id}`} className="primary-button">
            View Details
          </Link>
          <button onClick={handleCollectionClick}>
            {collection.includes(item.id) ? (
              <HiStar className="text-3xl" />
            ) : (
              <HiOutlineStar className="text-3xl" />
            )}
          </button>
        </div>

      </div>
    </div>
  )
}