import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.scss';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import ContentUkr from './pages/ContentUkr';
import ContentRus from './pages/ContentRus';
import ContentEng from './pages/ContentEng';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Provider store={store}><App /></Provider>,
    children: [
      {
        path: "uk",
        element: <ContentUkr />
      },
      {
        path: "ru",
        element: <ContentRus />
      },
      {
        path: "en",
        element: <ContentEng />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
