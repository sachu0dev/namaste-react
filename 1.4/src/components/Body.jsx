import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper.js";
import useRestaurants from "../Utils/useRestarants.jsx";
import Shimmer from "./Shimmer.jsx";
import RestarunrantCard from "./restaurantCard.jsx";

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const {
    allRestaurants,
    setAllRestaurants,
    filteredRestaurants,
    setFilteredRestaurant,
  } = useRestaurants();
  const handleSearch = () => {
    const data = filterData(searchTxt, allRestaurants);
    setFilteredRestaurant(data);
  };
  if (filteredRestaurants?.length === 0)
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
            }}
          />
          <button className="search-btn" onClick={handleSearch}>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </>
    );
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button className="search-btn" onClick={handleSearch}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restarunrant) => (
          <Link
            to={`restaurant/${restarunrant.info.id}`}
            key={restarunrant.info.id}
          >
            <RestarunrantCard {...restarunrant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
