import { Link } from "react-router-dom";


export default function ArtCard({item, imageBaseUrl}){


  return (
    <div  className="bg-white rounded-md flex flex-col shadow-md">
      <div className="cover-image">
        <img className="rounded-tl-md rounded-tr-md" src={`${imageBaseUrl}/${item.image_id}/full/843,/0/default.jpg`} alt="" width={"100%"} />
        <div className="date-pill">{item.date_end}</div>
      </div>
      <div className="p-5 flex flex-col justify-between items-start h-full">
        <div>
          <h3 className="font-bold text-lg leading-snug mb-4">{item.title}</h3>

          <p className="mb-6 text-black/50">{item.artist_display}</p>
        </div>

        <Link to={`/artwork/${item.id}`} className="primary-button">
          View Details
        </Link>
      </div>
    </div>
  )
}