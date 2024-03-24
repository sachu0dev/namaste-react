import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./constant";
const RestaurantMenu = () => {
  const { id } = useParams();
  const { restaurantInfo, restaurantMenu } = useRestaurant(id);

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
          menu <i class="fa-solid fa-bowl-food"></i>
        </p>
        {restaurantMenu.map((item) => {
          const info = item?.card?.info;
          return (
            <div className="menu-list py-4 flex justify-between">
              <div className="menu-list-text w-[30vw]">
                <h3 className="item-name text-xl font-bold text-dark-green mb-2">
                  {info.name}
                </h3>
                <h3 className="text-dark-orange font-medium mb-2">
                  {info.description}
                </h3>
                <h3 className="price text-light-green text-lg font-bold">
                  ₹{info.price / 100}
                </h3>
              </div>
              <div className="img-container-list w-[7vw] h-[10vh] bg-lightgray rounded-xl ml-12">
                <img
                  className="w-full h-full object-cover rounded-xl"
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
