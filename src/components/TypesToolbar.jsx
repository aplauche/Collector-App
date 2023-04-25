import axios from "axios";
import { useEffect, useState } from "react"
import { HiOutlineChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";


export default function TypesToolbar({current = null}){

  const [types, setTypes] = useState([])
  const [open, setOpen] = useState(false)
  


  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const { data } = await axios.get(`https://api.artic.edu/api/v1/artwork-types?limit=50`);
        setTypes(data.data);
      } catch (error) {
        //setError(error);
        console.log(error)
      }
    };
    fetchTypes();
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [current])


  return (
    <div className="bg-white py-4 px-6 rounded-md shadow-md mb-8">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-xl font-bold ">Browse By Category</h2>
        <button onClick={() => setOpen(open => !open)} className={`flex items-center gap-4`}>
            <div className={`${open ? 'rotate-180' : ''} bg-primary w-12 h-12 flex justify-center items-center rounded-full border border-black transition-all`}>
              <HiOutlineChevronDown />
            </div>
        </button>
      </div>

      {open && (
        <div className="flex gap-3 flex-wrap mt-8">
          <Link to={`/browse/`} className={`chip ${current === 'all' ? 'active': ''}`}>
            Browse All
          </Link>
          {types.map(type => (
            <Link to={`/browse/${type.id}`} key={type.id} className={`chip ${current == type.id ? 'active': ''}`}>
              {type.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

}