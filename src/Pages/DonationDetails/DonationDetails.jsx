import { useLoaderData, useParams } from "react-router-dom"
import Swal from "sweetalert2";
import { getDataFromLocalStorage } from "../../LocalStorage/getData";
import { setDataToLocalStorage } from "../../LocalStorage/setData";
import { useEffect, useState } from "react";

const DonationDetails = () => {
  const [prevData, setPrevData] = useState()
  const { id } = useParams();
  const allData = useLoaderData();
  const currentPageData = allData.find(item => item.id == id);
  const { title, image, textcolor, price, description } = currentPageData;
  const [isDonated, setIsDonated] = useState(false);  
  
  useEffect(()=>{
    setPrevData(getDataFromLocalStorage());
  },[isDonated])

  const handleDonation = () => {
    const checkDuplicate = prevData.find(prev => prev.id == id)
    setIsDonated(true);

    if (!checkDuplicate) {
      Swal.fire(
        'Good job!',
        `You Donate For ${title} $${price}!`,
        'success'
      )
      setDataToLocalStorage(prevData, currentPageData);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `You already donate for ${title}!`
      })
    }
  }

  return (
    <div className="m-1">
      <div className="relative">
        <img className="w-full h-[80vh] object-cover mx-auto rounded-xl" src={image} alt="" />
        <button onClick={handleDonation} style={{ background: textcolor }} className="text-white z-50 absolute bottom-6 left-4 p-2 rounded">Donate ${price}</button>
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
