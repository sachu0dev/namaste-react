import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/helper.js";
import useOnline from "../Utils/useOnline.jsx";
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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }
  const handleSearch = () => {
    const data = filterData(searchTxt, allRestaurants);
    setFilteredRestaurant(data);
  };
  if (filteredRestaurants?.length === 0)
    return (
      <>
        <div className="search-container flex h-4">
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
          className="search-input text-xl p-3 w-[30vh]"
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
