
export default function CollectionPreviewCard({item, imageBaseUrl}){

  const addImageFallback = (event) => {
    event.currentTarget.src = '/fallback.jpg';
  };


  return (
      <div>
        <div className="cover-image cover-image--square">
          {item.image_id ? (
            <img crossOrigin="true" className="rounded-md" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} onError={addImageFallback} alt="" width={"100%"} />
          ) : (
            <img className="rounded-md" src="/fallback.jpg" alt="" width={"100%"} />
          )}
        </div>
      </div>
  )
}