import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "./config";
import Shimmer from "./shimmer.js"
function Error({error}){
return <div>
<h1>{error}</h1>
<h1>Please check your internet</h1>
</div>


}
const RestaurantMenu = () => {
  const [error,setError]=useState("");
  const params = useParams();
  const [restaurantMenu,setRestaurantMenu]=useState([])
const [restaurantDetails,setRestaurantDetails]=useState({})

  useEffect(function () {
    getRestaurantInfo();
  }, []); 
async function getRestaurantInfo(){
const json =await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${params.id}&catalog_qa=undefined&submitAction=ENTER`).then(data=>data.json()).catch(err=>setError(String(err)))
setRestaurantMenu(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);
setRestaurantDetails(json.data.cards[2].card.card.info)
}

  return !restaurantMenu?<Shimmer/>:( error?<Error error={error}/>:(
    <div><div className="restaurant-details">
  

    <h2>{restaurantDetails.name}</h2>
    <h3>{restaurantDetails.areaName}</h3>
    <h3>{restaurantDetails.city}</h3>
    <h3>{restaurantDetails.avgRatingString}</h3>
    <h3>{restaurantDetails.costForTwoMessage}</h3>
    <img src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId} alt={restaurantDetails.name}/>
  </div>
 <div>
<h1>Menu</h1>
<ul>

  {restaurantMenu.map(item=><li>{item.card.info.name}</li>)}
</ul>
 </div>
    
  
</div>



  ));
};
export default RestaurantMenu;
