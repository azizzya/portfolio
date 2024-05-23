import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import './global.scss'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
