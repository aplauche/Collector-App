import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import {imageBaseUrl} from '../data/constants'


export default function CollectionPreviewCard({item}){

  const addImageFallback = (event) => {
    event.currentTarget.src = '/fallback.jpg';
  };

  return (
      <div>
        <Link to={`artwork/${item.id}`} className="collection-preview cover-image cover-image--square block">
          {item.image_id ? (
            <img crossOrigin="true" className="rounded-md" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} onError={addImageFallback} alt="" width={"100%"} />
          ) : (
            <img className="rounded-md" src="/fallback.jpg" alt="" width={"100%"} />
          )}
          <div className="collection-preview-cover opacity-0  rounded-md transition-opacity w-full h-full absolute top-0 left-0 bg-black/50 flex justify-center items-center text-white font-bold">
            <HiOutlineEye className="text-4xl text-white " />
          </div>
        </Link>
      </div>
  )
}