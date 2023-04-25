import { Link } from "react-router-dom";



export default function NoArtwork({background = 'white'}){
  return(
    <div className={`bg-${background} rounded-md p-4 py-12 text-center`}>
      <p className="text-center mb-8">It looks like you haven't added anything to your collection yet...</p>
      <Link to={'/browse'} className="primary-button">
          Explore Artwork Now
      </Link>
    </div>
  )
}