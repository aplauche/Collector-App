import axios from "axios";
import { useEffect, useState } from "react"
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


  return (
    <div className="bg-white p-8 rounded-md shadow-md mb-8">
      <div className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-bold ">Browse By Category</h2>
        <button onClick={() => setOpen(open => !open)} className="primary-button">
          {open ? 'Collapse' : 'Expand'}
        </button>
      </div>

      {open && (
        <div className="flex gap-4 flex-wrap mt-8">
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