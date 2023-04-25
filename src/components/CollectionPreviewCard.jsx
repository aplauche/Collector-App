



export default function CollectionPreviewCard({item, imageBaseUrl}){


  return (
      <div>
        <div className="cover-image cover-image--square">
          <img crossOrigin="true" className="rounded-md" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} alt={item.title} width={"100%"} />
        </div>
      </div>
  )
}