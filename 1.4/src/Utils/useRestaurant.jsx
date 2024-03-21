import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../components/constant";

const useRestaurant = (id) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
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

  return { restaurantInfo, restaurantMenu };
};

export default useRestaurant;
