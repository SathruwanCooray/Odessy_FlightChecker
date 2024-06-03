import React from 'react';
import { Link } from 'react-router-dom';
import Plane from '../assets/Plane.png'

function Home() {
  return (
    <>
    <div className='flex p-4'>
      <div className='flex flex-col mt-20 w-7/12 h-3/4 p-10 backdrop-blur-lg border-2 border-neutral-700/20 rounded-lg shadow-2xl shadow-pink-600/20'>
        <h1 className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text text-8xl font-semibold'>
          Odessy Flight Checker
        </h1>
        <p className='text-white text-lg py-10'>
          Welcome to AirFair, your ultimate destination for seamless flight checking. Whether you're planning a business trip or a leisurely getaway, AirFair simplifies your journey with real-time airline information at your fingertips. Explore flight schedules, check seat availability, and compare prices effortlessly. With our user-friendly interface and comprehensive data, navigating through your travel plans has never been easier. Start your journey with AirFair today and experience the convenience of hassle-free travel planning.
        </p>
        <Link 
          to="/flightcheck" 
          className="
            p-2 mt-5 ml-5 w-56 rounded-full backdrop border-2
            text-white font-bold text-md flex items-center justify-center
            transition duration-300 ease-in-out
            hover:bg-gradient-to-r hover:from-purple-400 hover:via-pink-500 hover:to-red-500
            hover:border-transparent hover:border-opacity-0 hover:shadow-lg hover:shadow-pink-500/50
            transform hover:scale-105
          "
        >
          Flight Check
        </Link>
      </div>
    </div>
    <img src={Plane} className='absolute top-44 w-5/12 right-8'></img>
    </>
    
  );
}

export default Home;