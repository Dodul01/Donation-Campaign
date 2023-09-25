import { useEffect, useState } from "react"
import { getDataFromLocalStorage } from "../../LocalStorage/getData"

const Donation = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    const localStorageData = getDataFromLocalStorage();
    setData(localStorageData);
  },[]);

  return (
    <div>
      <h1 className="text-2xl font-bold mt-2">Donations: {data.length}</h1>
      {data.map((data)=> <p>{data.title}</p>)}
    </div>
  )
}

export default Donation
