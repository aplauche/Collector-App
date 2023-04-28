
import axios from "axios";
import { useEffect, useState } from "react"


const useBrowse = (categoryID) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const [category, setCategory] = useState(false)

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)



  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data:res } = await axios.get(`https://api.artic.edu/api/v1/artworks${categoryID !== undefined ? `/search?query[term][artwork_type_id]=${categoryID}&` : '?'}fields=id,title,image_id,date_end,place_of_origin,artist_display&limit=12`);

        setData(res.data);

        setTotalPages(res.pagination.total_pages)

        setData(res.data);

        setPage(1)

        if(categoryID){
          const { data: categoryResponse } = await axios.get(`https://api.artic.edu/api/v1/artwork-types/${categoryID}`);
          setCategory(categoryResponse.data.title);
        } else {
          setCategory(false)
        }

        setLoading(false);

      } catch (error) {
        console.log(error)
        setError("There was a problem fetching artwork data from the API... Please try again later.");
        setLoading(false);

      }
    };

    fetchData();
  }, [categoryID]);

  return { loading, data, error, category, page, totalPages, setPage, setData };
};


export default useBrowse