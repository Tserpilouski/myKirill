import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Account from "../pages/Account";
import Home from "../pages/Home";
import Today from "../pages/Today";
import MyRiceps from "../pages/Riceps";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "account",
        element: <Account />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "today",
        element: <Today />,
      },
      {
        path: "riceps",
        element: <MyRiceps />,
      },
    ],
  },
]);
