import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Contact from "./components/Contact.jsx";
import Root from "./components/Root.jsx";

const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
        path: 'contacts/:id',
        element: <Contact />,
    }]
}, {
    path: '/about',
    element: <>About</>
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
