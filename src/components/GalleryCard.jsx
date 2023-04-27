import { HiOutlineEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import {imageBaseUrl} from '../data/constants'

export default function GalleryCard({item }){


  const addImageFallback = (event) => {
    event.currentTarget.src = '/fallback.jpg';
  };

  return (
  
      <div className="relative">
        {item.image_id ? (
          <img crossOrigin="true" className="pointer-events-none" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} onError={addImageFallback} alt="" width={"100%"} />
        ) : (
          <img className="pointer-events-none" src="/fallback.jpg" alt="" width={"100%"} />
        )}
      </div>

  )
}
