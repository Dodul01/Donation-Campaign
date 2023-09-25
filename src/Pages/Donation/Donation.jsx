import { useEffect, useState } from "react"
import { getDataFromLocalStorage } from "../../LocalStorage/getData"
import DonationCard from "../../Components/DonationCard/DonationCard";

const Donation = () => {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(4);
  const [isBtnVisible, setIsBtnVisible] = useState(true);

  useEffect(() => {
    const localStorageData = getDataFromLocalStorage();
    setData(localStorageData);
  }, []);

  const handleShowAll = () => {
    setNum(data.length);
    setIsBtnVisible(false)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mt-2">Donations: {data.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        {data.slice(0, num).map((data) => <DonationCard key={data.id} data={data}></DonationCard>)}
      </div>
      {data.length > 4 && isBtnVisible &&
        <div className="w-[100px] mx-auto">
          <button onClick={handleShowAll} className=" bg-[#009444] text-white p-2 rounded-lg my-3 font-semibold">See All</button>
        </div>
      }
    </div>
  )
}

export default Donation
