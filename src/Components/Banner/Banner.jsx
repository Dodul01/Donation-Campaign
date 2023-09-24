const Banner = () => {
  return (
    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/HFcs0LJ/banner-Image.jpg)' }}>
      <div className="hero-overlay bg-white bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl text-black">
          <h1 className="text-3xl font-bold mb-3">I Grow By Helping People In Need</h1>
          <input className="p-3 rounded-l-lg w-[300px] outline-none" type="text" placeholder="Search Here"/>
          <button className="bg-[#FF444A] p-2 rounded-r-lg text-white">Search</button>
        </div>
      </div>
    </div>
  )
}

export default Banner
