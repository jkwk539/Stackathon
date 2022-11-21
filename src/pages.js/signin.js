import React, { useEffect } from 'react';
import { GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context.js/Auth';


const Signin = () => {
  const { googleSignIn, user } = UserAuth()

  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try{
      await googleSignIn()
    } catch (err){
      console.log(err)
    }
  }

  useEffect(() => {
    if(user != null) {
      navigate('/content')
    }
  }, [user])

  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>SignIn Page</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
    </div>
  );
};

export default Signin;