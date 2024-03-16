import { useEffect, useState } from "react";
import { restarunrantList } from "./constant.js";
import RestarunrantCard from "./restaurantCard.jsx";

function filterData(searchTxt, restarunrants) {
  if(searchTxt !== ""){
    return restarunrants.filter((restarunrant) =>
      restarunrant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }
  return restarunrantList; 
}

const Body = () => {
  const [restarunrants, setRestaurants] = useState(restarunrantList);
  const [searchTxt, setSearchTxt] = useState("");
  
    useEffect(()=>{
      console.log("useEffect")
    }, [])
  const handleSearch = () => {
    const data = filterData(searchTxt, restarunrantList);
    setRestaurants(data);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }
          }
        />
        <button className="search-btn" onClick={handleSearch}>
        <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="restaurant-list">
        {restarunrants.map((restarunrant) => (
          <RestarunrantCard {...restarunrant.info} key={restarunrant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;