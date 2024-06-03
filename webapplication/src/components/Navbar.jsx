import React from 'react';
import Logo from '../assets/Logo1.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navBarItems = ["Home", "About", "Contact", "FlightCheck"];

  return (
    <nav className='sticky top-0 z-10 flex py-4 backdrop-blur-lg border-b border-neutral-700/100 justify-between items-center'>
      <div className='flex items-center'>
        <Link to={'/home'}>
          <img className='h-16 px-4' src={Logo} alt='Airplane Logo' />
        </Link>
        <span className='bg-white text-transparent bg-clip-text text-4xl font-bold'><Link to={'/home'}>Odessy</Link></span>
      </div>
      <ul className='flex items-center text-white px-5'>
        {navBarItems.map((item, index) => (
          <li className='px-5' key={index}><Link to={`/${item.toLowerCase()}`}>{item}</Link></li>
        ))}
      </ul>
      <div className='flex text-white px-5'>
        <p className=' px-5 items-center'>Login</p>
        <p className='px-5 items-center'>SignUp</p>
      </div>
    </nav>
  );
};

export default Navbar;