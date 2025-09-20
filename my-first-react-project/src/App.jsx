import React from 'react';
import Nav from './assets/components/Nav';
import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './assets/page/Home';
import AboutUs from './assets/page/AboutUs';
import Searvice from './assets/page/Searvice';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/services' element={<Searvice />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;