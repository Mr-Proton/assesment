import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'
import Users from './Users'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/:id" element={<Users />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


