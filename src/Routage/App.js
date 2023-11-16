import ReactDOM from "react-dom";
import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Help from './Pages/Help';
import Layout from './Navbar';
import Section from './Pages/Section';
import Footer from './Pages/Footer';
export default function App() {
  return (
    
    <Fragment>
    <BrowserRouter>
        <Layout />
      <div>
        <Routes>
          <Route path="/" element={<Section content={<Home/>}/>} />
          <Route path="/contact" element={<Section content={<Contact/>}/>} />
          <Route path="/help" element={<Section content={<Help/>}/>} />
        </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
    </Fragment>
  );
}
