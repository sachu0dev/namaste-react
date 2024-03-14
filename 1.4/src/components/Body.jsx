import { useState } from "react";
import { restarunrantList } from "./constant.js";
import RestarunrantCard from "./restaurantCard.jsx";


function filterData(searchTxt, restarunrants){
   return restarunrants.filter((restarunrant)=> restarunrant.info.name.includes(searchTxt))
}
const Body = () => {
  const [restarunrants, setRestaurants] = useState(restarunrantList);
  const [searchTxt, setSearchTxt] = useState("");
  return (
    <>
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)}/>
      <button className="search-btn" onClick={()=> {
        setRestaurants(restarunrantList);
        const data = filterData(searchTxt, restarunrants);
        setRestaurants(data);
      }}>Search</button>
    </div>
    <div className="restaurant-list">
      {
        restarunrants.map((restarunrant) => {
            return <RestarunrantCard {...restarunrant.info} key={restarunrant.info.id}/>
        })
      }
    </div>
    </>
  );
}

export default Body;