import { useNavigate } from "react-router-dom";

const Card = ({donation}) => {
  const {id, image, title, category, cardbg, categorybg, textcolor} = donation;
  const navigate = useNavigate()

  const showDetails = () =>{
    navigate(`/donationDetails/${id}`);
  }

  return (
    <div onClick={showDetails} className="rounded-lg m-2 cursor-pointer" style={{background: cardbg}}>
      <img className="w-full lg:h-[200px] object-cover rounded-lg" src={image} alt={title + 'image'} />
      <div className="p-2 mt-2">
        <button className="h-10 w-[100px] font-bold rounded-lg" style={{background: categorybg, color: textcolor}}>{category}</button>
        <h3 className="text-xl font-bold mt-2" style={{color: textcolor}}>{title}</h3>
      </div>
    </div>
  )
}

export default Card
