import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constant";
const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=496806"
    );
    const info = await data.json();
    console.log(info);
    setRestaurantMenu(
      info.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
        .categories[0].itemCards
    );
    setRestaurantInfo(info.data.cards[0].card.card.info);
  }

  return (
    <div>
      <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurantInfo.name}</h2>
        <img src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId} />
        <h3>{restaurantInfo.area}</h3>
        <h3>{restaurantInfo.city}</h3>
        <h3>{restaurantInfo.avgRating}</h3>
        <h3>{restaurantInfo.costForTwoMessage}</h3>
      </div>
      <div>{restaurantInfo.menu.items}</div>
    </div>
  );
};
export default RestaurantMenu;
