import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Home Page</h1>
      <Link to='/signin'>
        <h2 className='text-center text-3xl font-bold py-8'>Click Me to Sign In!
        </h2>
      </Link>
    </div>
  )
}

export default Home