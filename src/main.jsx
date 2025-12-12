// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';

// importa CSS do Bootstrap a partir do pacote npm
import 'bootstrap/dist/css/bootstrap.min.css';
// importa JS do Bootstrap (bundle)
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// CSS custom
import './style.css';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
