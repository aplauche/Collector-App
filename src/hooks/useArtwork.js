
import axios from "axios";
import { useEffect, useState } from "react"


const useArtwork = (id) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data:res } = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,date_end,place_of_origin,artist_display,exhibition_history`);

        setData(res.data);
        setLoading(false);

      } catch (error) {
        console.log(error)
        setError("There was a problem fetching artwork data from the API... Please try again later.");
        setLoading(false);

      }
    };

    fetchData();
  }, [id]);

  return { loading, data, error };
};


export default useArtwork