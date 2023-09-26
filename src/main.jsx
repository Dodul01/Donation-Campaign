import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Donation from './Pages/Donation/Donation.jsx'
import Statistics from './Pages/Statistics/Statistics.jsx'
import DonationDetails from './Pages/DonationDetails/DonationDetails.jsx'
import Error from './Pages/ErrorPage/Error.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/donation',
        element: <Donation></Donation>
      },
      {
        path: '/donationDetails/:id',
        loader: ()=> fetch('../data.json'),
        element: <DonationDetails></DonationDetails>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
