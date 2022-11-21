import React from 'react';
import { UserAuth } from '../context.js/Auth';

const Account = () => {
  const { logOut, user } = UserAuth()
  const handleGoogleSignOut = async () => {
    try {
      await logOut()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='w-[300px] m-auto'>
      <h1 className='text-center text-2xl font-bold pt-12'>Account</h1>
      <div>
        <p>Welcome, {user?.displayName}</p>
      </div>
      <button onClick={handleGoogleSignOut} 
      className="
      transition duration-500 ease-in-out 
      bg-gray-500 hover:bg-green-600 transform 
      hover:-translate-y-1 hover:scale-110 
      rounded-lg p-4 border border-green-900">
        Logout
      </button>
    </div>
  );
};

export default Account;