import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    setShowItems(!showItems);
  };
  return (
    <div className="m-4">
      <div
        className="w-auto bg-dark-cream p-3 rounded-md flex justify-between font-bold text-xl items-center cursor-pointer"
        onClick={handleClick}
      >
        <span>
          {data.title} ({data.itemCards.length})
        </span>
        <SlArrowDown />
      </div>
      {showItems ? <ItemList items={data.itemCards} /> : null}
    </div>
  );
};

export default RestaurantCategory;
