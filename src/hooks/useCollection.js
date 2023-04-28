
import axios from "axios";
import { useEffect, useState } from "react"


const useCollection = (collection, previewMode=false) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  let url = `https://api.artic.edu/api/v1/artworks?ids=${collection.join(',')}&fields=id,title,image_id,date_end,place_of_origin,artist_display`
  
  if(previewMode){
    url = `https://api.artic.edu/api/v1/artworks?ids=${collection.slice(0,3).join(',')}&fields=id,title,image_id,date_end,place_of_origin,artist_display`
  }


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data:res } = await axios.get(url);

        if(previewMode) {
          setData(res.data)
        } else {
          const sorted = collection.map((id) => res.data.find((item) => item.id === id));
          setData(sorted);
        }

        setLoading(false);

      } catch (error) {

        setError('There was a problem loading your collection... Please try again later.');
        console.log(error)
        setLoading(false);

      }
    };

    if(collection.length){
      fetchData();
    }
  }, []);

  return { loading, data, error, setData };
};


export default useCollection