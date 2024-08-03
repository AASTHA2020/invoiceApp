import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Ensure this path is correct
import About from './pages/About'; // Ensure this path is correct
import InvoiceForm from './pages/InvoiceForm'; // Ensure this path is correct
import Error from './pages/Error'; // Ensure this path is correct
import Cancelled from './pages/Cancelled'; // Ensure this path is correct
import ThankYou from './pages/ThankYou'; // Ensure this path is correct

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
