import { useEffect, useState } from "react";
import { restaurantList } from "./config";
import RestaurantCard from "./restuarantCard";

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((element) =>
    element.info.name.includes(searchText)
  );
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn "
          onClick={() => {
            /*need to filter data*/
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
        {/**my own code */}
        <button onClick={() => setRestaurants(restaurantList)}>reset</button>
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
//"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
