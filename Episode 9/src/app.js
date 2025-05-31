import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css"
import Header from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
// import About from "./components/About";
import Constant from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import AboutClass from "./components/AboutClass";
// import Grocery from "./components/Grocery";

// createbrowserrouter = will create routing configuration for us
// will developing router as approuter andd pass router configuration into createbrowserrouter
// routerprovider will provider router configuration to our app

// chunking
// code splitting 
// dynamic bundling
// lazy loading
// on demand loading
// dynamic loading
const Grocery = lazy(() => import("./components/Grocery"))
const About = lazy(() => import("./components/About"))

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
        element: <Suspense fallback={<h1>Loadinnnggg.....</h1>}>
          <About />
        </Suspense>
        // element: <AboutClass />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loadinnnggg.....</h1>}>
          <Grocery />
        </Suspense>
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
