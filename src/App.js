import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Protection from './components/protection';
import { AuthContextProvider } from './context.js/Auth';
import Account from './pages.js/account';
import Home from './pages.js/home';
import Signin from './pages.js/signin';
import Content from './components/content';


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/account' element={
            <Protection>
              <Account />
            </Protection>
          } 
          />
          <Route path='/content' element={<Content />} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
