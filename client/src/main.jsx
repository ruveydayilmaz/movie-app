import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'
import Providers from './contexts/Providers';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />} />
        </Routes>
      </BrowserRouter>    
  </Providers>
)
