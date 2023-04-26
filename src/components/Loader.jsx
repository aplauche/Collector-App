import { RevolvingDot } from "react-loader-spinner";


export default function Loader(){

  return (
    <div className="w-full h-full min-h-[150px] flex items-center justify-center">
      <RevolvingDot
        height="100"
        width="100"
        radius="24"
        color="#000"
        secondaryColor=''
        ariaLabel="loading..."
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}