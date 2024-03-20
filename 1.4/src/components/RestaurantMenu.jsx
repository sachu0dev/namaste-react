import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./constant";
const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=${id}`
    );
    const info = await data.json();
    const checkInput =
      info.data.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    console.log(checkInput);
    if (checkInput === undefined || null) {
      setRestaurantMenu(
        info.data.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[1]?.card
          ?.card?.itemCards
      );
    } else {
      setRestaurantMenu(checkInput);
    }
    setRestaurantInfo(info.data.cards[0].card.card.info);
  }

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div className="menu-left">
        <div>
          <h1>{restaurantInfo.name}</h1>
          <h3>{restaurantInfo.area}</h3>
          <h2 className="city">{restaurantInfo.city}</h2>
          <h3 className="cuissines-name">
            {restaurantInfo.cuisines.join(", ")}
          </h3>
        </div>
        <div className="rate-container">
          <h3 className="rating-box">{restaurantInfo.avgRating}</h3>
          <h3>{restaurantInfo.costForTwoMessage}</h3>
        </div>
      </div>
      <img
        className="restaurant-img"
        src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId}
      />
      <div className="menu-right">
        <p className="menu-header">
          menu <i class="fa-solid fa-bowl-food"></i>
        </p>
        {restaurantMenu.map((item) => {
          const info = item?.card?.info;
          return (
            <div className="menu-list">
              <div className="menu-list-text">
                <h3 className="item-name">{info.name}</h3>
                <h3>{info.description}</h3>
                <h3 className="price">₹{info.price / 100}</h3>
              </div>
              <div className="img-container-list">
                <img
                  alt={info.name}
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default RestaurantMenu;
