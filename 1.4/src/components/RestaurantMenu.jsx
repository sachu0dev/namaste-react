import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { FETCH_MENU_URL, IMG_CDN_URL } from "./constant";
const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const [categories, setCategories] = useState([]);
  console.log(categories);
  console.log(restaurantInfo);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const info = await data.json();
    const menuList =
      info.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    setCategories(menuList);

    setRestaurantInfo(info.data.cards[2].card.card.info);
  }
  useEffect(() => {
    getRestaurantInfo();
    console.log("its running");
  }, []);

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="menu-container mx-[30vw] my-8 text-dark-green bg-dark-gray rounded-3xl p-8">
      <div className="menu-left flex justify-between">
        <div>
          <h1 className="text-4xl font-extrabold">{restaurantInfo.name}</h1>
          <h3 className="text-2xl font-bold mb-4 text-dark-orange">
            {restaurantInfo.area}
          </h3>
          <h2 className="city text-xl font-bold text-light-black">
            {restaurantInfo.city}
          </h2>
          <h3 className="cuissines-name text-lg font-bold text-light-orange">
            {restaurantInfo.cuisines.join(", ")}
          </h3>
        </div>
        <div className="rate-container flex flex-col justify-center items-center">
          <h3 className="rating-box text-5xl font-extrabold text-light-orange">
            {restaurantInfo.avgRating}
          </h3>
          <h3 className="text-xl font-bold">
            {restaurantInfo.costForTwoMessage}
          </h3>
        </div>
      </div>
      <img
        className="restaurant-img w-full h-[20vh] object-cover rounded-lg"
        src={IMG_CDN_URL + restaurantInfo.cloudinaryImageId}
      />
      <div className="menu-right">
        <p className="menu-header mt-8 text-4xl p-4 ">
          menu <i class="fa-solid fa-bowl-food"></i>category
        </p>
      </div>
      {categories.map((category) => {
        return (
          <div>
            <h1 className="w-full bg-black ">{category.card.card.title}</h1>
            <RestaurantCategory itemCards={category.card.card.itemCards} />
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
