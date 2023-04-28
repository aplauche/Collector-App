
import axios from "axios";
import { useEffect, useState } from "react"


const useCollection = (collection) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data:res } = await axios.get(`https://api.artic.edu/api/v1/artworks?ids=${collection.join(',')}&fields=id,title,image_id,date_end,place_of_origin,artist_display`);

        const sorted = collection.map((id) => res.data.find((item) => item.id === id));

        setData(sorted);
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