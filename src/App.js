import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header.js";
import Body from "../components/Body.js";
import Footer from "../components/Footer.js";
import { IMG_CDN_URL } from "../components/config.js";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" ")}</h3>
      <h4>{avgRatingString} Stars</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
