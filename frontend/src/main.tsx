import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import App from './App.tsx';
import { HomePage, ShowsPage, ShowDetailsPage } from './pages';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="home" element={<HomePage />} />
          <Route path="shows" element={<ShowsPage />} />
          <Route path="shows/:id" element={<ShowDetailsPage />} />

          <Route path="not-implemented" element={<h1>Not Implemented</h1>} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
