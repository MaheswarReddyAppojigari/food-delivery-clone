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
export default RestaurantCard;
