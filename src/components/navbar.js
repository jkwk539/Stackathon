import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';


const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-200 w-full p-4'>
      <h1 className='text-center text-2xl font-bold'>
        Stackathon
      </h1>

      <Link to='/signin'>Sign in</Link>
      
    </div>
  );
};

export default Navbar;