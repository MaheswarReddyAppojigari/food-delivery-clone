import { useState } from "react";
import { restaurantList } from "./config";
import RestaurantCard from "./restuarantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((element) =>
    element.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [restaurants, setrestaurants] = useState(restaurantList);
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn "
          onClick={() => {
            /*need to filter data*/
            const data = filterData(searchText, restaurants);
            setrestaurants(data);
          }}
        >
          Search
        </button>
        {/**my own code */}
        <button onClick={() => setrestaurants(restaurantList)}>reset</button>
        {/**my own code ends */}
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
