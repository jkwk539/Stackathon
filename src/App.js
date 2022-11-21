import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Account from './pages.js/account';
import Home from './pages.js/home';
import Signin from './pages.js/signin';

function App() {
  return (
    <div>
      <nav className='main-navbar'>
      <div className="NavName">Stackathon</div>
      <div>
          <NavLink className={"navLinks"} to="/signin">
            Signin
          </NavLink>
      </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/account' element={<Account />} />
      </Routes>

    </div>
  );
}

export default App;
