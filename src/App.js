import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import Footer from "../components/Footer.js";
import { IMG_CDN_URL } from "../components/config.js";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import About from "../components/About.js";
import Error from "../components/Error.js";
import Contact from "../components/Contact.js";
import RestaurantMenu from "../components/RestaurantMenu.js";


const AppLayout = () => {
  return (
    <>
      <Header />

     <Outlet/>
      <Footer />
    </>
  );
};
const appRouter=createBrowserRouter([

{
  path:'/',
  element:<AppLayout/>,
  errorElement:<Error/>,
  children:[
{index:true,element:<Body/>},
    {
path:"/about",
element:<About/>

    }
    ,{
path:"/contact",
element:<Contact/>

    },
    {
      path:"/restaurant/:id",
      element:<RestaurantMenu/>
    }
  ]
}

])
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
