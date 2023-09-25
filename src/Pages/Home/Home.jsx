import { useEffect, useState } from "react"
import Banner from "../../Components/Banner/Banner"
import Card from "../../Components/Card/Card";

const Home = () => {
  const [donations, setDonations] = useState([]);
  useEffect(()=>{
    fetch('data.json')
    .then((response)=> response.json())
    .then((data)=> setDonations(data));
  },[])
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-7">
        {donations.map((donation)=> <Card key={donation.id} donation={donation}></Card>)}
      </div>
    </div>
  )
}

export default Home
