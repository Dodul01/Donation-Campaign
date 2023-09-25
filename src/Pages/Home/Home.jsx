import { useEffect, useState } from "react"
import Card from "../../Components/Card/Card";

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = () => {
    const filterValue = donations.filter(item=> item.category.toLowerCase().includes(inputValue.toLowerCase()));
    setDisplayData(filterValue);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        setDonations(data);
        setDisplayData(data);
      });
  }, [])

  return (
    <div>
      <header>
        <div className="hero min-h-[65vh]" style={{ backgroundImage: 'url(https://i.ibb.co/HFcs0LJ/banner-Image.jpg)' }}>
          <div className="hero-overlay bg-white bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-3xl text-black">
              <h1 className="text-3xl font-bold mb-3">I Grow By Helping People In Need</h1>
              <input onChange={handleChange} className="p-[7px] rounded-l-lg lg:w-[300px] md:w-[250px] border border-solid border-gray-400 outline-none" name="search" type="text" placeholder="Search Here" />
              <button onClick={handleSearch} className="bg-[#FF444A] p-2 rounded-r-lg text-white">Search</button>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 my-7">
        {displayData.map((donation) => <Card key={donation.id} donation={donation}></Card>)}
      </div>
    </div>
  )
}

export default Home
