import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage.jsx'
import WorkPage from './pages/WorkPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Navbar from './components/Navbar.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <div className=''>
      <Navbar />
    </div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path='/work' element={<WorkPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
