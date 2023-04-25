

export default function Error({message}){
  return (
    <div className="w-full my-4 py-8 px-4 bg-red-50 border-2 border-red-200 rounded-md">
      {message}
    </div>
  )
}