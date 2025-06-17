import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import Footer from "../components/Footer.js";
import { IMG_CDN_URL } from "../components/config.js";
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "../components/About.js";
import Error from "../components/Error.js";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const appRouter=createBrowserRouter([

{
  path:'/',
  element:<AppLayout/>,
  errorElement:<Error/>
}
,{

  path:'/about',
  element:<About/>
}
])
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
