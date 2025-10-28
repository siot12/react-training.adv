import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './styles/index.css';

// Layout
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import Concurrent from './pages/Concurrent';
import State from './pages/State';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="concurrent" element={<Concurrent />} />
          <Route path="state" element={<State />} />
          {/* Catch all - replace with a NotFound component if desired */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
