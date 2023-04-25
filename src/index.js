import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ServicePage from './Components/ServicePage';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import OilGasService from './Components/OilGasService';
import TechnologyServices from './Components/TechnologyServices';
import Careers from './Components/Careers';
import AboutUs from './Components/AboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>    
        <Route path="services" element={<ServicePage />}/>
        <Route path="about-us" element={<AboutUs />}/>
        <Route path="careers" element={<Careers />}/>
        <Route path="tech" element={<TechnologyServices />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
