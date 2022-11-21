import React from 'react';
import { Link } from 'react-router-dom';
import { UserAuth } from '../context.js/Auth';

const Navbar = () => {
  const { user, logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex justify-between bg-gray-700 w-full p-4'>
      <Link to='/signin'>
      <h1 className='text-center text-2xl font-bold'>
        Stackathon
      </h1>
      </Link>
      {user?.displayName ? (
        <Link to='/'>
        <button onClick={handleSignOut} className="transition duration-500 ease-in-out 
        bg-gray-500 hover:bg-green-600 transform 
        hover:-translate-y-1 hover:scale-110 
        rounded-lg p-4 border border-green-900">
          Logout
        </button>
        </Link>
      ) : (
        <Link to='/signin'>Sign in</Link>
      )}
    </div>
  );
};

export default Navbar;