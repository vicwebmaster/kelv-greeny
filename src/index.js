import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
