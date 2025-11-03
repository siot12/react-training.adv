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
import Hooks from './pages/Hooks.jsx';
import { Provider } from 'react-redux';
import { store} from './store.js';
import OptimisticUpdates from './pages/OptimisticUpdates.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="concurrent" element={<Concurrent />} />
            <Route path="state" element={<State />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="optimistic-updates" element={<OptimisticUpdates />} />
            {/* Catch all - replace with a NotFound component if desired */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
