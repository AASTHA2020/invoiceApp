import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import InvoiceForm from './pages/InvoiceForm';
import Error from './pages/Error';
import Cancelled from './pages/Cancelled';
import ThankYou from './pages/ThankYou';
import { LogIn, CreateAccount } from './buttons';  // Correct imports

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
