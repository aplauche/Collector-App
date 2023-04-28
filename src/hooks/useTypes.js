
import axios from "axios";
import { useEffect, useState } from "react"


const useTypes = () => {
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://api.artic.edu/api/v1/artwork-types?limit=50`);

        setTypes(data.data);
        setLoading(false);

      } catch (error) {

        setError('There was a problem loading artwork categories... Please try again later.');
        console.log(error)
        setLoading(false);

      }
    };


    fetchData();
    
  }, []);

  return { loading, types, error };
};


export default useTypes