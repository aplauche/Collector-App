import Loader from "./Loader";


export default function LoadMore({isLoading, handleClick}){


  return (
    <div className="flex justify-center items-center py-8 px-4">
      {isLoading ? (
        <Loader />
      ) : (
        <button onClick={handleClick} className="primary-button bg-white border-2 border-black">
          Load More
        </button>
      )}
    </div>
  )
}