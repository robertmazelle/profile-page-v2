import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import About from './pages/about/about';
import Biography from './pages/biography/biography';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: '',
        element: <About></About>
      },
      {
        path: 'biography',
        element: <Biography></Biography>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


