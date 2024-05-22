
import React from 'react';
import './App.css';
import Header from './components/header/header';
import Hero from './components/hero/herosection';
import Footer from "./components/footer/footer";
import { Route, Routes } from 'react-router-dom';
import { About } from './components/pages/about';


function App() {
  return (
    <>
      <div>
       <Header/>
         <Routes>
            <Route path='herosection' element={ <Hero/>}/>
            <Route path='about' element={<About/> }/>
         </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
