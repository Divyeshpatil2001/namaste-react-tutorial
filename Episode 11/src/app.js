import React, { lazy, Suspense, useEffect, useState } from "react";
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
import AboutClass from "./components/AboutClass";
import UserContext from "./utils/userContext";
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
  const [userName,setUserName] = useState();
  useEffect(() => {
    // make a api call with username and password
    const data = {
      name : "divyesh patil"
    }
    setUserName(data.name);
  }, [])
  
  return (
    // we can set name to differnt component to different name
    // <UserContext.Provider value={{loggedInUser : userName}}>
    //   <div className="app">
    //     <UserContext.Provider value={{loggedInUser : "userName"}}>
    //       <Header />
    //     </UserContext.Provider>
    //     <Outlet />
    //   </div>
    // </UserContext.Provider>

  <UserContext.Provider value={{loggedInUser : userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
  </UserContext.Provider>
// here only on header we are change but in about us page it will deault which already set  
/* <div className="app">
      <UserContext.Provider value={{loggedInUser : "userName"}}>
      <Header />
</UserContext.Provider>
      <Outlet />
    </div> */
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
          <AboutClass />
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
