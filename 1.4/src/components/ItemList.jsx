import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Utils/Redux/cartSlice";
import { IMG_CDN_URL } from "./constant";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };
  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
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
                {item.card.info.name}
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
                <p className="inline-block border border-3 border-fulllight-orange rounded-md px-1 font-bold text-xs mr-4 text-light-orange">
                  {item.card.info.itemAttribute.vegClassifier}
                </p>
              )}
              <p className="text-sm">{item.card.info.description}</p>
            </div>
            {item.card.info.imageId ? (
              <div className=" flex flex-col justify-center items-center">
                <img
                  className="w-[10rem] h-[6rem] object-cover rounded-2xl mb-2"
                  src={IMG_CDN_URL + item.card.info.imageId}
                  alt="img not found"
                />
                <div className=" flex justify-between rounded-lg bg-light-orange text-light-gray font-bold shadow-lg p-2">
                  {item.foodCount ? (
                    <button
                      className="px-2  flex justify-center items-center"
                      onClick={() => handleRemoveItem(item?.id)}
                    >
                      <FaMinusCircle />
                    </button>
                  ) : null}

                  <div>
                    Add <span className="">{item?.foodCount}</span>
                  </div>
                  <button
                    className="px-2  flex justify-center items-center"
                    onClick={() => handleAddItem(item)}
                  >
                    <FaPlusCircle />
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
