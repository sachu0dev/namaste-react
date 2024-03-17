import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import RestarunrantCard from "./restaurantCard.jsx";

function filterData(searchTxt, allRestaurants) {
  if (searchTxt !== "") {
    return allRestaurants.filter((restarunrant) =>
      restarunrant.info.name.toLowerCase().includes(searchTxt.toLowerCase())
    );
  }
  return allRestaurants;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurant] = useState([1]);
  const [searchTxt, setSearchTxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setFilteredRestaurant(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setAllRestaurants(
      json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
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
          <RestarunrantCard {...restarunrant.info} key={restarunrant.info.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
