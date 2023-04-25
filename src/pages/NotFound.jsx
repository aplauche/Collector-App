import { Link } from "react-router-dom";


export default function NotFound(){

  return (
    <div className={`bg-white rounded-md p-4 py-12 text-center`}>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-center mb-8">Page not found...</p>
      <Link to={'/'} className="primary-button">
          Return to Homepage
      </Link>
    </div>
  )
}