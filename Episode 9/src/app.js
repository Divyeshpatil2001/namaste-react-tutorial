import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import About from "./components/About";
import Constant from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import AboutClass from "./components/AboutClass";

// createbrowserrouter = will create routing configuration for us
// will developing router as approuter andd pass router configuration into createbrowserrouter
// routerprovider will provider router configuration to our app


const AppLayout = () => {
  console.log(<Body />) // virtual dom
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        // element: <About />
        element: <AboutClass />
      },
      {
        path: "/contact",
        element: <Constant />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter} />);
