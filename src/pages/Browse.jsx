import axios from "axios";
import { useState } from "react";
import { useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import ArtCard from "../components/ArtCard";
import Loader from "../components/Loader";
import LoadMore from "../components/LoadMore";
import PageHeading from "../components/PageHeading";
import TypesToolbar from "../components/TypesToolbar";


export default function BrowsePage(){

  const { id:categoryID } = useParams()

  const [category, setCategory] = useState(false)

  const [imageBaseUrl, setImageBaseUrl] = useState('')
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks${categoryID !== undefined ? `/search?query[term][artwork_type_id]=${categoryID}&` : '?'}fields=id,title,image_id,date_end,place_of_origin,artist_display&limit=12`);

        setImageBaseUrl(res.config.iiif_url) 

        setTotalPages(res.pagination.total_pages)

        setData(res.data);

        setPage(1)

        if(categoryID){
          const { data: categoryResponse } = await axios.get(`https://api.artic.edu/api/v1/artwork-types/${categoryID}`);
          setCategory(categoryResponse.data.title);
        } else {
          setCategory(false)
        }

        setLoading(false)

      } catch (error) {
        // setError(error); 
        console.log(error)
        setLoading(false)
      } 
    };

    fetchData();

  }, [categoryID])

  const handleLoadMore = async () => {

    setLoadingMore(true)
    const nextPage = page + 1

    try {
      const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks${categoryID ? `/search?query[term][artwork_type_id]=${categoryID}&` : '?'}fields=id,title,image_id,date_end,place_of_origin,artist_display&limit=12&page=${nextPage}`);

      setData([...data, ...res.data]);
      setPage(nextPage)
      setLoadingMore(false)
    } catch (error) {
      // setError(error);
      console.log(error)
      setLoadingMore(false)
    }

  }

  if(loading) return  <Loader />

  return (
    <div>

      <PageHeading title={`Browse ${category ? category : 'All Artwork'}`} />

      <TypesToolbar current={categoryID ? categoryID : 'all'} />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        { data.map(item => (
          <ArtCard key={item.id} item={item} imageBaseUrl={imageBaseUrl} />
        ))}
      </div>

      {page < totalPages && (
        <LoadMore isLoading={loadingMore} handleClick={handleLoadMore} />
      )}

    </div>
  )
}