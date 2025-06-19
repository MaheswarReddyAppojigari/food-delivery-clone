import { Link } from "react-router";
import { IMG_CDN_URL } from "../components/config.js";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRatingString,id,
}) => {
  return (
   <Link to={'/restaurant/'+`${id}`}> <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines.join(" ")}</h3>
      <h4>{avgRatingString} Stars</h4>
    </div></Link>
  );
};
export default RestaurantCard;
