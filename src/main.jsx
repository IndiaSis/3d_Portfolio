import React from 'react'
import ReactDOM from 'react-dom/client'
import Apps from "./Apps.jsx"
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/about" element={<Apps />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
