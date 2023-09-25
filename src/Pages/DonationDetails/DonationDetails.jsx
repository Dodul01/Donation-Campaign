import { useLoaderData, useParams } from "react-router-dom"
import Swal from "sweetalert2";

const DonationDetails = () => {
  const {id} = useParams();
  const allData = useLoaderData();
  const {title, description, image, price, textcolor} = allData.find(item=> item.id == id);

  return (
    <div className="m-1">
      <div className="relative">
        <img className="w-full h-[80vh] object-cover mx-auto rounded-xl" src={image} alt="" />
        <button style={{background: textcolor}} className="text-white z-50 absolute bottom-6 left-4 p-2 rounded">Donate ${price}</button>
        <div className="bg-black opacity-70 absolute bottom-0 w-full h-[100px] z-0 rounded-b-xl"></div>
      </div>
      <div>
        <h1 className="text-4xl font-bold mb-6 mt-2">{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default DonationDetails
