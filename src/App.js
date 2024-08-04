// src/App.js

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import About from './pages/About';
import InvoiceForm from './pages/InvoiceForm';
import Error from './pages/Error';
import Cancelled from './pages/Cancelled';
import ThankYou from './pages/ThankYou';
import { LogIn, CreateAccount } from './buttons'; // Correct imports
import { AuthProvider } from './context/auth';
import { StateProvider } from './context/stateContext'; // Import StateProvider

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <StateProvider> {/* Use StateProvider here */}
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/invoice-form" element={<InvoiceForm />} />
            <Route path="/error" element={<Error />} />
            <Route path="/cancelled" element={<Cancelled />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<CreateAccount />} />
          </Routes>
        </StateProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
