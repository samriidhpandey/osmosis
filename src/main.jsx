import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom'; // ✅ IMPORT THIS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>  {/* ✅ ADD THIS WRAPPER */}
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);
