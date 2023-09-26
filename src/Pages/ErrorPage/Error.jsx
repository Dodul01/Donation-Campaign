import { useNavigate, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  const handleGoBack = () =>{
    navigate('/')
  }

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div>
        <h1 className="text-5xl font-semibold text-center mb-4">{error.status}</h1>
        <h1 className="text-3xl font-semibold">Something Want <span className="font-bold">Wrong</span>!</h1>
        <div className="w-[200px] mx-auto mt-6">
          <button onClick={handleGoBack} className="bg-[#FF444A] text-white p-2 w-[150px] font-semibold rounded-3xl">Go Back</button>
        </div>
      </div>
    </div>
  )
}

export default Error
