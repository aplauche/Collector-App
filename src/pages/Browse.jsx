import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import ArtCard from "../components/ArtCard";
import Error from "../components/Error";
import Loader from "../components/Loader";
import LoadMore from "../components/LoadMore";
import PageHeading from "../components/PageHeading";
import TypesToolbar from "../components/TypesToolbar";
import useBrowse from "../hooks/useBrowse";


export default function BrowsePage(){

  const { id:categoryID } = useParams()

  const { loading, data, error, page, totalPages, category, setPage, setData } = useBrowse(categoryID)

  const [loadingMore, setLoadingMore] = useState(false)


  const handleLoadMore = async () => {

    setLoadingMore(true)
    const nextPage = page + 1

    try {
      const { data: res } = await axios.get(`https://api.artic.edu/api/v1/artworks${categoryID ? `/search?query[term][artwork_type_id]=${categoryID}&` : '?'}fields=id,title,image_id,date_end,place_of_origin,artist_display&limit=12&page=${nextPage}`);

      setData([...data, ...res.data]);
      setPage(nextPage)
      setLoadingMore(false)

    } catch (error) {

      toast.error('Could not load more posts...')
      console.log(error)
      setLoadingMore(false)

    }

  }

  if(loading) return  <Loader />

  if(error) return <Error message={error} />

  return (
    <div>

      <PageHeading title={`Browse ${category ? category : 'All Artwork'}`} />

      <TypesToolbar current={categoryID ? categoryID : 'all'} />


      {!data.length ? (
        <div className="py-12 text-center">
          <p>There is no artwork currently matching this category.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          { data.map(item => (
            <ArtCard key={item.id} item={item} />
          ))}
        </div>
      )}



      {page < totalPages && (
        <LoadMore isLoading={loadingMore} handleClick={handleLoadMore} />
      )}

    </div>
  )
}