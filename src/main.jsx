import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Store from "./routes/Store";
import Car from "./routes/Car";
import ErroPage from "./routes/ErroPage";
import Profile from "./routes/Profile";
import GlobalStyles from "./assets/components/GlobalStyle";

// const router = createBrowserRouter([{
//   path : '/',
//   element : <Store/>
// },

// {
//   path : '/car',
//   element : <Car/>
// },

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage />,
    children: [
      {
        path: "/store",
        element: <Store />,
      },

      {
        path: "/car",
        element: <Car />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);

// ])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>
);
