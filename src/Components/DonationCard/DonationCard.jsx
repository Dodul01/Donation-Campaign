import { useNavigate } from "react-router-dom";

const DonationCard = ({data}) => {
  const {id, image, title, category, cardbg, categorybg, textcolor, price} = data;
  const navigate = useNavigate()

  const handleViewDetails = ()=>{
    navigate(`/donationDetails/${id}`)
  }

  return (
    <div style={{background: cardbg}} className="m-2 rounded-lg flex">
      <div>
        <img className="h-[180px] w-[300px] object-cover rounded-l-lg" src={image} alt="" />
      </div>
      <div className="p-4">
        <p style={{background: categorybg, color: textcolor}} className=" my-2 inline px-2 py-1 rounded-lg">{category}</p>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <h2 style={{color: textcolor}} className="text-2xl font-bold my-2">${price}</h2>
        <button onClick={handleViewDetails} style={{background: textcolor}} className="text-white p-2 rounded-lg font-semibold">View Details</button>
      </div>
    </div>
  )
}

export default DonationCard
