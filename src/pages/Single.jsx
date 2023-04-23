import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function SinglePage(){

  const { id:artID } = useParams()
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [imageBaseUrl, setImageBaseUrl] = useState('')

  useEffect(() => {

    const fetchData = async () => {
      try {

        const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks/${artID}?fields=id,title,image_id,date_end,place_of_origin,artist_display,exhibition_history`);

        setImageBaseUrl(res.config.iiif_url) 

        setData(res.data);

        setLoading(false)

      } catch (error) {
        // setError(error); 
        console.log(error)
      } 
    };

    fetchData();

  },[])


  if(loading){
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="max-w-[720px] mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="font-bold text-4xl mb-8">{data.title}</h1>
      <img crossOrigin="true" className="" src={`${imageBaseUrl}/${data.image_id}/full/843,/0/default.jpg`} alt={data.title} width={"100%"} />
      <div className="py-8">
        <p className="mb-8">{data.artist_display}</p>
        {data.exhibition_history && (
          <p>
            <strong>Exhibition History: </strong>
            {data.exhibition_history}
          </p>
        )}
      </div>
    </div>
  )
}