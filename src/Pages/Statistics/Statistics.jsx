import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { useEffect, useState } from 'react';
import { getDataFromLocalStorage } from '../../LocalStorage/getData';

const Statistics = () => {
  const [totalDonatons, setTotalDonations] = useState([]);
  const [parcent, setParcent] = useState(0);
  const [remaining, setRemaining] = useState(100);

  const calculateParcentage = (donationdata) => {
    let totalparcent = (donationdata.length / 12) * 100;
    let totalRemaining = 100 - totalparcent.toFixed(2);
    setParcent(parseInt(totalparcent.toFixed(2)));
    setRemaining(parseInt(totalRemaining));
  }

  const data = [
    { value: parcent },
    { value: remaining },
  ];

  useEffect(() => {
    const donationdata = getDataFromLocalStorage();
    calculateParcentage(donationdata);
    setTotalDonations(donationdata);
  }, [])

  const size = { height: 300, margin: { right: 5 } };


  return (
    <div>
      <h1 className="text-2xl font-semibold">Total Donation: {totalDonatons.length}</h1>
      <div className='flex items-center justify-center'>
        <PieChart
          colors={['#00C49F', '#FF444A']}
          series={[
            {
              arcLabel: (item) => `${item.value}%`,
              arcLabelMinAngle: 12,
              data,
            },
          ]}
          sx={{
            [`& .${pieArcLabelClasses.root}`]: {
              fill: 'white',
              fontWeight: 'bold',
            },
          }}
          {...size}
        />
      </div>
      <div className='flex lg:flex-row flex-col'>
        <div className='flex items-center m-2'><span className='text-xl font-semibold mr-2'>Your Donation</span> <div className='h-3 w-10 bg-[#00C49F] rounded-xl'></div></div>
        <div className='flex items-center m-2'><span className='text-xl font-semibold mr-2'>Total Donation</span> <div className='h-3 w-10 bg-[#FF444A] rounded-xl'></div></div>
      </div>
    </div>
  )
}

export default Statistics
