import { useDispatch } from "react-redux";
import { addItem } from "../Utils/Redux/cartSlice";
import { IMG_CDN_URL } from "./constant";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name } = item.food ? item.food.card.info : item.card.info;
        return (
          <div
            key={item.food?.card.info.id}
            className="p-2 m-2  border-dark-cream border-b-2 flex justify-between items-center "
          >
            <div className="w-[60%]">
              <span className="text-xl font-semibold">
                {/* {item.card.info.name} */}
                {name}
              </span>
              <p className="text-md font-bold text-light-orange">
                ₹ {item.card.info.price / 100}
              </p>
              {item.card.info?.isVeg ? (
                <p className="inline-block border border-3 border-light-green rounded-md px-1 font-bold text-xs mr-4 text-light-green">
                  veg
                </p>
              ) : (
                <p className="inline-block border border-3 border-light-orange rounded-md px-1 font-bold text-xs mr-4 text-light-orange">
                  {item.card.info.itemAttribute.vegClassifier}
                </p>
              )}
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            {item.card.info.imageId ? (
              <div className="relative">
                <button
                  className="p-2 rounded-lg bottom-1 left-12 bg-light-orange text-light-gray font-bold shadow-lg absolute"
                  onClick={() => handleAddItem(item)}
                >
                  ADD +
                </button>
                <img
                  className="w-[10rem] h-[8rem] object-cover rounded-2xl"
                  src={IMG_CDN_URL + item.card.info.imageId}
                  alt="img not found"
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
