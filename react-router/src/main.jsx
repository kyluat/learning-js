import React, {Component} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([{
    path: '/',
    element: <>This is Root</>,
    errorElement: <ErrorPage />
}, {
    path: '/about',
    element: <>About</>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
