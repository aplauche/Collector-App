import { useEffect, useLayoutEffect, useState } from "react"
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
import useTypes from "../hooks/useTypes";
import Error from "./Error";


export default function TypesToolbar({current = null}){


  const [open, setOpen] = useState(false)

  const {types, error, loading} = useTypes()

  useLayoutEffect(() => {
    setOpen(false)
  }, [current])


  return (
    <div className="bg-white py-4 px-6 rounded-md shadow-md mb-8">
      <button onClick={() => setOpen(open => !open)} className="w-full flex justify-between items-center">
        <h2 className="text-xl font-bold ">Browse By Category</h2>
        
        <div className={`${open ? 'rotate-180' : ''} bg-primary w-12 h-12 flex justify-center items-center rounded-full border border-black transition-all`}>
          <HiOutlineChevronDown />
        </div>
        
      </button>

      {open && (

        !error ? (
          <div className="flex gap-2 gap-y-3 sm:gap-3 flex-wrap mt-8">
            <Link to={`/browse/`} className={`chip ${current === 'all' ? 'active': ''}`}>
              Browse All
            </Link>
            {types.map(type => (
              <Link to={`/browse/${type.id}`} key={type.id} className={`chip ${current == type.id ? 'active': ''}`}>
                {type.title}
              </Link>
            ))}
          </div>
        ) : (
          <Error message={error} />
        )

      )}
    </div>
  )

}