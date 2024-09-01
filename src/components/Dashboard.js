import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
import MainContainer from './MainContainer';
import Error from './Error';

const Dashboard = () => {
  const user = useSelector(store=>store.user.user);
  const navigate = useNavigate();
  
  return user || localStorage.getItem('user') ? (
    <div className='grid grid-cols-12 h-screen'>
      <div className='col-span-4 bg-slate-300'>
      <Navbar />
      </div>
      <div className='col-span-8 bg-blue-300'>
      <Outlet />
      </div>
    </div> 
  ):(<div>
    <Error />

  </div>)
}

export default Dashboard