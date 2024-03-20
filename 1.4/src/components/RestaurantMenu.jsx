import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constant";
const RestaurantMenu = () => {
  const { id } = useParams();

  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.00480&lng=75.94630&restaurantId=496806"
      );
      const info = await data.json();
      console.log(info);
      setRestaurantMenu(
        info.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards
      );
      setRestaurantInfo(info.data.cards[0].card.card.info);
    } catch (err) {
      console.log(err);
    }
  }

  const Menu = () => {
    return restaurantMenu.map((item) => {
      const info = item.card.info;
      return (
        <div>
          <h3>{info.name}</h3>
          <h3>{info.description}</h3>
          <h3>₹{info.price / 100}</h3>
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.imageId}`}
          />
        </div>
      );
    });
  };

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
      <div>
        <h1>menu</h1>
        <Menu />
      </div>
    </div>
  );
};
export default RestaurantMenu;
