import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterCustom from './Router.js';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
     <RouterCustom></RouterCustom>
  </BrowserRouter>
);


