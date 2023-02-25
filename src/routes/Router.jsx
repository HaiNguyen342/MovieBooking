import React from "react";

import { useRoutes } from "react-router-dom";
import HomeLayout from "../layouts/home/HomeLayout";
import Booking from "../pages/booking/Booking";
import HomePage from "../pages/home/HomePage";
import Login from "../pages/login/Login";
import MovieDetail from "../pages/movie-detail/MovieDetail";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },

        {
          path: "/movie-detail/:id",
          element: <MovieDetail />,
        },

        {
          path: "/booking/:id",
          element: <Booking />,
        },

        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return routing;
}
