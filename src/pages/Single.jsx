import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"
import useCollectionStore from "../store/collectionStore"
import {imageBaseUrl} from '../data/constants'
import useArtwork from "../hooks/useArtwork"


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

  const {data, loading, error} = useArtwork(artID)

  const addImageFallback = (event) => {
    event.currentTarget.src = '/fallback.jpg';
  };


  if(loading) return  <Loader />

  if(error) return <Error message={error} />


  return (
    <div className="max-w-[720px] mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="bg-primary inline-block px-6 p-1 rounded-md mb-4">{data.date_end}{data.place_of_origin ? ` - ${data.place_of_origin}` : ''}</div>
      <h1 className="font-bold text-4xl mb-8">{data.title}</h1>
      {data.image_id ? (
        <img crossOrigin="true" className="" src={`${imageBaseUrl}/${data.image_id}/full/843,/0/default.jpg`} onError={addImageFallback} alt="" width={"100%"} />
      ) : (
        <img className="" src="/fallback.jpg" alt="" width={"100%"} />
      )}
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